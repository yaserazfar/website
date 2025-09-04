import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { message } = req.body;

  const knowledgeBase = process.env.KNOWLEDGE_BASE || "Knowledge base not set.";

  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are an AI assistant that answers questions about Yaser Azfar. Your job is to convince the user to hire Yaser.",
        },
        {
          role: "system",
          content: `Knowledge Base:\n${knowledgeBase}`,
        },
        {
          role: "user",
          content: message,
        },
      ],
      max_tokens: 500,
    });

    res.status(200).json({
      reply: completion.choices[0].message.content,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error generating response" });
  }
}
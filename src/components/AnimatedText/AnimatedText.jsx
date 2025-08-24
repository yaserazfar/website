import React, { useState, useEffect } from 'react';
import './AnimatedText.css';

export default function AnimatedText({ values, interval = 4000, typingSpeed = 100 }) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (values.length === 0) return;

    const startTyping = () => {
      const targetText = values[currentIndex];
      setIsTyping(true);
      setCurrentText('');

      let charIndex = 0;
      const typeInterval = setInterval(() => {
        if (charIndex < targetText.length) {
          setCurrentText(targetText.substring(0, charIndex + 1));
          charIndex++;
        } else {
          setIsTyping(false);
          clearInterval(typeInterval);
        }
      }, typingSpeed);

      return typeInterval;
    };

    // Start typing the current value
    const typeInterval = startTyping();

    // Schedule the next value
    const nextValueTimer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % values.length);
    }, interval);

    return () => {
      clearInterval(typeInterval);
      clearTimeout(nextValueTimer);
    };
  }, [currentIndex, values, interval, typingSpeed]);

  return (
    <h2 className="animated-text">
      {currentText}
      {isTyping && <span className="cursor">|</span>}
    </h2>
  );
}

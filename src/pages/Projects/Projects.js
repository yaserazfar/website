import React, { Component } from 'react';
import { Card, CardContent, CardActions, Button, IconButton, Typography, Box } from '@mui/material';
import reactImage from '../../images/react-logo.png'
import javaImage from '../../images/java-logo.png'
import nvidiaLogo from '../../images/nvidia-logo.png'
import csLogo from '../../images/cs-logo.png'
import secureUSBLogo from '../../images/secureusb-logo.png'
import ufdlLogo from '../../images/ufdl-logo.png'
import './Projects.css';

class Projects extends Component {
    render() {
        return (
            <div className="projects-background">
                <div className="content-wrapper">
                    <div className="projects-grid">
                        {/* React Portfolio Website */}
                        <Card sx={{ width: '90%', maxWidth: 600, margin: 'auto', mb: 2 }}>
                            <Box
                                sx={{
                                    height: 176,
                                    background: `url(${reactImage}) center / cover`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Typography variant="h5" sx={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                                    React JS: Portfolio Website
                                </Typography>
                            </Box>
                            <CardContent>
                                <Typography>
                                    To learn more about React and Web Development, I decided to create a portfolio website for myself. This website consists of 4 pages, and includes components from React-MDL and Bootstrap.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href="https://github.com/yaserazfar/website" rel="noopener nonreferrer" target="_blank">
                                    <Button variant="contained" color="primary">GitHub</Button>
                                </a>
                            </CardActions>
                        </Card>

                        {/* Java Encoder */}
                        <Card sx={{ width: '90%', maxWidth: 600, margin: 'auto', mb: 2 }}>
                            <Box
                                sx={{
                                    height: 176,
                                    background: `url(${javaImage}) center / cover`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Typography variant="h5" sx={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                                    Java: Word-Based Move-to-Front Encoder
                                </Typography>
                            </Box>
                            <CardContent>
                                <Typography>
                                    To apply my knowledge of the dynamic data structure, linked lists, I was assigned to create a program which encoded a text file using a linked list of the words. Then a program which decoded the encoded text document.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href="https://github.com/yaserazfar/linkedListEncoder" rel="noopener nonreferrer" target="_blank">
                                    <Button variant="contained" color="primary">GitHub</Button>
                                </a>
                            </CardActions>
                        </Card>

                        {/* C++ CUDA Game of Life */}
                        <Card sx={{ width: '90%', maxWidth: 600, margin: 'auto', mb: 2 }}>
                            <Box
                                sx={{
                                    height: 176,
                                    background: `url(${nvidiaLogo}) center / cover`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Typography variant="h5" sx={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                                    C++ CUDA: Conway's Game of Life
                                </Typography>
                            </Box>
                            <CardContent>
                                <Typography>
                                    To learn about C++ and CUDA I created Conway's Game of Life in CUDA. This process started off with first creating the game in C++ and then translating it to CUDA to have parallel threads to run the game.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href="https://github.com/yaserazfar/conwayGameOfLife" rel="noopener nonreferrer" target="_blank">
                                    <Button variant="contained" color="primary">GitHub</Button>
                                </a>
                            </CardActions>
                        </Card>

                        {/* C# Secure USB */}
                        <Card sx={{ width: '90%', maxWidth: 600, margin: 'auto', mb: 2 }}>
                            <Box
                                sx={{
                                    height: 176,
                                    background: `url(${csLogo}) center / cover`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Typography variant="h5" sx={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                                    C#.NET: Secure USB Application
                                </Typography>
                            </Box>
                            <CardContent>
                                <Typography>
                                    To learn about C#.NET and Windows Forms I created a Secure USB Application. This application allows users to encrypt and decrypt files on a USB drive. The application uses AES encryption to secure the files.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href="https://github.com/yaserazfar/secureUSB" rel="noopener nonreferrer" target="_blank">
                                    <Button variant="contained" color="primary">GitHub</Button>
                                </a>
                            </CardActions>
                        </Card>

                        {/* Secure USB Logo Project */}
                        <Card sx={{ width: '90%', maxWidth: 600, margin: 'auto', mb: 2 }}>
                            <Box
                                sx={{
                                    height: 176,
                                    background: `url(${secureUSBLogo}) center / cover`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Typography variant="h5" sx={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                                    Secure USB Logo Project
                                </Typography>
                            </Box>
                            <CardContent>
                                <Typography>
                                    A project focused on secure USB drive management and encryption technologies.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href="https://github.com/yaserazfar/secureUSB" rel="noopener nonreferrer" target="_blank">
                                    <Button variant="contained" color="primary">GitHub</Button>
                                </a>
                            </CardActions>
                        </Card>

                        {/* UFDL Project */}
                        <Card sx={{ width: '90%', maxWidth: 600, margin: 'auto', mb: 2 }}>
                            <Box
                                sx={{
                                    height: 176,
                                    background: `url(${ufdlLogo}) center / cover`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Typography variant="h5" sx={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                                    UFDL Project
                                </Typography>
                            </Box>
                            <CardContent>
                                <Typography>
                                    A project involving UFDL (Universal Feature Description Language) technologies and applications.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a href="https://github.com/yaserazfar/ufdl" rel="noopener nonreferrer" target="_blank">
                                    <Button variant="contained" color="primary">GitHub</Button>
                                </a>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;

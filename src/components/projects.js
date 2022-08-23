import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';
import reactImage from '../../public/react-logo.png'
import javaImage from '../../public/java-logo.png'
import nvidiaLogo from '../../public/nvidia-logo.png'
import csLogo from '../../public/cs-logo.png'
import secureUSBLogo from '../../public/secureusb-logo.png'
import ufdlLogo from '../../public/ufdl-logo.png'

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                        <div className="projects-grid" >
                            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '176px', background: `url(${reactImage}) center / cover`}}>
                                    React JS: Portfolio Website
                                </CardTitle>
                                <CardText>
                                    To learn more about React and Web Development, I decided to create a portfolio website for myself. This website consits of 4 pages, and includes components from React-MDL and Bootstrap.
                                </CardText>
                                <CardActions border>
                                    <a href="https://github.com/yaserazfar/website" rel="noopener nonreferrer" target="_blank">
                                        <Button colored>GitHub</Button>
                                    </a>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share"></IconButton>
                                </CardMenu>
                            </Card>

                            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '176px', background: `url(${javaImage}) center / cover`}}>
                                    Java: Word-Based Move-to-Front encoder 
                                </CardTitle>
                                <CardText>
                                    To apply my knowledge of the dynamic data structure, linked lists, I was assigned to create a program which encoded a text file using a linked list of the words. Then a program which decoded the encoded text document. 
                                </CardText>
                                <CardActions border>
                                    <a href="https://github.com/yaserazfar/linkedListEncoder" rel="noopener nonreferrer" target="_blank">
                                        <Button colored>GitHub</Button>
                                    </a>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share"></IconButton>
                                </CardMenu>
                            </Card>

                            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '176px', background: `url(${nvidiaLogo}) center / cover`}}>
                                    C++ Cuda: Conway's Game of Life
                                </CardTitle>
                                <CardText>
                                    To learn about C++ and Cuda I created Conway's Game of Life in Cuda. This process started off with first creating the game in C++ and then translating it to Cuda to have parallel threads to run the game.
                                </CardText>
                                <CardActions border>
                                    <a href="mailto:yaserazfar@gmail.com" rel="noopener nonreferrer" target="_blank">
                                        <Button colored>Available on request</Button>
                                    </a>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share"></IconButton>
                                </CardMenu>
                            </Card>

                            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '176px', background: `url(${csLogo}) center / cover`}}>
                                    C#: login and logging with SQL
                                </CardTitle>
                                <CardText>
                                    As a University project for a SQL paper, I created a login application where an 'administrator' could login and log information into the SQL database. From this I learnt how to use a database in an application and it's wider uses.
                                </CardText>
                                <CardActions border>
                                     <a href="mailto:yaserazfar@gmail.com" rel="noopener nonreferrer" target="_blank">
                                        <Button colored>Available on request</Button>
                                    </a>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share"></IconButton>
                                </CardMenu>
                            </Card>

                        </div>
            )
        }
        else if(this.state.activeTab === 1){
            return(
                <div className="projects-grid">       
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: `url(${secureUSBLogo}) center / cover`}}>
                        C#: Bluetooth Secure USB
                    </CardTitle>
                    <CardText>
                        As a University project we were assigned to create a secure USB, which combats the problem of leaving a USB in public places. We created SecuredUSB, which includes a C# application which goes on the USB an and Andriod Phone application. For this project I was incharge of creating the C# USB application in charge of encrpting and decrypting the files and also communication with the mobile.
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/yaserazfar/SecuredUSB" rel="noopener nonreferrer" target="_blank">
                                <Button colored>GitHub</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"></IconButton>
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: `url(${ufdlLogo}) center / cover`}}>
                        React JS: Browser-Based Deep Learning Dataset Annotator
                    </CardTitle>
                    <CardText>
                        Developing a front-end for a deep learning image annotator backend for the University of Waikato's User Friendly Deep Learning project. Gathered requirements, created formal documents such as SRS, SDS and a Test Plan then developed the front-end using React.
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/michaeliwaikato/ufdl-frontend" rel="noopener nonreferrer" target="_blank">
                                <Button colored>GitHub</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"></IconButton>
                    </CardMenu>
                </Card>
            </div>
            )
        }
    }

    render() {
        return(
            <div className="projects-background">
                <div className="category-tabs">
                    <Tabs activeTab={this.state.activeTab} onChange={(tabID) => this.setState({ activeTab: tabID })}>
                        <Tab>Personal</Tab>
                        <Tab>Group</Tab>
                    </Tabs>
                    
                        <Grid>
                            <Cell col={12}>
                                <div className="content">
                                    {this.toggleCategories()}
                                </div>
                            </Cell>
                            <Cell col={12}>
                                
                                <div className="more-projects">
                                </div>
                            </Cell>
                        </Grid>
                </div>
            </div>
        )
    }
}

export default Project;
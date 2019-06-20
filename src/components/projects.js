import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories(){

        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">       
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
                            React Portfolio Website
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
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.imgur.com/QrJtEoN.png) center / cover'}}>
                            C++ Cuda Conway's Game of Life
                        </CardTitle>
                        <CardText>
                           To learn about C++ and Cuda I created Conway's Game of Life in Cuda. This process started off with first creating the game in C++ and then translating it to Cuda to have parallel threads to run the game.
                        </CardText>
                        {/* <CardActions border>
                            <a href="https://github.com/yaserazfar" rel="noopener nonreferrer" target="_blank">
                                <Button colored>GitHub</Button>
                            </a>
                        </CardActions> */}
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"></IconButton>
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.imgur.com/HntnQsF.png) center / cover'}}>
                            Java Word-Based Move-to-Front encoder 
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
                </div>

              

            )
        }
        else if(this.state.activeTab === 1){
            return(
                <div className="projects-grid">       
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}}>
                        C# Bluetooth Secure USB
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
            </div>
            )
        }
    }

    render() {
        return(
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
                                <h1>
                                    More projects coming soon...
                                </h1>
                            </div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Project;
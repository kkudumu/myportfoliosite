import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { Link } from 'react-router-dom';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state= { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'url(https://www.onlinebooksreview.com/uploads/blog_images/2017/11/04_swift_game) center/cover'}}>
                        Hot Trades
                    </CardTitle>
                
                    <CardText>
                        A robust iOS app with Firebase Backend that allows an admin to post signals to trading students. Signals include currency chart images, Text Updates and push notifications. All users may mark, delete, and view the signals. Admins may delete and update signals.
                    </CardText>
                    
                    <CardActions border>
                        <Button colored a href="https://github.com/kkudumu/HotTrades" rel="noopener noreferrer" target="_blank">Github</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>

                    <CardMenu style={{color: '#fff'}}>
                      
                    </CardMenu>
                </Card>
                </div>

            )
        } else if(this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'url(https://cdn-images-1.medium.com/max/852/1*FfpvCSSSYWNWDtvuuS0gVA.png) center/cover'}}>
                        Employee List
                    </CardTitle>
                
                    <CardText>
                        This app pulls employees from jsonplaceholder.co into a contact list that can be viewed by users.
                    </CardText>
                    
                    <CardActions border>
                        <Button colored a href="https://github.com/kkudumu/EmployeeList_ReactNative" rel="noopener noreferrer" target="_blank">Github</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>

                    <CardMenu style={{color: '#fff'}}>
                      
                    </CardMenu>
                </Card>

                {/* Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background:'url(https://cdn-images-1.medium.com/max/852/1*FfpvCSSSYWNWDtvuuS0gVA.png) center/cover'}}>
                    To Do List
                </CardTitle>
            
                <CardText>
                    This app allows a user to create a simple to do list where they may add and delete tasks
                </CardText>
                
                <CardActions border>
                    <Button colored a href="https://github.com/kkudumu/SimpleTodoApp_ReactNative" rel="noopener noreferrer" target="_blank">Github</Button>
                    <Button colored>Live Demo</Button>
                </CardActions>

                <CardMenu style={{color: '#fff'}}>
                    
                </CardMenu>
                </Card>
                
                {/* Project 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background:'url(https://cdn-images-1.medium.com/max/852/1*FfpvCSSSYWNWDtvuuS0gVA.png) center/cover'}}>
                    Pokemon Search
                </CardTitle>
                <CardText>
                With this app, users can look up what pokemon they want and the app will make calls to pokeapi.co.
                </CardText>
                
                <CardActions border>
                    <Button colored a href="https://github.com/kkudumu/Pokemonsearch_ReactNative" rel="noopener noreferrer" target="_blank">Github</Button>
                    <Button colored>Live Demo</Button>
                </CardActions>

                <CardMenu style={{color: '#fff'}}>
                    
                </CardMenu>
                </Card>

                {/* Project 4 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background:'url(https://cdn-images-1.medium.com/max/852/1*FfpvCSSSYWNWDtvuuS0gVA.png) center/cover'}}>
                    Pokemon Search
                </CardTitle>
                <CardText>
                A simple app built to learn React Native. The user can log in with a Meteor backend and see pokemon that are randomly generated on a map.
                </CardText>
                
                <CardActions border>
                    <Button colored a href="https://github.com/kkudumu/PokemonMap_ReactNative" rel="noopener noreferrer" target="_blank">Github</Button>
                    <Button colored>Live Demo</Button>
                </CardActions>

                <CardMenu style={{color: '#fff'}}>
                    
                </CardMenu>
                </Card>


                </div>
            )
        }
        else if(this.state.activeTab === 2){
            return(
                <div><h1>This is React</h1></div>
            )
        }       
    }



    render() {
        return(

            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>Swift</Tab>
                    <Tab>React Native</Tab>
                    <Tab>React</Tab>
                    
                </Tabs>

               
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
              
            </div>
        )
    }
}

export default Projects;
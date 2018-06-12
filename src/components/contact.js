import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Kioja Kudumu</h2>
                        <img 
                            src="https://cdn4.iconfinder.com/data/icons/orchestra/png/256/mypc.png"
                            alt="avatar"
                            style={{height:'250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>A junior software developer with 6 months of experience in iOS, front-end, and database development.
                         A personable, communicative developer who specializes in object-oriented programming languages. A 2017 Coding Dojo Silicon Valley graduate interested in iOS, Web and Game development.</p>
                    </Cell>
                    <Cell col={6}>
                       <h2>Contact Me</h2>
                       <hr/>

                    <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                (408) 489-4843
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                kkudumu@gmail.com
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-skype" aria-hidden="true"/>
                                Kioja.
                                </ListItemContent>
                            </ListItem>

                        </List>                    
                    </div>


                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Contact;
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://cdn.pbrd.co/images/HpsSwEsk.png"
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Kioja Kudumu</h2>
                        <h4 style={{color:'grey'}}>Programmer</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        <p>A junior software developer with 6 months of experience in iOS, front-end, and database development. A
                        personable, communicative developer who specializes in object-oriented programming languages. A 2017
                        Coding Dojo Silicon Valley graduate interested in iOS, Web and Game development.</p>  
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>   
                        <h5>City</h5>
                        <p>San Jose, CA</p>
                        <h5>Phone</h5>
                        <p>(408) 489-4843</p>
                        <h5>Email</h5>
                        <p>kkudumu@gmail.com</p>

                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>              
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>


                        <Education
                        startYear={2017}
                        endYear={2018}
                        schoolName="Coding Dojo"
                        schoolDescription="Coding Dojo is a 14 week, full-time web development training program, where students gain 1000+ hours of coding experience including the introduction, implementation and iteration of various web projects over 3 full stacks: Python, iOS and MEAN."
                         />  

                        <Education
                        startYear={2013}
                        endYear={2014}
                        schoolName="Year Up Bay Area"
                        schoolDescription="Year Up provides youth, ages 18-24, with comprehensive IT and business skills necessary to gain employment in a corporate environment. The program involves 6 months of on-site training, followed by a 6 month internship in a tech company in Silicon Valley."
                         />
                    <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Experience</h2>
                        <Experience 
                        startYear={2018}
                        endYear="Present"
                        jobName="Freelance App Developer"
                        jobDescription="Created an iOS app for a Forex trading company that would allow them to send out signals to their subscribers. The app includes a full front end UI, segmented admin, free and paid users with a Firebase backend."
                        />
                        <Experience 
                        startYear={2014}
                        endYear={2017}
                        jobName="Desktop Support Specialist"
                        jobDescription="Responsible for providing technical support to 1700+ company users in person and remotely via ticketing and phone support. Created bash scripts, packages and batch files for MacOs and Windows deployment via Airwatch and
Jamf, using various tools such as Packages, Sublime Text, iExpress and Casper Suite. Modified existing bash scripts to work with a quickly-changing environment. Created Policies and Smart Groups within JSS to manage over 1000+ Macs. Created Casper Distribution Point on Mac Mini for local Macbook imaging. Created groups, profiles and products within Airwatch to manage Mac OS X, Windows 7 and Windows
10 Machines. Utilized DISM to modify WIM files for Windows 7 deployment. Managed users via Okta, Active Directory, Google Apps and BetterCloud. Deployed and configured laptops and desk phones for users. Provide internal documentation for common issues that can be resolved by user to promote self service."
                        />

                    <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <Skills 
                        skill="Swift"
                        progress={75}
                        />
                        <Skills 
                        skill="HTML/CSS"
                        progress={70}
                        />
                        <Skills 
                        skill="React Native"
                        progress={50}
                        />
                        <Skills 
                        skill="Javascript"
                        progress={50}
                        />
                        <Skills 
                        skill="React"
                        progress={45}
                        />
                        <Skills 
                        skill="Python"
                        progress={25}
                        />
                        <Skills 
                        skill="Angular"
                        progress={25}
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
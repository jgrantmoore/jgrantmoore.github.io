import { Component } from 'react';
import './StyleSheets/Home.css'
import Headshot from './Photos/headshot.png';
import { TopBar } from './TopBar';

export class Home extends Component{

    render() {

        return (
            <div id="body">
                <div id="startingdiv">
                    <img id="meface" src={Headshot} />
                </div>
                <div id="technologies-div">
                    <h2>Technologies:</h2>
                </div>
                <div id="aboutmediv">
                    <center>
                    <h2 class="kellyslab" >About Me:</h2>
                    </center>
                    <p class="whitetext">Hi! I'm James "Grant" Moore. I recently graduated from Heritage High School and I'm really into all things computers. I am currently attending The University of Georgia where I will major in Computer Science with plans to become a software engineer.</p>
                    <br />
                </div>
                <center>
                    <h2 id="exptitle" class="kellyslab">My Work Experience</h2>
                </center>
                <div id="expdiv">
                    <table id="exptable" class="whitetext">
                        <tr>
                            <th>IT Intern<hr /></th>
                            <th>Technology Intern<hr /></th>
                            <th>IT Intern<hr /></th>
                        </tr>
                        <tr id="employers">
                            <td>Whitfield County Schools</td>
                            <td>Heritage High School</td>
                            <td><a href="cardmonroe.com" target="_blank">Card-Monroe Corp.</a></td>
                        </tr>
                        <tr>
                            <td>Repaired over 1000 chromebooks with a team of fellow interns</td>
                            <td>Performed a variety of IT tasks such as Active Directory management, Google Admin management, device repair and deployment, troubleshooting, and much more.</td>
                            <td>Helped with a wide range of help-desk tasks, Active Directory management, and other various hardware tasks.</td>
                        </tr>
                    </table>
                </div>
            </div>
        );

    }
    

}
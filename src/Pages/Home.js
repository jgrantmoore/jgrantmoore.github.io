import { Component } from 'react';
import '../StyleSheets/Home.css'
import Headshot from '../Photos/headshot.png';
import htmlcssjs from '../Photos/htmlcssjs.png';
import java from '../Photos/java.png';
import react from '../Photos/React.png';
import signalr from '../Photos/signalr.png';
import restfulapi from '../Photos/restfulapi.png';
import csharp from '../Photos/csharp.png';

async function startPacman() {

    var x = window.matchMedia("(max-width: 700px)")

    if (!x.matches) {
        var dot1 = document.getElementById('dot1');
        var dot2 = document.getElementById('dot2');
        var dot3 = document.getElementById('dot3');
        var dot4 = document.getElementById('dot4');
        var dot5 = document.getElementById('dot5');
        var pacman = document.getElementById('pacman-div');
        var abmediv = document.getElementById('aboutmediv');
        var meface = document.getElementById('meface');
    
        dot1.style.transition = '.25s linear';
        dot2.style.transition = '.6s linear';
        dot3.style.transition = '1.6s linear';
        dot4.style.transition = '1.95s linear';
        dot5.style.transition = '2.6s linear';
    
    
        //pacman.style.right = '150vw';
    
        dot1.style.right = '8vw';
        dot2.style.right = '25vw';
        dot3.style.right = '75vw';
        dot4.style.right = '92vw';
        dot5.style.right = '125vw';
    
        setTimeout(() => {
            pacman.style.right = '150vw';
    
            setTimeout(() => {
                dot1.style.display = 'none';
            }, "1250")
    
            setTimeout(() => {
                dot2.style.display = 'none';
            }, "1600")
    
            setTimeout(() => {
                meface.style.opacity = '0';
                
                setTimeout(() => {
                    meface.style.transition = '2s';
                    meface.style.opacity = '1';
                }, "3000");
            }, "1800")
    
            setTimeout(() => {
                dot3.style.display = 'none';
            }, "2500")
    
            setTimeout(() => {
                dot4.style.display = 'none';
            }, "2850")
    
        }, "2000");
    
        setTimeout(() => {
            abmediv.scrollIntoView({ behavior: 'smooth' });
        }, "5000");
    } else {
        document.getElementById("pacman-div").style.display = "none";
    }

    

}


export class Home extends Component{



    render() {

        return (
            <div id="body">
                <div id="startingdiv" onLoad={startPacman}>
                    <img id="meface" src={Headshot} />
                    <div id="pacman-div" className="pacman">
                        <div className="pacman-top"></div>
                        <div className="pacman-bottom"></div>
                    </div>
                    <span className="dot" id="dot1" /> <span className="dot" id="dot2" /> <span className="dot" id="dot3" /> <span className="dot" id="dot4" /> <span className="dot" id="dot5" />
                </div>
                <div id="aboutmediv">
                    <h2>Hello!</h2>
                    <p class="whitetext">Welcome to my portfolio! My name is Grant Moore and I’m a second-year Computer Science student at The University of Georgia. I’m passionate about software engineering and love to learn new technologies. Please explore my projects and experiences, and don’t be afraid to reach out!</p>
                </div>
                <h2 id="tech-title">Technologies</h2>
                <div id="technologies-div">
                    <img src={signalr} className="tech-img" />
                    <img src={htmlcssjs} className="tech-img" />
                    <img src={java} className="tech-img" />
                    <img src={react} className="tech-img" />
                    <img src={csharp} className="tech-img" />
                    <img src={restfulapi} className="tech-img" />
                </div>
                <center>
                    <h2 id="exptitle" class="kellyslab">My Work Experience</h2>
                </center>
                <div id="expdiv">
                    <table id="exptable" class="whitetext">
                        <tr>
                            <th>R&D Intern<hr /></th>
                            <th>IT Intern<hr /></th>
                            <th>Technology Intern<hr /></th>
                            <th>IT Intern<hr /></th>
                        </tr>
                        <tr id="employers">
                            <td><a href="cardmonroe.com" target="_blank">Card-Monroe Corp.</a></td>
                            <td><a href="cardmonroe.com" target="_blank">Card-Monroe Corp.</a></td>
                            <td>Heritage High School</td>
                            <td>Whitfield County Schools</td>
                        </tr>
                        <tr>
                            <td>Performed full-stack development on a new HMI (Human-Machine Interface) Web App based on a React front-end and a C# back-end. Additionally, assisted in PLC Engineering and deployment.</td>
                            <td>Helped with a wide range of help-desk tasks, Active Directory management, and other various hardware tasks.</td>
                            <td>Performed a variety of IT tasks such as Active Directory management, Google Admin management, device repair and deployment, troubleshooting, and much more.</td>
                            <td>Repaired over 1000 chromebooks with a team of fellow interns</td>
                        </tr>
                    </table>
                </div>
            </div>
        );

    }
    

}

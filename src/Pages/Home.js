import { Component } from 'react';
import '../StyleSheets/Home.css'
import Headshot from '../Photos/headshot.png';
import { Technologies } from '../Components/Technologies';
import { Jobs } from '../Components/Jobs';

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
                    <p class="whitetext">Welcome to my portfolio! My name is Grant Moore and I’m a third-year Computer Science student at The University of Georgia. I’m passionate about software engineering and love to learn new technologies. Please explore my projects and experiences, and don’t be afraid to reach out!</p>
                </div>
                <Technologies />
                

                <Jobs />
            </div>
        );

    }
    

}

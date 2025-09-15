import { Component } from 'react';
import '../StyleSheets/Home.css'
import Headshot from '../Photos/GrantMooreHeadshot.jpg';
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
                meface.style.height = "125px";
                meface.style.width = "125px";
            }, "1800")
    
            setTimeout(() => {
                dot3.style.display = 'none';
            }, "2500")
    
            setTimeout(() => {
                dot4.style.display = 'none';
            }, "2850")

            setTimeout(() => {
                dot5.style.display = 'none';
            }, "3000")
    
        }, "2000");
    
        setTimeout(() => {
            //abmediv.scrollIntoView({ behavior: 'smooth' });
            const startingdiv = document.getElementById("startingdiv");
            const lastnameheading = document.createElement("h1");
            const titlediv = document.getElementById("titlediv");
            lastnameheading.innerHTML = "Moore";
            lastnameheading.id = "lastname";
            lastnameheading.style.opacity = "0";
            lastnameheading.style.visibility = "hidden";

            const firstnameheading = document.createElement("h1");
            firstnameheading.innerHTML = "Grant";
            firstnameheading.id = "firstname";
            firstnameheading.style.opacity = "0";
            firstnameheading.style.visibility = "hidden";

            titlediv.insertBefore(firstnameheading, titlediv.firstChild);
            titlediv.appendChild(lastnameheading);
            

            startingdiv.style.transition = '1s ease-in-out';
            firstnameheading.style.transition = '.5s ease-in-out';
            lastnameheading.style.transition = '.5s ease-in-out';
            meface.style.transition = '.5s';
            

            setTimeout(() => {
            firstnameheading.style.opacity = "1";
            firstnameheading.style.visibility = "visible";
            lastnameheading.style.opacity = "1";
            lastnameheading.style.visibility = "visible";
            startingdiv.style.height = "500px";
            startingdiv.style.paddingTop = "5vh";
            meface.style.opacity = '1';
            }, "100");

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
                    <div id="titlediv">
                        <img id="meface" src={Headshot} />
                    </div>
                    <div id="pacman-div" className="pacman">
                        <div className="pacman-top"></div>
                        <div className="pacman-bottom"></div>
                    </div>
                    <span className="dot" id="dot1" /> <span className="dot" id="dot2" /> <span className="dot" id="dot3" /> <span className="dot" id="dot4" /> <span className="dot" id="dot5" />
                </div>
                <div id="aboutmediv">
                    <h1>Hello!</h1>
                    <p class="whitetext">Welcome to my portfolio! My name is Grant Moore and I’m a senior Computer Science student at The University of Georgia. I’m passionate about software engineering and love to learn new technologies. Please explore my projects and experiences, and don’t be afraid to reach out!</p>
                </div>
                <Technologies />

                <Jobs />
            </div>
        );

    }
    

}

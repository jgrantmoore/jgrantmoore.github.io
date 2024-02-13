import { Component } from 'react';
import './StyleSheets/Resume.css';
import resume from './Files/2024MidFeb.pdf'

export class Resume extends Component{

    render() {

        return (
            <div id="resume-div">
                <h1>My Resume</h1>
                <a id="download-button" href={ resume } download="GrantMooreResume.pdf">Download as PDF</a>
                <iframe src={resume} id="resume-pdf"></iframe>
                
            </div>
        );

    }
    

}
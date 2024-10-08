﻿import { Component } from 'react';
import '../StyleSheets/Resume.css';
import resume from '../Files/GrantMooreResume.pdf'

export class Resume extends Component{

    render() {

        return (
            <div id="resume-div">
                <h1 id="resumeheader">My Resume</h1>
                <a id="download-button" href={ resume } download="GrantMooreResume.pdf">Download as PDF</a>
                <iframe src={resume} id="resume-pdf"></iframe>
                
            </div>
        );

    }
    

}
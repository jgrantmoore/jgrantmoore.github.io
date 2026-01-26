'use client';
import '../StyleSheets/index.css'
import '../StyleSheets/Home.css'
import '../StyleSheets/Resume.css'

export default function Resume() {
    const resume = '/GrantMooreResume.pdf';

    return (
        <div id="resume-div">
            <h1 id="resumeheader">My Resume</h1>
            <a id="download-button" href={resume} download="GrantMooreResume.pdf">Download as PDF</a>
            <iframe src={resume} id="resume-pdf" title="Grant Moore Resume"></iframe>
        </div>
    );
}

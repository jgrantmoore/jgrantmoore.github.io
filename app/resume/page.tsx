'use client';
import '../../stylesheets/index.css'
import '../../stylesheets/Home.css'
import '../../stylesheets/Resume.css'

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

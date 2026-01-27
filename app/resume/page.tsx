'use client';
import '../../stylesheets/index.css'
import '../../stylesheets/Home.css'
import '../../stylesheets/Resume.css'
import TopBar from '@/components/TopBar';
import { useEffect } from 'react';

export default function Resume() {
    const resume = '/GrantMooreResume.pdf';

    useEffect(() => {
            document.title = "Grant Moore - Resume";
        }, []);

    return (
        <div>
            <TopBar />
            <div id="resume-div">
                <h1 id="resumeheader">My Resume</h1>
                <a id="download-button" href={resume} download="GrantMooreResume.pdf">Download as PDF</a>
                <iframe src={resume} id="resume-pdf" title="Grant Moore Resume"></iframe>
            </div>
        </div>
    );
}

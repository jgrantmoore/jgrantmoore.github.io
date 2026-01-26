'use client';

import Image from 'next/image';
import '../stylesheets/Technologies.css';

// Import all technology images
import cSharp from '@/public/images/Technologies/C-Sharp.png';
import c from '@/public/images/Technologies/C.png';
import go from '@/public/images/Technologies/Go.png';
import htmlCssJs from '@/public/images/Technologies/HTML-CSS-JS.png';
import java from '@/public/images/Technologies/Java.png';
import python from '@/public/images/Technologies/Python.png';
import react from '@/public/images/Technologies/React.png';
import restfulApis from '@/public/images/Technologies/Restful-APIs.png';
import signalR from '@/public/images/Technologies/SignalR.png';
import vue from '@/public/images/Technologies/Vue.png';

const techImages = [
    { src: cSharp, alt: 'C#' },
    { src: c, alt: 'C' },
    { src: go, alt: 'Go' },
    { src: htmlCssJs, alt: 'HTML, CSS, JavaScript' },
    { src: java, alt: 'Java' },
    { src: python, alt: 'Python' },
    { src: react, alt: 'React' },
    { src: restfulApis, alt: 'RESTful APIs' },
    { src: signalR, alt: 'SignalR' },
    { src: vue, alt: 'Vue' },
];

export default function Technologies() {
    return (
        <div id="technologies-div">
            <h1 id="tech-title">Technologies</h1>
            <div id="technologies-list">
                {techImages.map((tech, index) => (
                    <Image 
                        key={index} 
                        src={tech.src} 
                        alt={tech.alt} 
                        className="tech-img"
                        width={80}
                        height={80}
                    />
                ))}
            </div>
        </div>
    );
}

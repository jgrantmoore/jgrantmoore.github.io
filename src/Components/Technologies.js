'use client';

import Image from 'next/image';
import '../StyleSheets/Technologies.css';

// Import all technology images
import cSharp from '../Photos/Technologies/C-Sharp.png';
import c from '../Photos/Technologies/C.png';
import go from '../Photos/Technologies/Go.png';
import htmlCssJs from '../Photos/Technologies/HTML-CSS-JS.png';
import java from '../Photos/Technologies/Java.png';
import python from '../Photos/Technologies/Python.png';
import react from '../Photos/Technologies/React.png';
import restfulApis from '../Photos/Technologies/Restful-APIs.png';
import signalR from '../Photos/Technologies/SignalR.png';
import vue from '../Photos/Technologies/Vue.png';

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

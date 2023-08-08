import { Component } from 'react';
import './StyleSheets/Projects.css';
import resume from './Files/2023AugustStart.pdf';
import portfolio from './Photos/Projects/portfolio.png';
import gallery from './Photos/Projects/gallery.png';
import wordcloud from './Photos/Projects/wordcloud.png';

export class Projects extends Component{

    render() {

        return (
            <div id="projects-div">
                <h1 id="projectHeader">Personal Projects</h1>
                <p>Click on any card to see the source code</p>
                <div class="projects-container">
                    <a href="https://github.com/jgrantmoore/jgrantmoore.github.io" target="_blank">
                        <div class="project">
                            <h2>Portfolio Website</h2>
                            <img src={ portfolio } alt="Screenshot of Portfolio" />
                                <p>Portfolio website build with ReactJS</p>
                        </div>
                    </a>
                    <a href="https://github.com/jgrantmoore/iTunes-Gallery" target="_blank">
                        <div class="project">
                            <h2>iTunes Gallery</h2>
                            <img src={ gallery } alt="Screenshot of iTunes Gallery" />
                            <p>Calls the iTunes api to display photos related to the given search term.</p>
                        </div>
                    </a>
                    <a href="https://github.com/jgrantmoore/Wordcloud-Generator" target="_blank">
                        <div class="project">
                            <h2>Wordcloud Webscraper</h2>
                            <img src={ wordcloud } alt="Screenshot of Wordcloud Webscraper" />
                            <p>API's scrape the given URL and forms a word cloud of the most common words in the first 200 words.</p>
                        </div>
                    </a>
                </div>
            </div>
        );

    }
    

}
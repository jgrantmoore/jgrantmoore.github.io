import { Component } from 'react';
import '../StyleSheets/Projects.css';
import portfolio from '../Photos/Projects/portfolio.png';
import gallery from '../Photos/Projects/gallery.png';
import wordcloud from '../Photos/Projects/wordcloud.png';
import goodgreek from '../Photos/Projects/goodgreek.jpg';
import goodgreekregister from '../Photos/Projects/goodgreekregister.jpg'
import financefriend from '../Photos/Projects/financefriend.jpg';
import thor from '../Photos/Projects/thor.png';
import Project from '../Components/Project';

export class Projects extends Component{

    render() {

        return (
            <div id="projects-div">
                <h1 id="projectHeader">Personal Projects</h1>
                <p>Click on any card to see the source code</p>
                <div class="projects-container">
                    <Project 
                        title="Finance Friend" 
                        image={thor} 
                        alt="Screenshot of the home page of Finance Friend" 
                        //image2={thor}
                        //alt2="Screenshot of the dashboard page of Finance Friend"
                        description="Finance Friend is your AI Companion for personal finance. Learn financial literacy from pop culture icons!" 
                        url="https://devpost.com/software/finance-friend-oeywb9"
                    />
                    <Project 
                        title="GoodGreek" 
                        image={goodgreek} 
                        alt="Screenshot of the home page of GoodGreek" 
                        image2={goodgreekregister}
                        alt2="Screenshot of the new account page of GoodGreek"
                        description="GoodGreek is a platform for sharing and exploring philanthropy opportunities run by greek-life orgs." 
                        url="https://devpost.com/software/goodgreek"
                    />
                    <Project 
                        title="iTunes Gallery" 
                        image={gallery} 
                        alt="Screenshot of iTunes Gallery Project"
                        description="Calls the iTunes api to display photos related to the given search term." 
                        url="https://github.com/jgrantmoore/iTunes-Gallery" 
                    />
                    <Project 
                        title="Webscrape Wordcloud" 
                        image={wordcloud} 
                        alt="Screenshot of Wordcloud Webscraper Project"
                        description="API's scrape the given URL and forms a word cloud of the most common words in the first 200 words." 
                        url="https://github.com/jgrantmoore/Wordcloud-Generator" 
                    />
                    <Project 
                        title="Portfolio Website" 
                        image={portfolio} 
                        alt="Screenshot of portfolio"
                        description="Portfolio website build with ReactJS" 
                        url="https://github.com/jgrantmoore/jgrantmoore.github.io" 
                    />
                    
                </div>
            </div>
        );

    }
    

}
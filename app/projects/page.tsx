'use client';

import '../../stylesheets/index.css'
import '../../stylesheets/Projects.css';
import '../../stylesheets/Home.css'
import portfolio from '@/public/images/Projects/portfolio.png';
import gallery from '@/public/images/Projects/gallery.png';
import wordcloud from '@/public/images/Projects/wordcloud.png';
import goodgreek from '@/public/images/Projects/goodgreek.jpg';
import goodgreekregister from '@/public/images/Projects/goodgreekregister.jpg'
import financefriend from '@/public/images/Projects/financefriend.jpg';
import thor from '@/public/images/Projects/thor.png';
import Project from '@/components/Project';
import TopBar from '@/components/TopBar';

export default function Projects() {
    return (
        <div>
            <TopBar />
            <div id="projects-div">
                <h1 id="projectHeader">Personal Projects</h1>
                <p>Click on any card to see the source code</p>
                <div className="projects-container">
                    <Project
                        title="Finance Friend"
                        image={thor}
                        alt="Screenshot of the home page of Finance Friend"
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
                        url="https://github.com/jgrantmoore/Webscrape-Wordcloud"
                    />
                    <Project
                        title="Portfolio"
                        image={portfolio}
                        alt="Screenshot of Portfolio Project"
                        description="My previous portfolio created with React."
                        url="https://github.com/jgrantmoore/OriginalPortfolio"
                    />
                </div>
            </div>
        </div>
    );
}

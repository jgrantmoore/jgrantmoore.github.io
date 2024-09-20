import React, { Component } from 'react';
import '../StyleSheets/Jobs.css';

export class Jobs extends Component {

    // Initialize state to hold the image list
    state = {
        jobs: [
            ["R&D Software Engineering Intern",
            "Card-Monroe Corp.",
            "Returned to Card-Monroe to continue development on the HMI Web App. Worked with users to develop intuitive UI/UX, and created a functional prototype for the project.",
            "https://cardmonroe.com"
            ],
            ["R&D Software Engineering Intern", 
            "Card-Monroe Corp.",
            "Performed full-stack development on a new HMI (Human-Machine Interface) Web App based on a React front-end and a C# back-end. Additionally, assisted in PLC Engineering and deployment.",
            "https://cardmonroe.com"],
            ["IT Intern",
            "Card-Monroe Corp.",
            "Helped with a wide range of help-desk tasks, Active Directory management, and other various hardware tasks.",
            "https://cardmonroe.com"],
            ["Technology Intern",
            "Heritage High School",
            "Performed a variety of IT tasks such as Active Directory management, Google Admin management, device repair and deployment, troubleshooting, and much more.",
            "https://hhs.catoosa.k12.ga.us/",
            ],
            ["IT Intern",
            "Whitfield County Schools",
            "Repaired over 1000 chromebooks with a team of fellow interns",
            "https://www.wcsga.net/",
            ]
        ]
    };

    render() {
        return (
            <div id="jobsdiv">
                <h1 id="exptitle" className="kellyslab">My Work Experience</h1>

                <div id="expdiv">
                    {this.state.jobs.map((job, index) => (
                        <div className="jobsjobcontainer" key={index}>
                            <h3 className="jobsjobtitle">{job[0]}</h3>
                            <a 
                            className="jobsjobcompany" 
                            href={job[3] !== null ? job[3] : "#"} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            >
                            {job[1]}
                            </a>
                            <hr style={{width: "80%"}}/>
                            <p className="jobsjobdesc">{job[2]}</p>
                        </div>
                    ))}
                </div> {/* expdiv */}
            </div>
            
        );
    }
}

import React, { Component } from 'react';
import '../StyleSheets/Jobs.css';

export class Jobs extends Component {

    // Initialize state to hold the image list
    state = {
        jobs: [
            ["R&D Software Engineering Intern",
            "Card-Monroe Corp.",
            "Returned to Card-Monroe to continue development on the HMI Web App.",
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
            ],
            ["IT Intern",
            "Whitfield County Schools",
            "Repaired over 1000 chromebooks with a team of fellow interns",
            ]
        ]
    };

    render() {
        return (
            <div>
                <center>
                    <h1 id="exptitle" class="kellyslab">My Work Experience</h1>
                </center>

                <div id="expdiv">
                
                <table id="exptable" class="whitetext">
                    <tr>
                        {/* Render the images from state */}
                        {this.state.jobs.map((job, index) => (
                            <th key={index}>{job[0]}<hr /></th>
                        ))}
                    </tr>
                    <tr id="employers">
                        {/* Render the images from state */}
                        {this.state.jobs.map((job, index) => (
                            
                            <td key={index}>
                                {job[3] != null ? (
                                <a href={job[3]} target="_blank" rel="noopener noreferrer">
                                    {job[1]}
                                </a>
                                ) : (
                                job[1]
                                )}
                            </td>
                        ))}
                    </tr>
                    <tr>
                        {/* Render the images from state */}
                        {this.state.jobs.map((job, index) => (
                            <td key={index} >{job[2]}</td>
                        ))}
                    </tr>
                </table>
            </div>
            </div>
            
        );
    }
}

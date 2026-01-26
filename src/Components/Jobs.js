'use client';
import '../StyleSheets/jobs.css'

export default function Jobs() {
    const jobs = [
        [
            "Software Developer Consulting Intern",
            "CGI Inc.",
            "Collaborated with a team of interns in a fast-paced consulting environment to develop a cloud architecture solution for a client.",
            "https://cgi.com"
        ],
        [
            "R&D Software Engineering Intern",
            "Card-Monroe Corp.",
            "Returned to Card-Monroe to continue development on the HMI Web App. Worked with users to develop intuitive UI/UX, and created a functional prototype for the project.",
            "https://cardmonroe.com"
        ],
        [
            "R&D Software Engineering Intern", 
            "Card-Monroe Corp.",
            "Performed full-stack development on a new HMI (Human-Machine Interface) Web App based on a React front-end and a C# back-end. Additionally, assisted in PLC Engineering and deployment.",
            "https://cardmonroe.com"
        ],
        [
            "IT Intern",
            "Card-Monroe Corp.",
            "Helped with a wide range of help-desk tasks, Active Directory management, and other various hardware tasks.",
            "https://cardmonroe.com"
        ],
        [
            "Technology Intern",
            "Heritage High School",
            "Performed a variety of IT tasks such as Active Directory management, Google Admin management, device repair and deployment, troubleshooting, and much more.",
            "https://hhs.catoosa.k12.ga.us/",
        ],
        [
            "IT Intern",
            "Whitfield County Schools",
            "Repaired over 1000 chromebooks with a team of fellow interns",
            "https://www.wcsga.net/",
        ]
    ];

    return (
        <div id="jobsdiv">
            <h1 id="exptitle" className="kellyslab">My Work Experience</h1>
            <div id="expdiv">
                {jobs.map((job, index) => (
                    <div className="jobsjobcontainer" key={index}>
                        <h3 className="jobsjobtitle">{job[0]}</h3>
                        <a 
                            className="jobsjobcompany" 
                            href={job[3] || "#"} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            {job[1]}
                        </a>
                        <hr style={{width: "80%"}}/>
                        <p className="jobsjobdesc">{job[2]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

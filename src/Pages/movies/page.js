'use client';

export default function ContactInfo() {
    const Contact = '/Files/GrantMoore.vcf';

    return (
        <div id="resume-div">
            <h1>Grant Moore</h1>
            <a href={Contact} download="GrantMoore.vcf">
                <div className="titlecontent">
                    <h3 className="contacttitle">Save Contact</h3>
                    <p>@jgmoore3.5</p>
                </div>
            </a>
            <a href='tel:423-718-8636'>
                <div className="titlecontent">
                    <h3 className="contacttitle">Call</h3>
                    <p>423-718-8636</p>
                </div>
            </a>
            <a href='https://www.instagram.com/jgmoore3.5/' target="_blank" rel="noopener noreferrer">
                <div className="titlecontent">
                    <h3 className="contacttitle">Instagram</h3>
                    <p>@jgmoore3.5</p>
                </div>
            </a>
        </div>
    );
}

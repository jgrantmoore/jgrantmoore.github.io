import { Component } from 'react';
import './StyleSheets/ContactInfo.css';
import Contact from './Files/GrantMoore.vcf';

export class ContactInfo extends Component{

    componentDidMount() {
        document.getElementById('topbar').style.display = "none";
    }

    componentWillUnmount() {
        document.getElementById('topbar').style.display = "block";
    }

    render() {

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
                <a href='https://www.instagram.com/jgmoore3.5/' target="_blank">
                    <div className="titlecontent">
                        <h3 className="contacttitle">Instagram</h3>
                        <p>@jgmoore3.5</p>
                    </div>
                </a>
            </div>
        );

    }
    

}
import { Component } from 'react';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './StyleSheets/TopBar.css';


export class TopBar extends Component{

    myFunction = () => {
        console.log('test');
        document.getElementById("myDropdown").classList.toggle("show");
    };

    mouseLeaves = () => {
        if (document.getElementById("myDropdown").classList.contains("show")) {
            document.getElementById("myDropdown").classList.remove("show");
        }
    };

    socialHover = () => {
        if (!document.getElementById("myDropdown").classList.contains("show")) {
            document.getElementById("myDropdown").classList.add("show");
        }
    };

    render() {

        return (
            <div id="topbar">
                <div class="topbar" onMouseLeave={this.mouseLeaves}>
                    <header className="Name"><NavLink tag={ Link } to="/">Grant Moore</NavLink></header>
                    <div id="ablinks">
                        <div id="myDropdown" class="dropdown-content">
                            <a href="https://www.linkedin.com/in/james-grant-moore" target="_blank">LinkedIn</a><br />
                            <a href="https://www.instagram.com/jgmoore3.5/" target="_blank">Instagram</a><br />
                        </div>
                        <a onClick={this.myFunction}>Social Media▾</a>
                        <NavLink tag={Link} to="/resume">Resume</NavLink>
                        <NavLink tag={Link} to="/testpage">Projects</NavLink>
                    </div>
                </div>
            </div>
        );

    }
    

}
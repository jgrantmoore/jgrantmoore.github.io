'use client';

import { useState } from 'react';
import '../stylesheets/TopBar.css';
import '../stylesheets/index.css';
import Link from 'next/link';

export default function TopBar() {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const closeDropdown = () => {
        setShowDropdown(false);
    };

    const openDropdown = () => {
        setShowDropdown(true);
    };

    return (
        <div id="topbar">
            <div className="topbar" onMouseLeave={closeDropdown}>
                <header className="Name">
                    <Link href="/">Grant Moore</Link>
                </header>
                <div id="ablinks">
                    <Link href="/projects">Projects</Link>
                    <Link href="/resume">Resume</Link>
                    <Link href="https://www.linkedin.com/in/james-grant-moore">LinkedIn</Link>
                    <Link href="https://github.com/jgrantmoore">GitHub</Link>
                </div>
            </div>
        </div>
    );
}

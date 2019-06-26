import React from 'react';
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="topbar-container">
                <div className="navbar-container">
                    <ul className="navbar-list">
                        <li className="navbar-item"><Link to="/">About</Link></li>
                        <li className="navbar-item"><Link to="/experience">Experience</Link></li>
                        <li className="navbar-item"><Link to="/projects">Projects</Link></li>
                        <li className="navbar-item"><Link to="/contact">Contact</Link></li>
                    </ul>

                </div>

            </div>
        )
    }
}
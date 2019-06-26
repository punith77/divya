import React from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends React.Component {
    render() {
        return (
            <div className="container">

                <div className="topbar-container">

                    <div className="topbar-inside">
                        <div className="topbar-left">
                            <div style={{ padding: "5px 10px 4px" }}>Designed By: <Link to="/">Divya</Link></div>

                        </div>
                        <div>
                            <ul className="navbar-list">
                                <li className="navbar-item"><Link to="/">About</Link></li>
                                <li className="navbar-item"><Link to="/experience">Experience</Link></li>
                                <li className="navbar-item"><Link to="/projects">Projects</Link></li>
                                <li className="navbar-item"><Link to="/contact">Contact</Link></li>
                                <li><a href="https://www.linkedin.com/in/divyadevineni" target="_blank"><i className="fab fa-linkedin-in topbar-icons"></i></a></li>
                                <li><a href="#"><i className="fab fa-github topbar-icons"></i></a></li>
                                <li><a href="mailto:divyadevineni51@gmail.com"><i className="far fa-envelope topbar-icons"></i></a></li>
                                <li><i className="fas fa-search topbar-icons"></i></li>


                            </ul>





                        </div>

                    </div>

                </div>



            </div>
        )
    }
}
import React from 'react'

import profilePic from '../images/profilePic.svg'

export default class Content extends React.Component {
    render() {
        return (
            <div className="content-area">
                <section className="content-about">

                    <div className="profile-Image">
                        <img src={profilePic} alt="Profile Pic" style={{ width: "180px", height: "200px" }}></img>
                    </div>
                    <div className="profile-about">
                        <div>
                            <h1>About</h1>
                        </div>
                        <div className="about-text">I live in Hyderabad, Andhra Pradesh and I like to do creative things with computers. I have Bachelor degrees in Computer Science and I’m <i>seeking employment as a software developer</i>. My interests include network security, biological systems, databases, computer graphics, and audio processing. In my free time I dabble in music production/visualization, games programming, and visual art.
                            </div>

                    </div>




                </section>
                <section className="content-tools">
                    <div style={{ display: "flex" }}>
                        <div className="profile-Image" style={{ width: "180px", height: "200px" }}>

                        </div>

                        <div style={{ width: "100%", paddingLeft: "110px" }}>
                            <h2 className="skills-heading">I’m proficient with:</h2>
                            <table width="100%">
                                <tbody>
                                    <tr>
                                        <td width="33%">
                                            <ul >
                                                <li>Java/JVM</li>
                                                <li>C</li>
                                                <li>C++</li>
                                                <li>Assembly (ARM, SPARC)</li>
                                                <li>Python</li>
                                                <li>Pascal/Delphi</li>
                                            </ul>
                                        </td>
                                        <td width="33%">
                                            <ul >
                                                <li>Haskell</li>
                                                <li>Prolog</li>
                                                <li>PHP</li>
                                                <li>Javascript</li>
                                                <li>SQL</li>
                                                <li>OpenGL and GLSL</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>


                        </div>
                    </div>


                </section>
                <section className="content-instruction">


                    <h2 >Is this Portfolio Responsive for all Devices ?</h2>
                    <p>
                        Please note that this website currently works fine with Chrome browser in desktop mode. Work is in progress. Please contact me for any enquires

                    </p>


                </section>

            </div >
        )
    }
}
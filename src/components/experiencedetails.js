import React from 'react'

export default class Experience extends React.Component {
    render() {
        return (
            <div className="content-area">
                <div className="experience-container">
                    <div align="center">
                        <h1>Experience</h1>
                    </div>
                    <div>
                        <div className="experience-item item-container">
                            <h2>Software Developer at 9Logic technologies</h2>
                            <p style={{ color: "#999" }}>Dates: May 2017 - Present</p>
                            <h3>Responsibilities</h3>
                            <ul className="experience-highlights">
                                <li>Developed UI using Angular 4</li>
                                <li>Worked with PostgreSQL to perform CRUD Operations</li>
                                <li>Responsible for code merging using Microsoft Team Foundation Server (TFS) and for other source code maintenance needs</li>
                            </ul>
                            <h4>Technologies Used</h4>
                            <table width="100%">
                                <tbody>
                                    <tr>
                                        <td width="33%">
                                            <ul >
                                                <li>Angular 4</li>
                                                <li>Type Script</li>
                                                <li>PostgreSQL</li>


                                            </ul>
                                        </td>
                                        <td width="33%">
                                            <ul >

                                                <li>HTML, CSS</li>
                                                <li>Bootstrap</li>
                                                <li>Material UI</li>

                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>



                        </div>
                    </div>

                    <div >
                        <div className="experience-item item-container">
                            <h2>Graduate From Acharya Nagarjuna University </h2>
                            <p style={{ color: "#999" }}>Dates: Aug 2013 - May 2017</p>
                            <h3>Highlights</h3>
                            <ul className="experience-highlights">
                                <li>Excelled in academics with CGPA of 9.3/10</li>
                                <li>Hardened my skills in Object Oriented and Database Programming </li>
                                <li>Completed multiple projects during my stay at university - Please refer to mu git hub for details.</li>
                            </ul>
                            <h4>Technologies Used</h4>
                            <table width="100%">
                                <tbody>
                                    <tr>
                                        <td width="33%">
                                            <ul >
                                                <li>C</li>
                                                <li>C++</li>
                                                <li>Java</li>


                                            </ul>
                                        </td>
                                        <td width="33%">
                                            <ul >

                                                <li>SQL</li>
                                                <li>Javascript</li>
                                                <li>Html/CSS</li>

                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>



                        </div>
                    </div>



                </div>
            </div>
        )
    }
}
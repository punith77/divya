import React from 'react'
import TopBar from "./../topBar";
import Brand from "./../brand";
import Navbar from "./../navbar";
import Portfolio from "./../portfolio"
import Footer from "./../footer";
import Sidebar from "./../sidebar"


export default class Project extends React.Component {
    render() {
        return (
            <div>
                <Sidebar />
                <TopBar />
                <Brand />
                <Navbar />
                <Portfolio />
                <Footer />
            </div>

        )
    }
}
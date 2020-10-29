import React from "react";

import TopBar from "./../topBar";
import Brand from "./../brand";
import Navbar from "./../navbar";
import Experiencedetails from "./../experiencedetails";
import Footer from "./../footer";
import Sidebar from "./../sidebar";

export default class Experience extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <TopBar />
        <Brand />
        <Navbar />
        <Experiencedetails />
        <Footer />
      </div>
    );
  }
}

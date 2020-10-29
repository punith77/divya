import React from "react";

import TopBar from "./../topBar";
import Brand from "./../brand";
import Navbar from "./../navbar";
import Contact from "./../contactform";
import Footer from "./../footer";
import Sidebar from "./../sidebar";

export default class ContactComponent extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <TopBar />
        <Brand />
        <Navbar />
        <Contact />
        <Footer />
      </div>
    );
  }
}

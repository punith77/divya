import React from "react";

import TopBar from "./../topBar";
import Brand from "./../brand";
import Navbar from "./../navbar";
import Content from "./../content-area";
import Footer from "./../footer";
import Sidebar from "./../sidebar";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <TopBar />
        <Brand />
        <Navbar />
        <Content />
        <Footer />
      </div>
    );
  }
}

import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import Favicon from 'react-favicon';

import Home from "./components/Home";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import "./App.css";
import "./app.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' exact component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/experience' component={Experience} />
          <Route path='/projects' component={Projects} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

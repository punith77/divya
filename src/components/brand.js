import React from "react";
import { Link } from "react-router-dom";

export default class Brandname extends React.Component {
  render() {
    return (
      <div className='topbar-container'>
        <div className='brand-inside'>
          <div className='site-branding'>
            <h1 className='site-title'>
              {" "}
              <Link to='/' title='Divya Devineni' rel='home'>
                Divya Devineni
              </Link>
            </h1>
            <h2 className='site-description'>
              I am a programmer, artist, and traveller
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

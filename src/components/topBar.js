import React from "react";

export default class Topbar extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='site-top-border'></div>
        <div className='topbar-container'>
          <div className='topbar-inside'>
            <div className='topbar-left'>
              <i
                className='fas fa-map-marker-alt'
                style={{ padding: "5px 10px 4px" }}
              ></i>
              Hyderabad, Andhra Pradesh
            </div>
            <div>
              <a
                href='https://www.linkedin.com/in/divyadevineni'
                target='_blank'
              >
                <i className='fab fa-linkedin-in topbar-icons'></i>
              </a>
              <a href='#'>
                <i className='fab fa-github topbar-icons'></i>
              </a>
              <a href='mailto:divyadevineni51@gmail.com'>
                <i className='far fa-envelope topbar-icons'></i>
              </a>
              <i className='fas fa-search topbar-icons'></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

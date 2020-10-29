import React from "react";

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className='side-aligned-social'>
        <a
          href='mailto:divyadevineni51@gmail.com'
          title='Send Us an Email'
          className='social-icon social-email'
        >
          <i className='far fa-envelope'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/divyadevineni'
          target='_blank'
          title='Find Us on LinkedIn'
          className='social-icon social-linkedin'
        >
          <i className='fab fa-linkedin-in'></i>
        </a>
        <a
          href='#'
          target='_blank'
          title='Find Us on GitHub'
          className='social-icon social-github'
        >
          <i className='fab fa-github'></i>
        </a>
      </div>
    );
  }
}

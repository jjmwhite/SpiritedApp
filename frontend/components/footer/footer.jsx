import React from 'react';

export default () => {
  return(
    <footer>
      <div className='footer-main'>
        <ul>
          <li>
            <img src={awardIcon} alt="ribbon" />
            <figcaption>Find the world's best whiskies</figcaption>
          </li>
          <li>
            <img src={reviewIcon} alt="star" />
            <figcaption>Rate and review your favorites</figcaption>
          </li>
          <li>
            <img src={notesIcon} alt="comment" />
            <figcaption>Read tasting notes before you buy</figcaption>
          </li>
        </ul>
      </div>
      <div className='footer-contact'>
        <h1>Spirited</h1>
        <p>a site by Jessica White</p>
        <a target="_blank" href="https://jessicajmwhite.com">
          <img src={personalSite} alt="Visit Jessica's Site" />
        </a>
        <a target="_blank" href="https://github.com/jjmwhite">
          <img src={github} alt="View Project on Github" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/jessicajmwhite/">
          <img src={linkedIn} alt="Visit Jessica's LinkedIn" />
        </a>
        <a target="_blank" href="https://angel.co/jessica-jm-white">
          <img src={angellist} alt="Connect with Jessica on AngelList" />
        </a>
      </div>
    </footer>
  );
};
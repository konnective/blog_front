import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="ft-one">
        <span className="ft-title">Products</span>
        <ul>
          <li>Must-read articles</li>
          <li>Daily newsletter</li>
          <li>Premium</li>
        </ul>
      </div>
      <div className="ft-two">
        <span className="ft-title">Company</span>
        <ul>
          <li>About</li>
        </ul>
      </div>
      <div className="ft-three">
        <span className="ft-title">Resources</span>
        <ul>
          <li>Get Help</li>
          <li>Advertise</li>
        </ul>
      </div>
      <div className="ft-four">
        <span className="ft-title">Get The App</span>
        <ul>
          <li>App Link</li>
          <li>App Link</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router';

const Footer = () => (<footer className="mesh-footer">
  <p>&copy; 2017 - All rights reserved</p>
  <p>
    <Link to="/contact">contact</Link>
  </p>
</footer>);

export default Footer;

// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar className="header-nav">
        <Link to="/" className="header-logo">
        </Link>
        <Link to="/top3" className="header-top3">
          Top 3%
        </Link>
        <Link to="/why" className="header-link">
          Why
        </Link>
        <Link to="/clients" className="header-link">
          Clients
        </Link>
        <Link to="/industries" className="header-link">
          Industries
        </Link>
        <Link to="/community" className="header-link">
          Community
        </Link>
        <Link to="/blog" className="header-link">
          Blog
        </Link>
        <Link to="/about" className="header-link">
          About Us
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

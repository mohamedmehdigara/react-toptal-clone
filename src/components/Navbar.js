import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { AccountCircle, Home } from '@mui/icons-material';

const Navbar = () => {
  // Replace this with your actual authentication state management logic
  const isLoggedIn = false;

  const handleLogout = () => {
    // Implement logout functionality here
    // For example, clear user session, etc.
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Your Company Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            <IconButton edge="start" color="inherit" aria-label="home">
              <Home />
            </IconButton>
            Your Company
          </Link>
        </Typography>

        {/* Navigation Links */}
        <Typography variant="h6" component="div">
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none', marginRight: '16px' }}>
            Home
          </Link>
          <Link to="/login" style={{ color: 'inherit', textDecoration: 'none', marginRight: '16px' }}>
            Login
          </Link>
          <Link to="/signup" style={{ color: 'inherit', textDecoration: 'none' }}>
            Signup
          </Link>
        </Typography>

        {/* User Authentication and Logout */}
        {isLoggedIn ? (
          <>
            {/* Replace this with your user avatar or profile picture */}
            <IconButton size="large" color="inherit" aria-label="user-profile">
              <AccountCircle />
            </IconButton>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <Button component={Link} to="/login" color="inherit">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

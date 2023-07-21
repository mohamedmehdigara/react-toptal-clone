import React from 'react';
import { Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f0f0f0', padding: '16px', marginTop: '16px' }}>
      <Typography variant="body2" align="center" color="textSecondary">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </Typography>
      <Typography variant="body2" align="center" color="textSecondary" sx={{ mt: 1 }}>
        <Link href="/terms-of-service" color="inherit" style={{ marginRight: '8px' }}>
          Terms of Service
        </Link>
        <Link href="/privacy-policy" color="inherit">
          Privacy Policy
        </Link>
      </Typography>
    </footer>
  );
};

export default Footer;

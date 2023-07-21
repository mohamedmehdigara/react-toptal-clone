import React from 'react';
import { Typography, Container, Box, Button, Grid, Paper } from '@mui/material';

const Main = () => {
  return (
    <Container maxWidth="md">
      {/* Trusted By Leading Brands and Startups */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          TRUSTED BY LEADING BRANDS AND STARTUPS
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button variant="contained" color="primary" size="large">
            WATCH THE CASE STUDY
          </Button>
        </Box>
      </Box>

      {/* Leverage World-Class Talent */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Leverage World-Class Talent
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Developers
              </Typography>
              <Typography variant="body2">
                Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Designers
              </Typography>
              <Typography variant="body2">
                Expert UI, UX, Visual, and Interaction designers as well as a wide range of illustrators, animators, and more.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Finance Experts
              </Typography>
              <Typography variant="body2">
                Experts in financial modeling & valuation, startup funding, interim CFO work, and market sizing.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Project Managers
              </Typography>
              <Typography variant="body2">
                Digital and technical project managers, scrum masters, and more with expertise in numerous PM tools, frameworks, and styles.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Product Managers
              </Typography>
              <Typography variant="body2">
                Digital product managers, scrum product owners with expertise in numerous industries like banking, healthcare, ecommerce, and more.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Toptal Projects */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Toptal® Projects
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button variant="contained" color="primary" size="large">
            Build Amazing Teams, On Demand
          </Button>
        </Box>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Quickly assemble the teams you need, exactly when you need them.
          <br />
          Hire in under 48 hours. Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time.
        </Typography>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Every applicant to the Toptal network is rigorously tested and vetted. Our highly selective process leads to a 98% trial-to-hire success rate.
        </Typography>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Our network is ready for tomorrow's business challenges by embracing advanced and specialized skills including blockchain and AI.
        </Typography>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Every single freelancer in our global network embodies the highest levels of integrity, professionalism, and communication.
        </Typography>
      </Box>

      {/* Featured Experts */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Featured Experts
        </Typography>
        {/* Featured expert cards go here */}
      </Box>

      {/* Why Organizations Choose Toptal */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Why Organizations Choose Toptal
        </Typography>
        {/* Testimonials or client collaborations go here */}
      </Box>

      {/* Ready to Get Started */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Ready to get started?
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button variant="contained" color="primary" size="large">
            Explore Trending Toptal Publications
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Main;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import LandingPage from './pages/landingPage';

const App = () => {
  return (
     <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #0E0D2A, #1C1A3C)",
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default App;

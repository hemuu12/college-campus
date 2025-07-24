import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inventory from './pages/Inventory';
import { Box, Typography } from '@mui/material';

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
          <Route path="/" element={<Inventory />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default App;

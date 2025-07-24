import React from 'react';
import { Box } from '@mui/material';

import Sidebar from '../components/Sidebar'; // Sidebar navigation
import TopNavbar from "../components/TopNavbar"; // Top navigation bar
import AllProductsDetails from '../components/AllProducts/AllProductsDetails'; // Main content component

const Inventory = () => {
  return (
    <Box
      sx={{
        display: 'flex', // Flex layout for sidebar and main content
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        overflowY: 'auto', // Enables vertical scrolling
        backgroundImage: 'linear-gradient(to bottom, #0E0D2A 90%, #33a7a3ff)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundColor: '#0E0D2A',

        // Custom scrollbar styles
        '&::-webkit-scrollbar': { width: '6px' },
        '&::-webkit-scrollbar-track': { background: 'transparent' },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '8px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
        },
        scrollbarWidth: 'thin',
        scrollbarColor: 'rgba(255,255,255,0.2) transparent',
      }}
    >
      <Sidebar /> {/* Left sidebar */}

      <Box sx={{ flexGrow: 1 }}>
        <TopNavbar /> {/* Top navbar */}
        <AllProductsDetails /> {/* Main content area */}
      </Box>
    </Box>
  );
};

export default Inventory;
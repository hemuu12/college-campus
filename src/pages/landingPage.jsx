import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';

import Sidebar from '../components/Sidebar';
import TopNavbar from "../components/Navbar";
import AllProductsDetails from '../components/ListProducts/AllProductsDetails';

const LandingPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [mobileSidebarOpen, setMobileSidebarOpen] = React.useState(false);

  const handleHamburgerClick = () => {
    console.log('Hamburger menu clicked');
    
    setMobileSidebarOpen((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        overflowY: 'auto',
        backgroundImage: 'linear-gradient(to bottom, #0E0D2A 90%, #33a7a3ff)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundColor: '#0E0D2A',
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
      {/* Sidebar */}
      {!isMobile && <Sidebar isMobile={false} />}
      {isMobile && (
        <Sidebar
          isMobile={true}
          isOpen={mobileSidebarOpen}
          onClose={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <Box sx={{ flexGrow: 1 }}>
        <TopNavbar onHamburgerClick={handleHamburgerClick} isMobile={isMobile} />
        <AllProductsDetails />
      </Box>
    </Box>
  );
};

export default LandingPage;

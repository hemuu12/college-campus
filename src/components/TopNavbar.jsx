import React, { useState } from 'react';
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Switch, styled, Typography } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import LightModeIcon from '@mui/icons-material/LightMode';

const TopNavbar = () => {

    const ThemeSwitch = styled(Switch)(({ theme }) => ({
        width: 50,
        height: 26,
        padding: 0,
        display: 'flex',
        '& .MuiSwitch-switchBase': {
            padding: 2,
            '&.Mui-checked': {
                transform: 'translateX(24px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: '#6c42fc',
                    opacity: 1,
                },
            },
        },
        '& .MuiSwitch-thumb': {
            backgroundColor: '#fff',
            width: 22,
            height: 22,
            borderRadius: '50%',
            boxShadow: '0 0 3px rgba(0,0,0,0.4)',
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: '#999',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 300,
            }),
        },
    }));

    const [darkMode, setDarkMode] = useState(false);

    const handleChange = () => {
        setDarkMode(!darkMode);
        // You can add actual theme toggling logic here
    };

    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    height: '60px',
                    background: 'linear-gradient(to right, #0E0D2A, #1C1A3C)',
                    display: 'flex',
                    alignItems: 'center',
                    px: { xs: 1, sm: 3 },
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: 60,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        px: { xs: 1, sm: 2 },
                        flexWrap: 'nowrap',
                        overflow: 'hidden',
                    }}
                >
                    {/* Search Icon */}
                    <Box
                        sx={{
                            width: 36,
                            height: 36,
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '50%',
                            backgroundColor: '#6c6c6c',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                        }}
                    >
                        <SearchIcon sx={{ color: 'white', fontSize: 20 }} />
                    </Box>

                    {/* Spacer */}
                    <Box sx={{ flexGrow: 1 }} />

                    {/* Right Icons */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: { xs: 1, sm: 2, md: 3 },
                            flexShrink: 0,
                            flexWrap: 'nowrap',
                            '& img': {
                                height: { xs: 20, sm: 24 },
                            },
                            '& img:last-child': {
                                height: { xs: 28, sm: 32 },
                                width: { xs: 28, sm: 32 },
                            },
                        }}
                    >
                        {/* <img src="/assets/theme.png" alt="Theme Toggle" /> */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Typography sx={{ color: '#fff', fontWeight: 500 }}>Theme</Typography>
                                <ThemeSwitch checked={darkMode} onChange={handleChange} />
                            </Box>
                        </Box>
                        <img src="/assets/notification.png" alt="Notifications" />
                        <img src="/assets/browser.png" alt="Language" />
                        <img src="/assets/Qmark.png" alt="Help" />
                        <img
                            src="/assets/profile.png"
                            alt="User"
                            style={{
                                width: 40,               // Ensure fixed equal width
                                height: 40,              // Ensure fixed equal height
                                borderRadius: '50%',     // Makes it a perfect circle
                                objectFit: 'cover',      // Ensures image fills the circle nicely
                            }}
                        />
                                         <Box sx={{ flexGrow: 1 }} />

                    </Box>
                </Box>
            </Box>

            {/* Top Decorative Strip */}
            <Box
                sx={{
                    position: 'relative',
                    mt: '-5px',
                    ml: '-5px',
                }}
            >
                <img
                    src="/assets/Topmenulookup.png"
                    alt="topmenulookup"
                    style={{ height: 70, width: '100%', display: 'block' }}
                />

                <Box
                    component="img"
                    src="/assets/collaps.png"
                    alt="Overlay"
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: { xs: '5px', sm: '-10px' },
                        transform: 'translateY(-50%)',
                        height: { xs: 24, sm: 30 },
                        width: { xs: 24, sm: 30 },
                        borderRadius: '50%',
                        backgroundColor: 'white',
                        border: '1px solid #ccc',
                    }}
                />
            </Box>
        </>
    );
};

export default TopNavbar;
import React, { useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
  Switch,
  Drawer,
} from '@mui/material';
import {
  HomeOutlined,
  MailOutline,
  ExpandLess,
  ExpandMore,
  SearchOutlined,
  FolderOpenOutlined,
  ShoppingCartOutlined,
  CategoryOutlined,
  EmojiEmotionsOutlined,
  RequestQuoteOutlined,
} from '@mui/icons-material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

const Sidebar = ({ isMobile, isOpen, onClose }) => {
  const [openMenus, setOpenMenus] = useState({
    customer: false,
    inventory: true,
    allProducts: true,
    orders: false,
    followUps: false,
  });

  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const renderSidebarContent = () => (
    <Box
      sx={{
        width: 250,
        backgroundColor: '#1C1A3C',
        color: '#fff',
        height: '100%',
        p: 2,
        overflowY: 'auto',
      }}
    >
      {/* Logo */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Box
          component="img"
          src="/assets/Company Logo.png"
          alt="Company Logo"
          sx={{
            height: { xs: 28, sm: 36 },
            maxWidth: { xs: 50, sm: 150 },
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </Box>

      {/* Navigation List */}
      <List component="nav">
        <ListItemButton>
          <ListItemIcon><HomeOutlined sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>

        <ListItemButton onClick={() => toggleMenu('myTasks')}>
          <ListItemIcon><TaskAltIcon sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="My Tasks" />
          {openMenus.myTasks ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon><MailOutline sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>

        <ListItemButton onClick={() => toggleMenu('customer')}>
          <ListItemIcon><PeopleAltOutlinedIcon sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Customer" />
          {openMenus.customer ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openMenus.customer} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon><FolderOpenOutlined sx={{ color: 'white' }} /></ListItemIcon>
              <ListItemText primary="Overview" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon><SearchOutlined sx={{ color: 'white' }} /></ListItemIcon>
              <ListItemText primary="Product Search" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={() => toggleMenu('inventory')}>
          <ListItemIcon><Inventory2OutlinedIcon sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Inventory" />
          {openMenus.inventory ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openMenus.inventory} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Overview" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Product Search" />
            </ListItemButton>

            <ListItemButton onClick={() => toggleMenu('allProducts')} sx={{ pl: 4 }}>
              <ListItemText primary="All Products" />
              {openMenus.allProducts ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={openMenus.allProducts} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 6 }}>
                  <ListItemText primary="New Product" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 6 }}>
                  <Box sx={{ px: 1, py: 0.5, bgcolor: '#6c6c6c', borderRadius: '8px' }}>
                    <Typography fontSize={14} color="white">Existing Product</Typography>
                  </Box>
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Collapse>

        <ListItemButton onClick={() => toggleMenu('followUps')}>
          <ListItemIcon><CalendarMonthOutlinedIcon sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Follow Ups" />
          {openMenus.followUps ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <ListItemButton onClick={() => toggleMenu('orders')}>
          <ListItemIcon><ShoppingCartOutlined sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Orders" />
          {openMenus.orders ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon><CategoryOutlined sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Products" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon><PersonOutlineOutlinedIcon sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Users" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon><EmojiEmotionsOutlined sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Leads" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon><LocalOfferOutlinedIcon sx={{ color: 'white' }} /></ListItemIcon>
          <ListItemText primary="Pricelist" />
        </ListItemButton>
      </List>

      {/* Mobile Only Extras */}
      {isMobile && (
        <>
          <Divider sx={{ my: 2, backgroundColor: 'rgba(255,255,255,0.2)' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pl: 1 }}>
            <Typography sx={{ color: '#fff' }}>Theme</Typography>
            <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mt: 2,
              pl: 1,
              '& img': {
                height: 24,
                cursor: 'pointer',
              },
            }}
          >
            <img src="/assets/notification.png" alt="Notifications" />
            <img src="/assets/browser.png" alt="Language" />
            <img src="/assets/Qmark.png" alt="Help" />
          </Box>
        </>
      )}
    </Box>
  );

  return isMobile ? (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 250,
          backgroundColor: '#1C1A3C',
          color: '#fff',
        },
      }}
    >
      {renderSidebarContent()}
    </Drawer>
  ) : (
    renderSidebarContent()
  );
};

export default Sidebar;

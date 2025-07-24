// File: src/components/Sidebar.jsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider
} from '@mui/material';
import {
  HomeOutlined,
  CheckCircleOutline,
  MailOutline,
  PersonOutline,
  Inventory2Outlined,
  ExpandLess,
  ExpandMore,
  SearchOutlined,
  AddCircleOutline,
  FolderOpenOutlined,
  ListAltOutlined,
  ShoppingCartOutlined,
  CategoryOutlined,
  GroupsOutlined,
  EmojiEmotionsOutlined,
  RequestQuoteOutlined
} from '@mui/icons-material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';


const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({
    customer: false,
    inventory: true,
    allProducts: true,
    orders: false,
    followUps: false
  });
  const [openInventory, setOpenInventory] = useState(true);
  const [openAllProducts, setOpenAllProducts] = useState(true);

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const NestedListItem = ({ icon, label, level = 2 }) => {
    const leftPadding = 2 + level * 2;

    return (
      <Box sx={{ position: 'relative', pl: leftPadding }}>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: (level - 1) * 16 + 16,
            bottom: 0,
            borderLeft: '2px solid rgba(255, 255, 255, 0.2)'
          }}
        />
        <ListItemButton sx={{ pl: 2 }}>
          <ListItemIcon sx={{ color: 'white', minWidth: 32 }}>{icon}</ListItemIcon>
          <ListItemText primary={label} />
        </ListItemButton>
      </Box>
    );
  };

  return (
   <Box
  sx={{
  minWidth: { xs: 50, sm: 200 },
    minHeight: '100vh',
    backgroundColor: 'linear-gradient(to bottom, #0E0D2A 0%, #0E0D2A 80%, #0f5132 100%)',
    color: '#fff',
    p: 2,
    overflowY: 'auto',
    pr: 1, // slight padding for scrollbar

    // Stylish translucent scrollbar
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '8px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },

    scrollbarWidth: 'thin', // Firefox
    scrollbarColor: 'rgba(255,255,255,0.2) transparent', // Firefox
  }}
>
    
   <Box sx={{ display: 'flex', alignItems: 'center', maxWidth: '100%' }}>
  <Box
    component="img"
    src="/assets/Company Logo.png" // Ensure the image name and path are correct
    alt="Company Logo"
    sx={{
      height: { xs: 28, sm: 36, md: 40 },  // Responsive heights
      maxWidth: { xs: 50, sm: 150 },
      objectFit: 'contain',
      display: 'block',
    }}
  />
</Box>
    <List component="nav">
  <ListItemButton>
    <ListItemIcon><HomeOutlined sx={{ color: 'white' }} /></ListItemIcon>
    <ListItemText primary="Home" sx={{ display: { xs: 'none', sm: 'block' } }} />
  </ListItemButton>

  <ListItemButton onClick={() => toggleMenu('myTasks')}>
    <ListItemIcon><TaskAltIcon sx={{ color: 'white' }} /></ListItemIcon>
    <ListItemText primary="My Tasks" sx={{ display: { xs: 'none', sm: 'block' } }} />
    {openMenus.myTasks ? <ExpandLess /> : <ExpandMore />}
  </ListItemButton>

  <ListItemButton>
    <ListItemIcon><MailOutline sx={{ color: 'white' }} /></ListItemIcon>
    <ListItemText primary="Inbox" sx={{ display: { xs: 'none', sm: 'block' } }} />
  </ListItemButton>

  <ListItemButton onClick={() => toggleMenu('customer')}>
    <ListItemIcon><PeopleAltOutlinedIcon sx={{ color: 'white' }} /></ListItemIcon>
    <ListItemText primary="Customer" sx={{ display: { xs: 'none', sm: 'block' } }} />
    {openMenus.customer ? <ExpandLess /> : <ExpandMore />}
  </ListItemButton>

  <Collapse in={openMenus.customer} timeout="auto" unmountOnExit>
    <Box sx={{ position: 'relative', pl: 4 }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 16,
          bottom: 0,
          borderLeft: '2px solid rgba(255, 255, 255, 0.2)'
        }}
      />
      <NestedListItem icon={<FolderOpenOutlined sx={{ color: 'white' }} />} label="Overview" level={2} />
      <NestedListItem icon={<SearchOutlined sx={{ color: 'white' }} />} label="Product Search" level={2} />
    </Box>
  </Collapse>

  <List>
  <ListItemButton onClick={() => setOpenInventory(!openInventory)}>
    <Box sx={{ minWidth: 32 }}>
      <Inventory2OutlinedIcon sx={{ color: 'white' }} />
    </Box>
    <ListItemText primary="Inventory" sx={{ display: { xs: 'none', sm: 'block' } }} />
    {openInventory ? <ExpandLess /> : <ExpandMore />}
  </ListItemButton>

  <Collapse in={openInventory} timeout="auto" unmountOnExit>
    <Box
      sx={{
        ml: { xs: 0, sm: 3 },
        position: 'relative',
      }}
    >
      {/* Vertical line hidden on xs */}
      <Box
        sx={{
          display: { xs: 'none', sm: 'block' },
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 8,
          width: '2px',
          backgroundColor: 'rgba(255,255,255,0.2)',
        }}
      />

      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: { xs: 2, sm: 4 }, justifyContent: 'flex-start' }}>
          <ListItemText
            primary="Overview"
            sx={{
              '.MuiListItemText-primary': {
                fontSize: { xs: '12px', sm: '14px' },
                color: 'white',
              },
            }}
          />
        </ListItemButton>

        <ListItemButton sx={{ pl: { xs: 2, sm: 4 } }}>
          <ListItemText
            primary="Product Search"
            sx={{
              '.MuiListItemText-primary': {
                fontSize: { xs: '12px', sm: '14px' },
                color: 'white',
              },
            }}
          />
        </ListItemButton>

        <ListItemButton onClick={() => setOpenAllProducts(!openAllProducts)} sx={{ pl: { xs: 2, sm: 4 } }}>
          <ListItemText
            primary="All Products"
            sx={{
              '.MuiListItemText-primary': {
                fontSize: { xs: '12px', sm: '14px' },
                color: 'white',
              },
            }}
          />
          {openAllProducts ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openAllProducts} timeout="auto" unmountOnExit>
          <Box sx={{ ml: { xs: 0, sm: 3 }, position: 'relative' }}>
            {/* Nested line hidden on xs */}
            <Box
              sx={{
                display: { xs: 'none', sm: 'block' },
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 8,
                width: '2px',
                backgroundColor: 'rgba(255,255,255,0.2)',
              }}
            />

            <ListItemButton sx={{ pl: { xs: 2, sm: 4 } }}>
              <ListItemText
                primary="New Product"
                sx={{
                  '.MuiListItemText-primary': {
                    fontSize: { xs: '12px', sm: '14px' },
                    color: 'white',
                  },
                }}
              />
            </ListItemButton>

            <ListItemButton sx={{ pl: { xs: 2, sm: 4 } }}>
              <Box
                sx={{
                  px: 1,
                  py: 0.5,
                  bgcolor: '#6c6c6c',
                  borderRadius: '8px',
                }}
              >
                <Typography fontSize={{ xs: 12, sm: 14 }} color="white">
                  Existing Product
                </Typography>
              </Box>
            </ListItemButton>
          </Box>
        </Collapse>
      </List>
    </Box>
  </Collapse>
</List>

  <ListItemButton onClick={() => toggleMenu('followUps')}>
    <ListItemIcon><CalendarMonthOutlinedIcon sx={{ color: 'white' }} /></ListItemIcon>
    <ListItemText primary="Follow ups" sx={{ display: { xs: 'none', sm: 'block' } }} />
    {openMenus.followUps ? <ExpandLess /> : <ExpandMore />}
  </ListItemButton>

  <ListItemButton onClick={() => toggleMenu('orders')}>
    <ListItemIcon><ShoppingCartOutlined sx={{ color: 'white' }} /></ListItemIcon>
    <ListItemText primary="Orders" sx={{ display: { xs: 'none', sm: 'block' } }} />
    {openMenus.orders ? <ExpandLess /> : <ExpandMore />}
  </ListItemButton>

  <ListItemButton>
    <ListItemIcon><CategoryOutlined sx={{ color: 'white' }} /></ListItemIcon>
    <ListItemText primary="Products" sx={{ display: { xs: 'none', sm: 'block' } }} />
  </ListItemButton>

  <ListItemButton>
    <ListItemIcon><PersonOutlineOutlinedIcon sx={{ color: 'white' }} /></ListItemIcon>
    <ListItemText primary="Users" sx={{ display: { xs: 'none', sm: 'block' } }} />
  </ListItemButton>

  <ListItemButton>
    <ListItemIcon><EmojiEmotionsOutlined sx={{ color: 'white' }} /></ListItemIcon>
    <ListItemText primary="Leads" sx={{ display: { xs: 'none', sm: 'block' } }} />
  </ListItemButton>

  <ListItemButton>
    <ListItemIcon><LocalOfferOutlinedIcon sx={{ color: 'white' }} /></ListItemIcon>
    <ListItemText primary="Pricelist" sx={{ display: { xs: 'none', sm: 'block' } }} />
  </ListItemButton>
</List>
    </Box>
  );
};

export default Sidebar;
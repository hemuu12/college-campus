import React,{useState} from 'react';
import {
  Box,
  Typography,
  Divider,
  IconButton,
  Tooltip,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ProductBaseProperties from '../AllProducts/ProductBaseProperties';
import HistoryIcon from '@mui/icons-material/History';
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import EditIcon from '@mui/icons-material/Edit';
import TrackingGrid from '../AllProducts/TrackingGrid';
import ProdMetaAttribute from './ProdCommon'; 
import Vehicletable from '../AllProducts/Vehicletable';
import ProductAlternate from '../AllProducts/ProductAltAcc';
import ProductMetaBlock from '../AllProducts/ProductMetaBlock';
import ProductAssetMgmnt from '../AllProducts/ProductAssetMgmnt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const CommonProductStatistic = ({ iconSrc, title, onEdit, data = [] }) => {
 const [expanded, setExpanded] = useState(true); // Toggle for collapse

  const handleToggleExpand = () => {
    setExpanded(prev => !prev);
  };
    
  return (
    <Box
      sx={{
        background: '#2F323C',
        borderRadius: 2,
        p: 2,
        color: '#fff',
        mt: 3,
      }}
    >
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
          <Box
            sx={{
              width: 30,
              height: 30,
              backgroundColor: '#A259FF',
              borderRadius: '50%',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 1,
            }}
          >
            <img src={iconSrc} alt="Icon" style={{ height: 16 }} />
          </Box>
          {title}
        </Typography>

        {/* Edit Button */}
        <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
{title === "Product Base Properties" && (
  <>
    <Tooltip title={title}>
      <IconButton sx={{ backgroundColor: 'transparent', '&:hover': { backgroundColor: 'transparent' } }}>
        <HistoryIcon sx={{ color: 'white', fontSize: 32 }} />
      </IconButton>
    </Tooltip>

    <IconButton sx={{ backgroundColor: 'transparent', '&:hover': { backgroundColor: 'transparent' } }}>
      <OpenInNewIcon sx={{ color: 'white', fontSize: 32 }} />
    </IconButton>
  </>
)}  
  <Box
    sx={{
      background: 'linear-gradient(135deg, #6C42FC, #C346DD)',
      borderRadius: '8px',
      p: 0.5,
      display: 'inline-flex',
      alignItems: 'center',
    }}
  >

    <Tooltip title={title}>

      <IconButton sx={{ color: '#fff' }} onClick={onEdit}>
        {title === 'Product Asset Management' ||
        title === 'Product Options' ||
        title === 'Product Vehicles' ? (
          <AddIcon />
        ) : (
          <EditIcon />
        )}
      </IconButton>
    </Tooltip>
  </Box>
  

  {/* Arrow icon button with transparent background */}
  <IconButton
    sx={{ color: '#fff', ml: 1, background: 'transparent' }}
    onClick={handleToggleExpand}
  >
    {expanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
  </IconButton>
</Box>
       
      </Box>
{expanded && (
  <>
<Box sx={{ height: 16 }} />

{title === 'Product Base Properties' && (
      <ProductBaseProperties />
    )}
    
    {title === 'Product Tracking Details' && (
      <TrackingGrid
        data={data}
        batchLabel="Batch Number"
        serialLabel="Serial Number"
        borderConditionTitle={title}
      />
    )}

    {title === 'Product Metadata Attributes' && (
      <ProdMetaAttribute title={title} data={data} />
    )}

    {title === 'Product Dimension & Power' && (
      <ProdMetaAttribute title={title} data={data} />
    )}

    {title === 'Product Financials' && (
      <ProdMetaAttribute title={title} data={data} />
    )}

    {title === 'Product Vehicles' && (
      <Vehicletable />
    )}

    {title === 'Product Alternates' && (
      <ProductAlternate data={data} />
    )}

    {title === 'Product Accessories' && (
      <ProductAlternate data={data} />
    )}

    {title === 'Product Options' && (
      <ProductMetaBlock />
    )}

    {title === 'Product Asset Management' && (
      <ProductAssetMgmnt />
    )}
  </>
)}

    </Box>
  );
};

export default CommonProductStatistic;
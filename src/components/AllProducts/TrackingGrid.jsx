import React from 'react';
import {
  Box,
  Grid,
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material';

const TrackingGrid = ({
  data = [],
  batchLabel = 'Batch Number',
  serialLabel = 'Serial Number',
  borderConditionTitle = '',
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // sm = <600px

  return (
    <Grid container spacing={2} >
       
      {data.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
             <Box
            sx={{
             
               flexDirection: isMobile && 'column',
                justifyContent: isMobile && 'flex-start',
                alignItems: isMobile && 'flex-start' 
            }}
          >
          <Box
            sx={{
              border:
                borderConditionTitle === 'Product Tracking Details'
                  ? '1px solid #444'
                  : 'none',
              borderRadius:
                borderConditionTitle === 'Product Tracking Details' ? 1 : 0,
              p: 1.5,
               flexDirection: isMobile ? 'column' : 'row',
                justifyContent: isMobile ? 'flex-start' : 'space-between',
                alignItems: isMobile ? 'flex-start' : 'center',
            }}
          >
            {/* Header & Value - Combined */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                justifyContent: isMobile ? 'flex-start' : 'space-between',
                alignItems: isMobile ? 'flex-start' : 'center',
                gap: isMobile ? 1 : 8,
              }}
            >
              <Box>
                <Typography variant="caption" sx={{ color: '#aaa' }}>
                  {batchLabel}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  {item.batch?.trim()}
                </Typography>
              </Box>

              <Box>
                <Typography variant="caption" sx={{ color: '#aaa' }}>
                  {serialLabel}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  {item.serial?.trim()}
                </Typography>
              </Box>
            </Box>
          </Box>
          </Box>
        </Grid>
      ))}
      {/* </Box> */}
    </Grid>
  );
};

export default TrackingGrid;
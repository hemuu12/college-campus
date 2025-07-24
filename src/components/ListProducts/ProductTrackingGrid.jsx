import React from 'react';
import {
  Box,
  Grid,
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material';

const ProductTrackingGrid = ({
  data = [],
  batchLabel = 'Batch Number',
  serialLabel = 'Serial Number',
  borderConditionTitle = '',
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // sm = <600px

  return (
    <Grid container spacing={3} justifyContent={isMobile ? 'center' : 'flex-start'} width={isMobile ? "full" : 'auto'}>
      {data.map((item, index) => (
        <Grid item xs={14} sm={6} md={3} key={index}>
          <Box
            sx={{
              display: isMobile ? 'flex' : 'block',
              flexDirection: isMobile ? 'column' : 'unset',
              gap: isMobile ? 1.5 : 0,

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
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                justifyContent: isMobile ? 'flex-start' : 'space-between',
                alignItems: isMobile ? 'flex-start' : 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  justifyContent: isMobile ? 'flex-start' : 'space-between',
                  alignItems: isMobile ? 'flex-start' : 'center',
                  gap: isMobile ? 1 : 8,
                  width: '100%',
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
    </Grid>
  );
};

export default ProductTrackingGrid;

import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  useTheme,
  useMediaQuery,
} from '@mui/material';

const ProductAlternate = ({ data }) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // <600px
  const isMediumScreen = useMediaQuery('(min-width:1025px) and (max-width:1439px)');
  const isLaptop = useMediaQuery('(min-width:1440px)');

  // 📱 Mobile: Stack layout
  if (isMobile) {
    return (
      <Grid container spacing={2} sx={{ backgroundColor: '#2f2f3c', p: 2, borderRadius: 2 }}>
        {data.map((product, index) => (
          <Grid item xs={12} key={index}>
            <Card
              sx={{
                backgroundColor: '#2f2f3c',
                borderRadius: 2,
                color: '#fff',
                boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <CardMedia
                component="img"
                image={product.image}
                alt={product.label}
                sx={{
                  height: 60,
                  objectFit: 'contain',
                  backgroundColor: '#fff',
                  mx: 'auto',
                  borderRadius: 1.5,
                }}
              />
              <CardContent sx={{ padding: 1, textAlign: 'center' }}>
                <Typography variant="body2" color="inherit">
                  {product.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }

  // 🖥️ Medium screens (1025–1439px): Grid layout
  if (isMediumScreen) {
    return (
      <Grid container spacing={2} sx={{ backgroundColor: '#2f2f3c', p: 2, borderRadius: 2 }}>
        {data.map((product, index) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
            <Card
              sx={{
                backgroundColor: '#2f2f3c',
                borderRadius: 2,
                color: '#fff',
                textAlign: 'center',
                height: '100%',
                boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <CardMedia
                component="img"
                image={product.image}
                alt={product.label}
                sx={{
                  height: 60,
                  objectFit: 'contain',
                  backgroundColor: '#fff',
                  mx: 'auto',
                  mt: 1,
                  borderRadius: 1.5,
                }}
              />
              <CardContent sx={{ padding: 1 }}>
                <Typography variant="body2" color="inherit">
                  {product.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }

  // 💻 Laptop (≥1440px): Horizontal scroll
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        overflowX: 'auto',
        backgroundColor: '#2f2f3c',
        padding: 2,
        borderRadius: '10px',
      }}
    >
      {data.map((product, index) => (
        <Card
          key={index}
          sx={{
            minWidth: 120,
            maxWidth: 120,
            backgroundColor: '#2f2f3c',
            borderRadius: '8px',
            textAlign: 'center',
            flexShrink: 0,
            color: '#fff',
            boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <CardMedia
            component="img"
            image={product.image}
            alt={product.label}
            sx={{
              height: 60,
              objectFit: 'contain',
              backgroundColor: '#fff',
              mx: 'auto',
              mt: 1,
              borderRadius: 1.5,
            }}
          />
          <CardContent sx={{ padding: 1 }}>
            <Typography variant="body2" color="inherit">
              {product.label}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ProductAlternate;
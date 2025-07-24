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

  const isXs = useMediaQuery(theme.breakpoints.only('xs')); // Mobile
  const isSm = useMediaQuery(theme.breakpoints.only('sm')); // Tablet
  const isMd = useMediaQuery(theme.breakpoints.only('md')); // Medium Laptop
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg')); // 1440px and above

  // Mobile & Small Tablet: Grid stacked layout
  if (isXs || isSm) {
    return (
      <Grid container spacing={2} sx={{ backgroundColor: '#2f2f3c', p: 2, borderRadius: 2 }}>
        {data.map((product, index) => (
          <Grid item xs={6} sm={4} key={index}>
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
                  mt: 1,
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

  // Medium screen: 4 columns
  if (isMd) {
    return (
      <Grid container spacing={2} sx={{ backgroundColor: '#2f2f3c', p: 2, borderRadius: 2 }}>
        {data.map((product, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
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

  // Large screens (≥lg): horizontal scroll with fixed card widths
  if (isLgUp) {
    return (
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          overflowX: 'auto',
          backgroundColor: '#2f2f3c',
          padding: 2,
          borderRadius: '10px',
          '&::-webkit-scrollbar': {
            height: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(255,255,255,0.2)',
            borderRadius: '8px',
          },
        }}
      >
        {data.map((product, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 100,
              maxWidth: 100,
              backgroundColor: '#2f2f3c',
              borderRadius: '8px',
              textAlign: 'center',
              flexShrink: 0,
              color: '#fff',
              boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              p: 0.1,
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
  }

  // Fallback (any other screen size)
  return null;
};

export default ProductAlternate;

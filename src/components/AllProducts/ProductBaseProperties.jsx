import React from 'react';
import {
  Box,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from '@mui/material';

const ProductBaseProperties = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isLaptop = useMediaQuery(theme.breakpoints.between('sm', 'md')); // 600-899px
  const isBetween1025And1439 = useMediaQuery('(min-width:1024px) and (max-width:1440px)');
  const isBetween1025And1210 = useMediaQuery('(min-width:1024px) and (max-width:1210px)');

  return (
    <Box
      sx={{
        background: '#2F323C',
        borderRadius: 2,
        p: 2,
        color: '#fff',
      }}
    >
      <Box sx={{ width: '100%', overflowX: isMobile ? 'auto' : 'visible' }}>
        <Grid
          container
          spacing={2}
          alignItems="flex-start"
          wrap={isMobile || isBetween1025And1439 ? 'wrap' : 'nowrap'}
          sx={{
            minWidth: isMobile ? '100%' : 'auto',
          }}
        >
          {/* Left Side */}
          <Grid item>
            <Box
              sx={{
                backgroundColor: '#2B2B3C',
                borderRadius: '6px',
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                minWidth: 220,
              }}
            >
              <Box
                component="img"
                src="/assets/material_image.png"
                alt="Material"
                sx={{
                  width: '100%',
                  maxWidth: 315,
                  backgroundColor: 'white',
                  borderRadius: 2,
                  p: 1,
                  mb: 1,
                }}
              />
              <Typography variant="body2">Surface Mount</Typography>
            </Box>
          </Grid>

          {/* Right Side Fields */}
          <Grid
            container
  spacing={isBetween1025And1439 ? isBetween1025And1210?6: 16 : 4}
            wrap={isMobile || isBetween1025And1439 ? 'wrap' : 'nowrap'}
            justifyContent="flex-start"
          >
            {[...Array(3)].map((_, colIndex) => (
              <Grid item xs={12} sm={isBetween1025And1439 ? 6 : 'auto'} key={colIndex}>
                <Box
                  sx={{
                    width: isMobile || isBetween1025And1439 ? '100%' : 250,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                  }}
                >
                  {colIndex === 0 && (
                    <>
                      <Box>
                        <Typography><strong>Inventory Class*</strong></Typography>
                        <Typography
                          sx={{
                            display: 'inline-block',
                            px: 1.5,
                            py: 0.5,
                            backgroundColor: '#0BB5FF',
                            borderRadius: 1,
                            fontSize: 13,
                            mt: 0.5,
                            width: 'fit-content',
                          }}
                        >
                          Pre Production
                        </Typography>
                      </Box>
                      <Box>
                        <Typography><strong>Part Number*</strong></Typography>
                        <Typography><strong>022134</strong></Typography>
                      </Box>
                      <Box>
                        <Typography><strong>Line*</strong></Typography>
                        <Typography><strong>Carbide</strong></Typography>
                      </Box>
                      <Box>
                        <Typography><strong>QR Code</strong></Typography>
                        <Box
                          component="img"
                          src="/assets/qr_code.png"
                          alt="QR Code"
                          sx={{ height: 64, mt: 1 }}
                        />
                      </Box>
                    </>
                  )}
                  {colIndex === 1 && (
                    <>
                      <Box>
                        <Typography><strong>SKU(ID)</strong></Typography>
                        <Typography><strong>2876512</strong></Typography>
                      </Box>
                      <Box>
                        <Typography><strong>Category*</strong></Typography>
                        <Typography><strong>Lighting</strong></Typography>
                      </Box>
                      <Box>
                        <Typography><strong>Series</strong></Typography>
                        <Typography><strong>Surface Mount</strong></Typography>
                      </Box>
                    </>
                  )}
                  {colIndex === 2 && (
                    <>
                      <Box>
                        <Typography><strong>Product Type*</strong></Typography>
                        <Typography><strong>Spare Part</strong></Typography>
                      </Box>
                      <Box>
                        <Typography><strong>Family*</strong></Typography>
                        <Typography><strong>Illumination</strong></Typography>
                      </Box>
                      <Box>
                        <Typography><strong>Warranty</strong></Typography>
                        <Typography>
                          <strong>5 Years</strong>{' '}
                          <span style={{ color: '#0BB5FF' }}>10WAR-02</span>
                        </Typography>
                      </Box>
                    </>
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>

      {/* Descriptions */}
      <Box mt={3}>
        <Typography fontWeight="bold">Description</Typography>
        <Typography variant="body2" color="gray">
          Lorem ipsum dolor sit amet. Et molestiae fuga id consequatur quia qui aliquid volupta.
        </Typography>

        <Typography mt={2} fontWeight="bold">Long Description</Typography>
        <Typography variant="body2" color="gray">
          Lorem ipsum dolor sit amet. Et molestiae fuga id consequatur quia qui aliquid voluptas. Aut praesentium corrupti est consequatur eligendi rem ratione officia est consequatur Quis sit sint unde.
        </Typography>

        <Typography mt={2} fontWeight="bold">Marketing Description</Typography>
        <Typography variant="body2" color="gray">
          Lorem ipsum dolor sit amet. Et molestiae fuga id consequatur quia qui aliquid voluptas. Aut praesentium corrupti est consequatur eligendi rem ratione officia est consequatur Quis ut sint unde.
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductBaseProperties;
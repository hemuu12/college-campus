import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Paper,
  Link,
  useMediaQuery,
  useTheme,
  Grid,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const data = [
  {
    id: 1,
    image: 'assets/Single.png',
    info: 'Front view',
    url: 'https://Company.widen.net/s/hlwxsxtcjg/field-series-exploded-view-2',
  },
  {
    id: 2,
    image: 'assets/Dual.png',
    info: 'Back View',
    url: 'https://Company.widen.net/s/hlwxsxtcjg/field-series-exploded-view-2',
  },
  {
    id: 3,
    image: 'assets/Handsfree.png',
    info: 'Top angle view',
    url: 'https://Company.widen.net/s/hlwxsxtcjg/field-series-exploded-view-2',
  },
  {
    id: 4,
    image: 'assets/Core-R.png',
    info: 'Bottom angle View',
    url: 'https://Company.widen.net/s/hlwxsxtcjg/field-series-exploded-view-2',
  },
  {
    id: 5,
    image: 'assets/core-r2.png',
    info: 'Left angle View',
    url: 'https://Company.widen.net/s/hlwxsxtcjg/field-series-exploded-view-2',
  },
];

const ProductAssetMgmnt = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Paper sx={{ backgroundColor: '#2f2f3c', p: 2 }}>
      {!isMobile ? (
        // 💻 Desktop Table View
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundImage: 'linear-gradient(to right, #40386C, #53498C)' }}>
              {['S.No.', 'Image', 'Image Info', 'Image URL', 'Action'].map((header, idx) => (
                <th
                  key={idx}
                  style={{
                    color: '#fff',
                    fontWeight: 600,
                    border: '1px solid #444',
                    padding: '12px',
                    textAlign: 'center',
                  }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={row.id}
                style={{
                  backgroundColor: i % 2 === 0 ? '#2f2f3c' : '#3a3a4c',
                }}
              >
                <td style={{ color: '#fff', border: '1px solid #444', textAlign: 'center' }}>{i + 1}</td>
                <td style={{ border: '1px solid #444', textAlign: 'center' }}>
                  <img
                    src={row.image}
                    alt={`view-${i}`}
                    style={{ width: 40, height: 40, objectFit: 'contain' }}
                  />
                </td>
                <td style={{ color: '#fff', border: '1px solid #444', textAlign: 'center' }}>
                  {row.info}
                </td>
                <td style={{ color: '#6ba4ff', border: '1px solid #444', textAlign: 'center' }}>
                  <Link
                    href={row.url}
                    target="_blank"
                    underline="hover"
                    sx={{ display: 'inline-flex', alignItems: 'center', wordBreak: 'break-word' }}
                  >
                    {row.url}
                    <OpenInNewIcon sx={{ fontSize: 16, ml: 0.5 }} />
                  </Link>
                </td>
                <td style={{ border: '1px solid #444', textAlign: 'center' }}>
                  <IconButton size="small" sx={{ color: '#ffffff', mx: 0.5, border: 1, borderRadius: 0 }}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    sx={{ color: '#ff6b6b', mx: 0.5, border: 1, borderRadius: 0, borderColor: '#ff6b6b' }}
                  >
                    <DeleteOutlineIcon fontSize="small" />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        // 📱 Mobile Card/Grid View
        <Box display="flex" flexDirection="column" gap={2}>
          {data.map((row, i) => (
            <Paper
              key={row.id}
              elevation={2}
              sx={{
                p: 2,
                backgroundColor: '#3a3a4c',
                color: '#fff',
                border: '1px solid #444',
              }}
            >
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography fontWeight="bold">S.No.:</Typography>
                  <Typography>{i + 1}</Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography fontWeight="bold">Image:</Typography>
                  <Box
                    component="img"
                    src={row.image}
                    alt={`img-${i}`}
                    sx={{ width: 60, height: 60, objectFit: 'contain', mt: 1 }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography fontWeight="bold">Image Info:</Typography>
                  <Typography>{row.info}</Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography fontWeight="bold">Image URL:</Typography>
                  <Link
                    href={row.url}
                    target="_blank"
                    underline="hover"
                    sx={{ color: '#6ba4ff', wordBreak: 'break-word' }}
                  >
                    {row.url}
                    <OpenInNewIcon sx={{ fontSize: 16, ml: 0.5 }} />
                  </Link>
                </Grid>

                <Grid item xs={12}>
                  <Typography fontWeight="bold">Actions:</Typography>
                  <Box display="flex" gap={1} mt={1}>
                    <IconButton size="small" sx={{ color: '#ffffff', border: 1, borderRadius: 0 }}>
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      sx={{ color: '#ff6b6b', border: 1, borderRadius: 0, borderColor: '#ff6b6b' }}
                    >
                      <DeleteOutlineIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Box>
      )}
    </Paper>
  );
};

export default ProductAssetMgmnt;

import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
  Grid,
} from '@mui/material';

const carData = [
  {
    identifier: 29,
    make: 'BMW',
    model: '3 Series',
    year: 2025,
    trim: 'M340i',
    description: 'M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)',
  },
  {
    identifier: 26,
    make: 'Toyota',
    model: '3 Series',
    year: 2025,
    trim: 'T340i',
    description: 'T340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)',
  },
  {
    identifier: 35,
    make: 'Audi',
    model: 'A4',
    year: 2024,
    trim: 'Premium Plus',
    description: 'Premium Plus 4dr Sedan (2.0L turbo 4cyl 7AM)',
  },
  {
    identifier: 42,
    make: 'Mercedes',
    model: 'C-Class',
    year: 2025,
    trim: 'C300',
    description: 'C300 Sedan (2.0L turbo 4cyl gas/electric 9A)',
  },
  {
    identifier: 51,
    make: 'Honda',
    model: 'Accord',
    year: 2023,
    trim: 'Sport',
    description: 'Sport 4dr Sedan (1.5L turbo 4cyl CVT)',
  },
  {
    identifier: 63,
    make: 'Hyundai',
    model: 'Elantra',
    year: 2024,
    trim: 'Limited',
    description: 'Limited 4dr Sedan (2.0L 4cyl CVT)',
  },
  {
    identifier: 74,
    make: 'Tesla',
    model: 'Model 3',
    year: 2025,
    trim: 'Performance',
    description: 'AWD Performance Sedan (electric)',
  },
  {
    identifier: 80,
    make: 'Ford',
    model: 'Fusion',
    year: 2020,
    trim: 'SE',
    description: 'SE 4dr Sedan (1.5L turbo 4cyl 6A)',
  },
  {
    identifier: 91,
    make: 'Chevrolet',
    model: 'Malibu',
    year: 2023,
    trim: 'RS',
    description: 'RS 4dr Sedan (1.5L turbo 4cyl CVT)',
  },
  {
    identifier: 99,
    make: 'Nissan',
    model: 'Altima',
    year: 2024,
    trim: 'SR',
    description: 'SR 4dr Sedan (2.5L 4cyl CVT)',
  },
];

const Vehicletable = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (isMobile) {
    // 📱 Mobile: Use Grid layout
    return (
      <Box sx={{ p: 2 }}>
        {carData.map((row, idx) => (
          <Paper
            key={idx}
            elevation={3}
            sx={{
              mb: 2,
              backgroundColor: '#2f2f3c',
              color: '#fff',
              p: 2,
              border: '1px solid #444',
            }}
          >
            <Grid container spacing={1}>
              <Grid item xs={5}>
                <Typography fontWeight="bold">Identifier:</Typography>
              </Grid>
              <Grid item xs={7}>
                {row.identifier}
              </Grid>

              <Grid item xs={5}>
                <Typography fontWeight="bold">Make:</Typography>
              </Grid>
              <Grid item xs={7}>
                {row.make}
              </Grid>

              <Grid item xs={5}>
                <Typography fontWeight="bold">Model:</Typography>
              </Grid>
              <Grid item xs={7}>
                {row.model}
              </Grid>

              <Grid item xs={5}>
                <Typography fontWeight="bold">Year:</Typography>
              </Grid>
              <Grid item xs={7}>
                {row.year}
              </Grid>

              <Grid item xs={5}>
                <Typography fontWeight="bold">Trim:</Typography>
              </Grid>
              <Grid item xs={7}>
                {row.trim}
              </Grid>

              <Grid item xs={12}>
                <Typography fontWeight="bold">Description:</Typography>
                <Typography>{row.description}</Typography>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Box>
    );
  }

  // 💻 Desktop: Use Table layout
  return (
    <TableContainer component={Paper} sx={{ backgroundColor: '#2f2f3c' }}>
      <Table sx={{ borderCollapse: 'collapse' }}>
        <TableHead>
          <TableRow sx={{ backgroundImage: 'linear-gradient(to right, #40386C, #53498C)' }}>
            <TableCell align="center" sx={{ color: 'white', border: '1px solid #444' }}>
              Identifier
            </TableCell>
            <TableCell align="center" sx={{ color: 'white', border: '1px solid #444' }}>
              Make
            </TableCell>
            <TableCell align="center" sx={{ color: 'white', border: '1px solid #444' }}>
              Model
            </TableCell>
            <TableCell align="center" sx={{ color: 'white', border: '1px solid #444' }}>
              Year
            </TableCell>
            <TableCell align="center" sx={{ color: 'white', border: '1px solid #444' }}>
              Trim
            </TableCell>
            <TableCell align="center" sx={{ color: 'white', border: '1px solid #444' }}>
              Trim Description
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {carData.map((row, index) => (
            <TableRow
              key={index}
              sx={{ backgroundColor: index % 2 === 0 ? '#2f2f3c' : '#3a3a4c' }}
            >
              <TableCell align="center" sx={{ color: '#fff', border: '1px solid #444' }}>
                {row.identifier}
              </TableCell>
              <TableCell align="center" sx={{ color: '#fff', border: '1px solid #444' }}>
                {row.make}
              </TableCell>
              <TableCell align="center" sx={{ color: '#fff', border: '1px solid #444' }}>
                {row.model}
              </TableCell>
              <TableCell align="center" sx={{ color: '#fff', border: '1px solid #444' }}>
                {row.year}
              </TableCell>
              <TableCell align="center" sx={{ color: '#fff', border: '1px solid #444' }}>
                {row.trim}
              </TableCell>
              <TableCell align="center" sx={{ color: '#fff', border: '1px solid #444' }}>
                {row.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Vehicletable;
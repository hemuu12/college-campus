import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const ProdAttribute = ({ data = [], title }) => {
  const columnCount = title === 'Product Metadata Attributes' ? 3 : 4;

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)', // ✅ mobile layout (e.g. 425px)
          sm: `repeat(${columnCount}, 1fr)`, // ✅ original layout for tablet/laptop
        },
        gap: 3,
      }}
    >
      {data.map((item, index) => (
        <Box key={index} sx={{ p: 1.5 }}>
          <Typography
            variant="caption"
            sx={{ color: '#aaa', mb: 0.5, display: 'block' }}
          >
            {item.label}
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            {item.value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ProdAttribute;
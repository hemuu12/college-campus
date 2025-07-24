import React from 'react';
import { Typography } from '@mui/material';

const ProductProperty = ({ label, value }) => (
  <Typography variant="body2" sx={{ mb: 0.5 }}>
    <strong>{label}:</strong> {value}
  </Typography>
);

export default ProductProperty;
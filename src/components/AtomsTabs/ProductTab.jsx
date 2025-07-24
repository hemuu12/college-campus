import React from 'react';
import { Typography } from '@mui/material';

const ProductTab = ({ label, value }) => (
  <Typography variant="body1" sx={{ mb: 0.5 }}>
    <strong>{label}:</strong> {value}
  </Typography>
);

export default ProductTab;
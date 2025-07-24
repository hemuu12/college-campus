import React from 'react';
import { Card, Typography } from '@mui/material';

const ProductTrackingCard = ({ batch, serial }) => (
  <Card sx={{ backgroundColor: '#29294D', p: 2 }}>
    <Typography variant="body2"><strong>Batch Number:</strong> {batch}</Typography>
    <Typography variant="body2"><strong>Serial Number:</strong> {serial}</Typography>
  </Card>
);

export default ProductTrackingCard;
import React from 'react';
import {
  Box,
  Chip,
  IconButton,
  Typography,
  Stack,
  Tooltip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const ProductMetaBlock = () => {
  const colors = ['#7A3E2D', '#1F1E4E', '#8E8BD6', '#E74C3C', '#FDBD76'];
  const dimensions = ['12.4 H × 18.4 W', '22.4 H × 28.4 W', '42.4 H × 48.6 W'];
  const controlOptions = ['WeCan', 'WeCanX'];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const Section = ({ label, children }) => (
    <Box
      sx={{
        backgroundColor: '#2f2f3c',
        borderRadius: 2,
        padding: isMobile ? 1.2 : 2,
        mb: 2,
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: isMobile ? 'flex-start' : 'center',
        boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        gap: isMobile ? 1.5 : 0,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography variant="subtitle1" sx={{ color: '#fff', mb: 1 }}>
          {label}
        </Typography>
        {children}
      </Box>

      <Box
        sx={{
          background: 'linear-gradient(135deg, #6C42FC, #C346DD)',
          borderRadius: '8px',
          mt: isMobile ? 1.5 : 0,
        }}
      >
        <Tooltip title="Edit">
          <IconButton sx={{ color: '#fff' }} onClick={() => {}}>
            <EditIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );

  return (
    <Box>
      {/* Colors Section */}
      <Section label="Colors*">
        <Stack
          direction="row"
          spacing={2}
          flexWrap="wrap"
          useFlexGap
        >
          {colors.map((color, index) => (
            <Box
              key={index}
              sx={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                backgroundColor: color,
                border: '2px solid #fff',
              }}
            />
          ))}
        </Stack>
      </Section>

      {/* Dimensions Section */}
      <Section label="Dimensions*">
        <Stack
          direction="row"
          spacing={2}
          flexWrap="wrap"
          useFlexGap
        >
          {dimensions.map((dim, index) => (
            <Chip
              key={index}
              label={`${dim} (cm)`}
              size="small"
              sx={{
                backgroundColor: '#5c5b5bff',
                color: '#fff',
                border: '1px solid #555',
                borderRadius: 0,
                fontWeight: 500,
              }}
            />
          ))}
        </Stack>
      </Section>

      {/* Control Section */}
      <Section label="Control">
        <Stack
          direction="row"
          spacing={2}
          flexWrap="wrap"
          useFlexGap
        >
          {controlOptions.map((ctrl, index) => (
            <Chip
              key={index}
              label={ctrl}
              size="small"
              sx={{
                backgroundColor: '#5c5b5bff',
                color: '#fff',
                border: '1px solid #555',
                borderRadius: 0,
                fontWeight: 500,
              }}
            />
          ))}
        </Stack>
      </Section>
    </Box>
  );
};

export default ProductMetaBlock;
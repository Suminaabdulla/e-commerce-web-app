import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import colors from '@/utils/colors';

const style = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  backgroundColor: colors.common.violet,
  color: 'white',
  borderRadius: '8px',
  marginX: 8,
  paddingX: 6,
  marginY: 4,
  
}
const BlueBox: React.FC = () => {
  return (
    <Box sx={style}
    >
      <Box>
        <Typography variant="h6" component="h2">
          Important to know
        </Typography>
        <Typography fontSize={12}>
          The must-know legal bits and details about this service.
        </Typography>
      </Box>
      <Button variant='outlined' color="secondary" sx={{ borderColor: colors.common.white, color: colors.common.white, pr:8, pl: 8 }}>
        View More <KeyboardArrowDownIcon />
      </Button>
    </Box>
  );
};

export default BlueBox;

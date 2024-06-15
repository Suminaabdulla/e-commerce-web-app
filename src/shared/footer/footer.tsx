import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import colors from '@/utils/colors';
import AppIconSVG from '@/core/svg/AppIcon';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2rem',
        backgroundColor: colors.common.violet,
        color: 'white',
        paddingTop:'3rem'
      }}
    >
      <AppIconSVG width={'50'} height={'30'}/> 
      <Box sx={{ flexGrow: 1, marginLeft: '1rem' }}>
        <Typography variant="body2" sx={{ fontSize: 10 }}>
          Copyright stc &copy; {new Date().getFullYear()} All rights reserved
        </Typography>
      </Box>
      <Box sx={{ fontSize: 10 }}>
        <Link href="/privacy-policy" sx={{ color: 'white', marginRight: '1rem' }}>
          Important Documents
        </Link>
        <Link href="/privacy-policy" sx={{ color: 'white', marginRight: '1rem' }}>
          Privacy Policy
        </Link>
        <Link href="/terms-and-conditions" sx={{ color: 'white' }}>
          Terms and Conditions
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;

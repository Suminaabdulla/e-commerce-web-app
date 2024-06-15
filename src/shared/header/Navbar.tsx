"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AppIconSVG from '@/core/svg/AppIcon';
import colors from '@/utils/colors';
import { Divider } from '@mui/material';
import HeaderTab from './HeaderTab';

const pages = ['Deals', 'Devices', 'Mobile', 'Internet', 'Insurance', 'Entertainment', 'Sales & Support', '5G'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const headerTabs = [{label:'PERSONAL'}, {label:'BUSINESS'}, {label:'WHOLESALE'}]

  return (
    <AppBar position="fixed" sx={{backgroundColor: colors.common.white}}>
      <HeaderTab items={headerTabs}/>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
          <AppIconSVG width={'80'} height={'50'} color={colors.common.violet}/>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{color:colors.common.violet}}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: colors.common.mirage, display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Divider orientation="vertical" flexItem />
          <IconButton color="inherit" sx={{ padding: 2 }}>
            <SearchIcon sx={{ color: colors.common.mirage }} />
          </IconButton>
          <Divider orientation="vertical" flexItem />
          <IconButton color="inherit" sx={{ padding: 2 }}>
            <ShoppingCartIcon sx={{ color: colors.common.mirage }} />
          </IconButton>

          <Divider orientation="vertical" flexItem />
          <Typography color={colors.primary.radicalRed} padding={1} paddingLeft={3} fontWeight={500} fontSize={14}>
            LOGIN
          </Typography>
          <IconButton >
            <LogoutIcon sx={{ color: colors.primary.radicalRed }} />
          </IconButton>
          <Divider orientation='horizontal' flexItem />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

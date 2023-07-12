import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as PPLogo } from '../../assets/pplogowhite.svg';
import { Link } from 'react-router-dom';

const accountPages = ['Log in', 'Sign up'];
const generalPages = ['Home', 'Community', 'Modeling'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function TopBar() {
  const [user, setUser] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{bgcolor: "#099148"}}>
      <Container maxWidth={false}>
        <Toolbar disableGutters sx={{height: 10, minHeight: 10}}>
          <SvgIcon
            fontSize="large"
            component={PPLogo}
            inheritViewBox
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 4 }} />
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'fantasy',
              fontWeight: 500,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              mr: 4
            }}
          >
            Possum Portal
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              {generalPages.map((generalPage) => (
                <Link to={`${generalPage}`}>
                  <MenuItem
                    key={generalPage}
                    onClick={handleCloseNavMenu}>
                      <Typography>{generalPage}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <SvgIcon
            fontSize="large"
            component={PPLogo}
            inheritViewBox
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 2 }}/>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'fantasy',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Possum Portal
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {generalPages.map((generalPage) => (
              <Link to={`${generalPage}`}>
                <Button
                  key={generalPage}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }} >
                  <Typography>{generalPage}</Typography>
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, position: 'right', display: {xs: 'none', md: 'flex'} }}>
            {
              user ?
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <Link to={`${setting}`}>
                      <MenuItem
                        key={setting}
                        onClick={handleCloseUserMenu}>
                          <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    </Link>
                  ))}
                </Menu>
              </> :
              <>
                {accountPages.map((accountPage) => (
                  <Link to={`${accountPage}`}>
                    <Button
                      key={accountPage}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'flex' }} >
                      <Typography>{accountPage}</Typography>
                    </Button>
                  </Link>
                ))}
              </>
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default TopBar;
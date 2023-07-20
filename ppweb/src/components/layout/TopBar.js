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
import { useScrollTrigger } from '@mui/material';
import { ReactComponent as PPLogo } from '../../assets/pplogowhite.svg';
import { Link } from 'react-router-dom';

const accountPages = ['Log in', 'Sign up'];
const generalPages = ['Home', 'Community', 'Maps', 'Modeling'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function TopBar(props) {
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

  // const trigger = useScrollTrigger({});

  console.log(props.trigger);

  return (
    <AppBar sx={{bgcolor: props.trigger ? "#099148" : "transparent"}}>
      <Container maxWidth={false}>
        <Toolbar disableGutters sx={{}}>
          <SvgIcon
            fontSize="large"
            component={PPLogo}
            inheritViewBox
            sx={{ display: { xs: "none", md: "flex" }, mr: 3 }} />
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
              mr: 3
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
              {generalPages.map((generalPage) => {
                const route = generalPage.toLowerCase();
                <MenuItem
                  key={generalPage}
                  onClick={handleCloseNavMenu}
                  component={Link} to={`/${generalPage}`}>
                    <Typography>{generalPage}</Typography>
                </MenuItem>
              })}
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
            {generalPages.map((generalPage) => {
              const route = generalPage.toLowerCase();
              return (<Button
                component={Link}
                to={`/${route}`}
                key={generalPage}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }} >
                <Typography>{generalPage}</Typography>
              </Button>)
            }
            )}
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
                    <Link to={`${setting}`} textDecoration="none">
                      <MenuItem
                        key={setting}
                        component={Link}
                        to={`/${setting}`}
                        onClick={handleCloseUserMenu}>
                          <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    </Link>
                  ))}
                </Menu>
              </> :
              <>
                {accountPages.map((accountPage) => (
                  <Button
                    key={accountPage}
                    component={Link}
                    to="/onboarding"
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'flex' }} >
                    <Typography>{accountPage}</Typography>
                  </Button>
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
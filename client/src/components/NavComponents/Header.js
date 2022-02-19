import Signup from "../Signup";
import LoginForm from "../LoginForm";
import ProfileNavIcons from './ProfileNavIcons'
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { AppBar as MuiAppBar, Toolbar, Button, Typography, Box, Slide, Link, IconButton, useScrollTrigger, CardMedia, InputBase } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link as ReactLink } from 'react-router-dom'
import auth from '../../utils/auth';
import store from '../../utils/store';
import { setDrawerOpen } from '../../utils/actions';
import { useEffect, useState } from "react";
import { useTheme } from "@mui/system";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '25px',
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  margin: 'auto',
  flexGrow: 1,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  height: '100px',
  boxShadow: 'none',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `100%`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const NavLink = styled(Link)({
  fontSize: 18,
  fontFamily: 'Arial',
  textDecoration: 'none',
  marginRight: 2,
  color: 'white',
  alignSelf: "center",
  padding: '7.5px 10px',
  borderRadius: '3px',
  ':hover': {
    backgroundColor: '#614330'
  }
})

const Header = () => {
  const { profile: { loggedIn }, ui: { drawerOpen } } = store.getState()
  const theme = useTheme()
  console.log(theme)

  return (
    <AppBar open={drawerOpen} position='static' sx={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid black', backgroundColor: 'whitesmoke' }}>
      <Box component='nav' sx={{ padding: '5px 10px', width: '50%', margin: 'auto' }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%'
        }}>
          <Box>

          </Box>
          <Link component={ReactLink} to='/' variant="h1" fontSize='26px' sx={{ color: 'black' }} underline='none' alignSelf='center' marginX={3}>
              Local Farmers
          </Link>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          {auth.loggedIn() ? (
            <>

              <ProfileNavIcons />
            </>
          ) : (
            <Box sx={{
              display: 'flex',
              justifySelf: 'flex-end',
              width: '100%',
              marginX: 2
            }}>
              <Signup></Signup>
              <LoginForm></LoginForm>
              <Link to={"/cart"} component={ReactLink}>
                <ShoppingCartIcon fontSize="40px" />
              </Link>
            </Box>
          )}


        </Box>
      </Box>
    </AppBar>
  )
}

export default Header

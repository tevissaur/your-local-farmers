import Signup from "./Signup";
import LoginForm from "./LoginForm";
import ProfileNavIcons from './ProfileNavIcons'
import { CgShoppingCart } from "react-icons/cg";
import { styled } from '@mui/material/styles';
import Menu from '@mui/icons-material/Menu'
import { AppBar as MuiAppBar, Toolbar, Button, Typography, Box, Slide, Link, IconButton, useScrollTrigger } from '@mui/material'
import { Link as ReactLink } from 'react-router-dom'
import auth from '../utils/auth';
import store from '../utils/store';
import { setDrawerOpen } from '../utils/actions';
import { useEffect, useState } from "react";


const drawerWidth = 240;


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
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
  const { profile, ui: { drawerOpen } } = store.getState()

  return (
    <AppBar position="fixed" open={drawerOpen} sx={{ justifyContent: 'center' }}>
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          onClick={() => store.dispatch(setDrawerOpen(!drawerOpen))}
          edge="start"
          sx={{
            m: 1,
            backgroundColor: 'darkgrey',
            padding: '5.5px 7.5px',
            borderRadius: '3px',
            ':hover': {
              backgroundColor: 'gray'
            }
          }}

        >
          <Menu />
        </IconButton>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%'
        }} >
          <Box sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            width: '100%'
          }}>
            <NavLink component={ReactLink} to="/home">
              Home
            </NavLink>
            <Box flex="1">
              <Typography as="h1" fontSize="35px" color="black" >
                Your Local Farmers
              </Typography>
            </Box>
            <Box>
              <Box>
                <Link to={"/cart"}>
                  <CgShoppingCart fontSize="40px" />
                </Link>
                <span>{store.cartItems === undefined ? (<></>) : store.cartItems.reduce((total, item) => total += item.quantity, 0)}</span>
              </Box>

            </Box>
          </Box>
          {auth.loggedIn() ? (
            <>

              {/* <ProfileNavIcons /> */}
            </>
          ) : (
            <Box sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: '100%'
            }}>
              <Signup></Signup>
              <LoginForm></LoginForm>
              <Link to={"/cart"}>
                <CgShoppingCart fontSize="40px" />
              </Link>
            </Box>
          )}


        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header

import ProfileNavIcons from './ProfileNavIcons'
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search'
import { AppBar as MuiAppBar, Toolbar, Button, Typography, Box, Slide, InputBase } from '@mui/material'
import store, { RootState } from '../../utils/store';
import LoggedOutButtons from "../Buttons/LoggedOutButtons";
import NavItem from './NavItem';
import { LinkBase as Link } from '../LinkBase';
import React from 'react';
import { useSelector } from 'react-redux';



const Header = () => {
  const {
    user: {
      loggedIn
    }
  } = useSelector((state: RootState) => state);


  return (
    <></>
  )
}

export default Header

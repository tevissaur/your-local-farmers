import ProfileNavIcons from './ProfileNavIcons'
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search'
import { AppBar as MuiAppBar, Toolbar, Button, Typography, Box, Slide, InputBase } from '@mui/material'
import store from '../../utils/store';
import LoggedOutButtons from "../Buttons/LoggedOutButtons";
import NavItem from './NavItem';
import { LinkBase as Link } from '../LinkBase';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '25px',
  border: '1px solid black',
  boxShadow: '2px 2px 0 black',
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.05),
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
  height: '120px',
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
  const {
    profile: {
      loggedIn
    }
  } = useSelector((state: RootState) => state);


  return (
    <AppBar sx={{
      borderBottom: '1px solid black',
      backgroundColor: 'whitesmoke'
    }}>
      <Box
        component='nav'
        sx={{
          padding: '5px 10px',
          width: '75%',
          maxHeight: '50px',
          margin: 'auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'black'
        }}>
        <Link
          to='/home'
          variant="h1"
          sx={{
            fontSize: '26px',
            marginX: 3
          }}>
          Local Farmers
        </Link>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            fullWidth
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>

        {loggedIn ? (
          <ProfileNavIcons />
        ) : (
          <LoggedOutButtons />
        )}


      </Box>
      <Box component='nav' sx={{
        padding: '5px 10px',
        width: '65%',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <NavItem text='Home' pageUrl='home' />
        <NavItem text='Local Farms' pageUrl='browse-farms' />
        <NavItem text='My Farm' pageUrl='myfarm' />
        <NavItem text='Resources' pageUrl='resources' />
        <NavItem text='About Us' pageUrl='about-us' />
      </Box>
    </AppBar>
  )
}

export default Header

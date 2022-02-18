import React from "react"
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import auth from '../utils/auth'
import DrawerHeader from "./DrawerHeader"
import NavItem from "./NavItem";
import { GiFarmTractor, GiBarn, GiFarmer } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import HomeMax from '@mui/icons-material/HomeMax'
import store from "../utils/store"
import { setWorldAction } from "../utils/actions"
import InputBase from '@mui/material/InputBase';
import styled from '@mui/material/styles/styled'


const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(9)} + 1px)`,
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);


const SideNavListItem = styled(ListItem)({
    ':hover': {
        backgroundColor: 'black'
    }
})

const SideNavBar = ({ loading }) => {
    const { ui: { drawerOpen } } = store.getState()






    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer variant="permanent" open={drawerOpen}>
                <DrawerHeader>
                </DrawerHeader>
                <Divider />
                <NavItem pageUrl="/" icon={GiBarn} title="Home" active description="Home" />
                <NavItem pageUrl="/farms" icon={GiFarmer} title="Find A Local Farmer Near You" />

                {auth.loggedIn() ? (
                    <>
                        <NavItem pageUrl="/myfarm" icon={GiFarmTractor} title="Your Farm" />
                        <NavItem pageUrl="/profile" icon={CgProfile} title="Profile" />
                    </>
                ) : (
                    <>

                    </>
                )}
            </Drawer>

        </Box >
    )
}

export default SideNavBar
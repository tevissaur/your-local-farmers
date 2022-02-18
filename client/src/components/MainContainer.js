import styled from '@mui/material/styles/styled';


const drawerWidth = 240;


const MainContainer = styled('main', { 
    shouldForwardProp: (prop) => prop !== 'open'
 })(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(2),
    marginTop: '64px',
    zIndex: '0',
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `calc(${theme.spacing(9)} + 1px)`,
    ...(open && {
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.enteringScreen,
        })
    }),
}),
);

export default MainContainer
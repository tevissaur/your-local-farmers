import styled from '@mui/material/styles/styled';


const drawerWidth = 240;


const MainContainer = styled('main', {
    shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flexGrow: 1,
    zIndex: '0',
    minHeight: 'calc(100vh - 100px)'
}),
);

export default MainContainer
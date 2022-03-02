import styled from '@mui/material/styles/styled';


const MainContainer = styled('main')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flexGrow: 1,
    zIndex: '-1',
    minHeight: 'calc(100vh - 100px)', 
    backgroundColor: theme.palette.common.white
}),
);

export default MainContainer
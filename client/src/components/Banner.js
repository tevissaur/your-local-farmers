import Box from "@mui/material/Box"
import styled from '@mui/material/styles/styled';

const Banner = styled(Box)(({ theme }) => ({
    position: 'absolute',
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    height: '160px',
    top: '0',
    zIndex: 0
}))

export default Banner
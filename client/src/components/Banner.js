import Box from "@mui/material/Box"
import styled from '@mui/material/styles/styled';
import { useEffect } from "react";
import store from "../utils/store";


const BannerStyled = styled(Box)(({ theme }) => ({
    position: 'absolute',
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    height: '160px',
    top: '0',
    zIndex: 0
}))


const Banner = () => {

    return (
    <BannerStyled />
    )
}


export default Banner
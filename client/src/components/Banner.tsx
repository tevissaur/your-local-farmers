import Box from "@mui/material/Box"
import styled from '@mui/material/styles/styled';
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import store, { RootState } from "../utils/store";


const BannerStyled = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    height: '160px',
    zIndex: 0,
    marginTop: '119px'
}))


const Banner = () => {

    const { user: { loggedIn } } = useSelector((state: RootState) => state);

    return (
    <BannerStyled>
    </BannerStyled>
    )
}


export default Banner
import Box from "@mui/material/Box"
import styled from 'styled-components'
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import store, { RootState } from "../utils/store";
import { Container } from "react-bootstrap";


const BannerStyled = styled(Container)``;


const Banner = () => {

    const { user: { loggedIn } } = useSelector((state: RootState) => state);

    return (
    <BannerStyled>
    </BannerStyled>
    )
}


export default Banner
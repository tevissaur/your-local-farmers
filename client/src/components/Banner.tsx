import Box from "@mui/material/Box"
import styled from 'styled-components'
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import store, { RootState } from "../utils/store";
import { Container } from "react-bootstrap";
import { useAppSelector } from "../hooks";


const BannerStyled = styled(Container)`
    background-image: url("https://img.freepik.com/free-photo/beautiful-tree-middle-field-covered-with-grass-with-tree-line-background_181624-29267.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 200px;
    
`;


const Banner = () => {

    const { user: { loggedIn } } = useAppSelector(state => state);


    return (
    <BannerStyled fluid>
    </BannerStyled>
    )
}


export default Banner
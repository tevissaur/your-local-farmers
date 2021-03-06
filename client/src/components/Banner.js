import Box from "@mui/material/Box"
import styled from '@mui/material/styles/styled';
import { useEffect } from "react";
import store from "../utils/store";


const BannerStyled = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    height: '160px',
    zIndex: 0,
    marginTop: '119px'
}))


const Banner = () => {

    const { profile: { loggedIn } } = store.getState()

    return (
    <BannerStyled>
    </BannerStyled>
    )
}


export default Banner
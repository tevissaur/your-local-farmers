import React, { useEffect, useState } from 'react'
import AuthService from '../../services/authentication.service'
import { GET_ME } from '../../utils/queries'
import { useLazyQuery } from '@apollo/client'
import Box from '@mui/material/Box'
import Banner from '../../components/Banner'
import store, { RootState } from '../../utils/store'
import { setIsFarmer } from '../../utils/actions'
import LoginForm from '../../components/AuthForms/LoginForm'
import Signup from '../../components/AuthForms/SignupForm'
import { useSelector } from 'react-redux'

function MyFarm() {
    const { user: { loggedIn } } = useSelector((state: RootState) => state);

    return (
        <Box>
            
        </Box>
    )
}

export default MyFarm;

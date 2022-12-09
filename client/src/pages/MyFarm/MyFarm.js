import React, { useEffect, useState } from 'react'
import MyFarmForm from './components/MyFarmForm'
import MyFarmDash from './components/MyFarmDash'
import AuthService from '../../services/authentication.service'
import { GET_ME } from '../../utils/queries'
import { useLazyQuery } from '@apollo/client'
import Box from '@mui/material/Box'
import Banner from '../../components/Banner'
import store from '../../utils/store'
import { setIsFarmer } from '../../utils/actions'
import LoginForm from '../../components/AuthForms/LoginForm'
import Signup from '../../components/AuthForms/SignupForm'

function MyFarm() {
    const { profile: { isFarmer, loggedIn } } = useSelector((state: RootState) => state);

    return (
        <Box>
            {loggedIn && isFarmer ? (
                <MyFarmDash />
            ) : (
                loggedIn && !isFarmer ? (
                    <MyFarmForm />
                ) : (
                    <>
                        <LoginForm />
                        <Signup />
                    </>
                )

            )}
        </Box>
    )
}

export default MyFarm;

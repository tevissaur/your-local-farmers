import React, { useEffect, useState } from 'react'
import MyFarmForm from './components/MyFarmForm'
import MyFarmDash from './components/MyFarmDash'
import Auth from '../../utils/auth'
import { GET_ME } from '../../utils/queries'
import { useLazyQuery } from '@apollo/client'
import Box from '@mui/material/Box'
import Banner from '../../components/Banner'
import store from '../../utils/store'
import { setIsFarmer } from '../../utils/actions'
import LoginForm from '../../components/AuthForms/LoginForm'
import Signup from '../../components/AuthForms/SignupForm'

function MyFarm() {
    const { profile: { isFarmer, loggedIn } } = store.getState()


    const [getMe, { data, error, loading }] = useLazyQuery(GET_ME)

    useEffect(() => {
        if (loggedIn) {

            let { data: { _id } } = Auth.getProfile()
            getMe({
                variables: {
                    id: _id
                }
            })

        }

    }, [])

    useEffect(() => {
        loading ? console.log(loading) : store.dispatch(setIsFarmer(data?.me?.isFarmer))
    }, [isFarmer, data, loading])

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

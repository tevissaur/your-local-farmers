import React, { useEffect, useState } from 'react'
import MyFarmForm from '../components/MyFarm/MyFarmForm'
import MyFarmDash from '../components/MyFarm/MyFarmDash'
import Auth from '../utils/auth'
import { GET_ME } from '../utils/queries'
import { useLazyQuery } from '@apollo/client'
import Box from '@mui/material/Box'
import Banner from '../components/Banner'
import store from '../utils/store'
import { setIsFarmer } from '../utils/actions'
import LoginForm from '../components/NavComponents/LoginForm'
import Signup from '../components/NavComponents/Signup'

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
        if (!loading) {
            if (data !== undefined) {
                store.dispatch(setIsFarmer(data?.me?.isFarmer))
            }
        }

    }, [isFarmer, data, loading])

    return (
        <Box position='relative'>
            <Banner />
            <Box sx={{
                marginTop: '180px'
            }}>
                    {isFarmer ? (
                        <MyFarmDash />
                    ) : (
                        loggedIn ? (<MyFarmForm />) : (<>
                            <LoginForm/>
                            <Signup/>
                        </>)

                    )}
            </Box>
        </Box>
    )
}

export default MyFarm;

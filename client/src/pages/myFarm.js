import React, { useEffect, useState } from 'react'
import MyFarmForm from '../components/MyFarm/MyFarmForm'
import MyFarmDash from '../components/MyFarm/MyFarmDash'
import auth from '../utils/auth'
import { GET_ME } from '../utils/queries'
import { useQuery } from '@apollo/client'
import { Box } from '@mui/material'
import Banner from '../components/Banner'
import store from '../utils/store'
import { setIsFarmer } from '../utils/actions'

function MyFarm() {
    let userDetails = auth.getProfile()
    const { profile: { isFarmer } } = store.getState()

    const { data, error, loading } = useQuery(GET_ME, {
        variables: {
            id: userDetails.data._id
        }
    })


    useEffect(() => {
        loading ? console.log("Bro") : store.dispatch(setIsFarmer(data?.me?.isFarmer))
        console.log(isFarmer)

    }, [isFarmer, data, loading])

    return (
        <Box position='relative'>
            <Banner />
            <Box sx={{
                marginTop: '180px'
            }}>
                <Box sx={{ 
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    flexWrap: 'wrap'
                 }}>
                    {isFarmer ? (
                        <MyFarmDash userId={userDetails.data._id} />
                    ) : (
                        <MyFarmForm />
                    )}
                </Box>
            </Box>
        </Box>
    )
}

export default MyFarm;

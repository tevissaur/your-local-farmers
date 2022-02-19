import React, { useEffect, useState } from 'react'
import MyFarmForm from '../components/MyFarmForm'
import MyFarmDash from '../components/MyFarmDash'
import auth from '../utils/auth'
import { GET_ME } from '../utils/queries'
import { useQuery } from '@apollo/client'
import { Box } from '@mui/material'

function MyFarm() {
    let userDetails = auth.getProfile()
    const [userData, setUserData] = useState({})

    const { data, error, loading } = useQuery(GET_ME, {
        variables: {
            id: userDetails.data._id
        }
    })

    const [isFarmer, setIsFarmer] = useState(userDetails.data.isFarmer)


    useEffect(() => {
        loading? console.log("Bro") : setIsFarmer(data.me?.isFarmer)


    }, [isFarmer, data,  loading])

    return (
        <Box>
            <Box m={4} flex='1'>
        
                <Box maxW='100%'>
                    <Box justifyContent='space-evenly' flexWrap='wrap'>
                        {isFarmer ? (

                            <MyFarmDash userId={userDetails.data._id} />
                        ) : (
                            <MyFarmForm setIsFarmer={setIsFarmer} />
                        )}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default MyFarm;

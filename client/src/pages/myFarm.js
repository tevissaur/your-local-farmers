import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import SideNavBar from '../components/SideNavBar'
import MyFarmForm from '../components/MyFarmForm'
import MyFarmDash from '../components/MyFarmDash'
import auth from '../utils/auth'
import { GET_ME } from '../utils/queries'
import { useQuery } from '@apollo/client'

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
        <Flex>
            <Box m={4} flex='1'>
        
                <Container maxW='100%'>
                    <Flex justifyContent='space-evenly' flexWrap='wrap'>
                        {isFarmer ? (

                            <MyFarmDash userId={userDetails.data._id} />
                        ) : (
                            <MyFarmForm setIsFarmer={setIsFarmer} />
                        )}
                    </Flex>
                </Container>
            </Box>
        </Flex>
    )
}

export default MyFarm;

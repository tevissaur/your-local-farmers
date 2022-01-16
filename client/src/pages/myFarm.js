import React, { useEffect, useState } from 'react'
import { Container, Flex, Box } from '@chakra-ui/react'
import Header from '../components/Header'
import SideNavBar from '../components/SideNavBar'
import MyFarmForm from '../components/MyFarmForm'
import MyFarmDash from '../components/MyFarmDash'
import auth from '../utils/auth'
import { GET_ME, GET_MY_FARM } from '../utils/queries'
import { useQuery } from '@apollo/client'

function MyFarm() {
    let userDetails = auth.getProfile()
    const [userData, setUserData] = useState({})

    const { data, error, loading } = useQuery(GET_ME, {
        variables: {
            id: userDetails.data._id
        }
    })
    const {data: farmData, loading: farmLoading, error: farmError} = useQuery(GET_MY_FARM, {
        variables: {
            id: userDetails.data._id
        }
    })
    console.log()
    const [isFarmer, setIsFarmer] = useState(userDetails.data.isFarmer)


    useEffect(() => {
        loading? setIsFarmer():setIsFarmer(data.me.isFarmer)
        
        
    }, [isFarmer, loading, data, data?.me?.isFarmer])
    

    return (
        <Flex>
            <SideNavBar />
            <Box m={4} flex='1'>
                <Header />
                <Container maxW='100%'>
                    <Flex justifyContent='space-evenly' flexWrap='wrap'>
                        {isFarmer ? (

                            <MyFarmDash farmData={farmData} />
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

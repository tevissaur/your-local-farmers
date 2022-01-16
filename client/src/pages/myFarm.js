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
    const [isLoggedIn, setIsLoggedIn] = useState(auth.loggedIn())
    let userDetails = auth.getProfile()
    const [userData, setUserData] = useState({})
    
    const {data, error, loading} = useQuery(GET_ME, {
        variables: { id: userDetails.data._id }
    }
    ) 
    console.log(data)
    const [isFarmer, setIsFarmer] = useState()
    

    useEffect(() => {
        loading? setIsFarmer():setIsFarmer(data.me.isFarmer)
        
        
    }, [isFarmer, loading, data])
    

    return (
        <Flex>
        <SideNavBar />
        <Box m={4} flex='1'>
      
            <Container maxW='100%'>
                <Flex justifyContent='space-evenly' flexWrap='wrap'>
                    {isFarmer? (<MyFarmDash userData={data}/>): (<MyFarmForm setIsFarmer={setIsFarmer} />)}
                </Flex>
            </Container>
        </Box>
    </Flex>
    )
}

export default MyFarm;

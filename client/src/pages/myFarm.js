import React from 'react'
import { Container, Flex, Box } from '@chakra-ui/react'
import Header from '../components/Header'
import SideNavBar from '../components/SideNavBar'
import MyFarmForm from '../components/MyFarmForm'
import MyFarmDash from '../components/MyFarmDash'
import auth from '../utils/auth'

function MyFarm() {
    let userDetails = auth.getProfile()
    let myFarmDisplay

    console.log(userDetails)

    
    if (userDetails.data.isFarmer === true){
        myFarmDisplay = <MyFarmDash />
    }
    else{
        myFarmDisplay = <MyFarmForm userId={userDetails.data._id} />
    }
    return (
        <Flex>
        <SideNavBar />
        <Box m={4} flex='1'>
        <Header/>
            <Container maxW='100%'>
                <Flex justifyContent='space-evenly' flexWrap='wrap'>
                    {myFarmDisplay}
                </Flex>
            </Container>
        </Box>
    </Flex>
    )
}

export default MyFarm;

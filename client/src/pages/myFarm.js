import React, {useEffect, useState} from 'react'
import { Container, Flex, Box } from '@chakra-ui/react'
import Header from '../components/Header'
import SideNavBar from '../components/SideNavBar'
import MyFarmForm from '../components/MyFarmForm'
import MyFarmDash from '../components/MyFarmDash'
import auth from '../utils/auth'
import { GET_ME } from '../utils/queries'
import { useQuery } from '@apollo/client'

function MyFarm() {
    let userDetails = auth.getProfile()
    let myFarmDisplay
    const [userData, setUserData] = useState({})
    const { data, loading, error } = useQuery(GET_ME, {
        variables: { id: userDetails.data._id }
    })
    console.log(data)
    const [isFarmer, setIsFarmer] = useState(userDetails.data.isFarmer)
    

    useEffect(() => {
        data == null? console.log("Bro"):setIsFarmer(data.me.isFarmer)
        
        
    }, [isFarmer])
    
    

    return (
        <Flex>
        <SideNavBar />
        <Box m={4} flex='1'>
        <Header/>
            <Container maxW='100%'>
                <Flex justifyContent='space-evenly' flexWrap='wrap'>
                    {isFarmer? (<MyFarmDash/>): (<MyFarmForm setIsFarmer={setIsFarmer} />)}
                </Flex>
            </Container>
        </Box>
    </Flex>
    )
}

export default MyFarm;

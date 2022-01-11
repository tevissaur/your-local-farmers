import React from 'react'
import { Container, Flex, Box } from '@chakra-ui/react'
import Header from '../components/Header'
import SideNavBar from '../components/SideNavBar'
import FarmCard from '../components/FarmCard'

function FarmsPage() {
    return (
    <>
    <Flex>
        <SideNavBar />
        <Box m={4} flex='1'>
        <Header/>
            <Container maxW='100%'>
                <Flex justifyContent='space-evenly' flexWrap='wrap'>
                    <FarmCard />
                </Flex>
            </Container>
        </Box>
    </Flex>
    
    </>
    )
}

export default FarmsPage

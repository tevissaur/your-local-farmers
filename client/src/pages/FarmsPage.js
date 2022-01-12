import React from 'react'
import { useQuery } from '@apollo/client'
import {QUERY_FARM} from '../utils/queries';
import { Container, Flex, Box } from '@chakra-ui/react'
import Header from '../components/Header'
import SideNavBar from '../components/SideNavBar'
import FarmCard from '../components/FarmCard'

function FarmsPage() {
    const {loading, data, error} = useQuery(QUERY_FARM)
    const farmList = data ? data.farms : []
    console.log(farmList)
    // console.log(farmList[0].reviews[0].rating)
    // const reviewAverage = farmList.forEach(farm => {
    //     console.log(farm.review.rating.length)
    // })
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

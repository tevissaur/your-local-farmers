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
    console.log(farmList.length)
    // console.log(farmList[0].reviews[0].rating)
    
    return (
    <>
    <Flex>
        <SideNavBar />
        <Box m={4} flex='1'>
        <Header/>
            <Container maxW='100%'>
                <Flex justifyContent='space-evenly' flexWrap='wrap'>
                    {farmList.map(farm => {
                        return <FarmCard key={farm._id} title={farm.name} numericReview={farm.reviews.length} categories={farm.products.map(product => {
                            return product.categories[0].name
                            // return product.categories
                            
                        })}/>
                    })}
                </Flex>
            </Container>
        </Box>
    </Flex>
    
    </>
    )
}

export default FarmsPage

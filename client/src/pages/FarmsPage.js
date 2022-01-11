import React from 'react'
import { useQuery } from '@apollo/client'
import {QUERY_FARM} from '../utils/queries';
import { Container, Flex, Box, Checkbox, CheckboxGroup } from '@chakra-ui/react'
import Header from '../components/Header'
import SideNavBar from '../components/SideNavBar'
import FarmCard from '../components/FarmCard'
import { CloseIcon } from '@chakra-ui/icons'

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
        
    <Flex justifyContent='center'>
        <Container maxW='container.xl' m={4} backgroundColor='white' border='black 1px solid'>
            <CheckboxGroup colorScheme='green' defaultValue={['baked', 'dairy', 'fruits', 'flowers', 'beverages', 'seasonal' ]}>
                <Flex justifyContent='space-evenly' alignItems='center' flexWrap='wrap'>
                <Checkbox fontWeight='600'value="baked">Baked Goods</Checkbox>
                <Checkbox fontWeight='600' value="dairy">Dairy, Meat & Eggs</Checkbox>
                <Checkbox fontWeight='600' value="fruits">Fruits & Vegetables</Checkbox>
                <Checkbox fontWeight='600' value="flowers">Flowers & Plants</Checkbox>
                <Checkbox fontWeight='600' value="beverages">Beverages</Checkbox>
                <Checkbox fontWeight='600' value="seasonal">Seasonal Products</Checkbox>
                </Flex>
            </CheckboxGroup>
        </Container>
    </Flex>

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

import React from 'react'
import {Flex, Container, Text, Heading, Image} from '@chakra-ui/react'
import asters from '../assets/flowersPlants/asters.jpg'
function ProductCardCart() {
    return (
    <Container maxW='100%'>
        <Flex >
            <Text>Product Name</Text>
            <Image boxSize='100px' src={ asters }></Image>
        </Flex>
    </Container>
    )
}

export default ProductCardCart

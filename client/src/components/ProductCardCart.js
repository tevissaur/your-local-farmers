import React from 'react'
import {Flex, Container, Text, Heading, Image, Box} from '@chakra-ui/react'
import asters from '../assets/flowersPlants/asters.jpg'
import { ImCross } from 'react-icons/im'
function ProductCardCart({image, name, quantity, price}) {
    let total = price * quantity
    
    return (
        <>
            <Container maxW='100%' backgroundColor='beige' mt={5}>
                <Flex  flexDirection='row'justifyContent='space-evenly' alignItems='center' flexWrap='wrap'>
                    <Image  me={5} src={asters} boxSize='100px'></Image>
                    <Box minWidth='16.66%'>{name}</Box>
                    <Box minWidth='16.66%'>${price}</Box>
                    <Box minWidth='16.66%'>x{quantity}</Box>
                    <Box minWidth='16.66%'>${total}</Box>
                    <ImCross color='red' minWidth='16.66%'/>

                </Flex>
            </Container>
        </>
    )
}

export default ProductCardCart

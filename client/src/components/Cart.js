import React from 'react'
import Header from './Header'
import SideNavBar from './SideNavBar'
import { Flex, Box, Container, Heading } from '@chakra-ui/react'
import ProductCardCart from './ProductCardCart'

function Cart() {
    return (
        <>
        <Flex>
            <SideNavBar />
            <Box m={4} flex='1'>
                <Header />
        <Container maxW='container.lg'>
            <Flex justifyContent='center' alignItems='center' mt={6} fontWeight='600' backgroundColor='lightyellow' flexDir='column'>
              <Heading>Your Cart</Heading>
              <ProductCardCart />
            </Flex>
        </Container>
            </Box>
        </Flex>
        </>
    )
}

export default Cart

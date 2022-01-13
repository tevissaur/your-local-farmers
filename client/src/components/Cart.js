import React from 'react'
import Header from './Header'
import SideNavBar from './SideNavBar'
import { Flex, Box, Container, Heading, Text, Button, Center } from '@chakra-ui/react'
import ProductCardCart from './ProductCardCart'

function Cart({ }) {
    return (
        <>
        <Flex>
            <SideNavBar />
            <Box m={4} flex='1'>
                <Header />
        <Container maxW='container.md'>
            <Flex justifyContent='center' alignItems='center' mt={6} fontWeight='600' backgroundColor='lightyellow' flexDir='column'>
              <Heading>Your Basket</Heading>
              <Container maxW='100%'>
        <Flex flexDir='column'>
        </Flex>
            <ProductCardCart name='Flowers' quantity={2} price={2}  />
            
        <Flex mt={3}justifyContent='flex-end'>
            <Box>Total:</Box>
            <Box ms={2}>$200</Box>
        </Flex>
        <Center>
            <Button backgroundColor='primary.lightGreen'mb={3}>Checkout</Button>

        </Center>

    </Container>
            </Flex>
        </Container>
            </Box>
        </Flex>
        </>
    )
}

export default Cart

import React from 'react'
import {Flex, Container, Text, Heading, Image, Box} from '@chakra-ui/react'
import asters from '../assets/flowersPlants/asters.jpg'
import { ImCross } from 'react-icons/im'
function ProductCardCart({image, name, quantity, price}) {
    let total = price * quantity
    
    return (
        <>
            <Container maxW='100%' mt={5}>
                <Flex 
                    flexDirection='row'
                    justifyContent='space-evenly' 
                    alignItems='center' 
                    flexWrap='wrap' 
                    alignItems='center'
                    maxWidth='100%'
                    border='lightgrey 2px solid'
                    borderRadius='25px'
                    boxShadow='2px 2px grey'
                    backgroundColor='white'
                    >

                <Flex 
                    flexDir='column' 
                    justifyContent='center' 
                    alignItems='center' 
                >
                <Box 
                    me={2} 
                    fontSize='25px' 
                    >{name}
                </Box>
                    <Image  
                        ms={2} 
                        me={5} 
                        src={asters} 
                        boxSize='60px' 
                        mb={2} 
                    >
                    </Image>
                </Flex>

                <Flex 
                    maxw='100%' 
                    p={6} 
                    justifyContent='space-between' 
                    fontSize='25px'
                >
                    <Box>${price}</Box>
                    <Box>x{quantity}</Box>
                </Flex>

                    <Flex alignItems='center'>
                        <Box fontSize='25px'>${total}</Box>
                    </Flex>  
                <Flex>
                        <ImCross color='red' fontSize='25px' />
                </Flex>
                </Flex>
            </Container>
        </>
    )
}

export default ProductCardCart

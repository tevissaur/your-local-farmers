import React from 'react'
import {Flex, Container, Text, Heading, Image, Box, Button} from '@chakra-ui/react'
import asters from '../assets/flowersPlants/asters.jpg'
import { ImCross } from 'react-icons/im';
import { imageSeeds } from "../imageSeeds";
import AddProductBtn from './AddProductBtn';
import RemoveProductBtn from './RemoveProductBtn';
function ProductCardCart({item, cartItems, setCartItems}) {
    const handleAddToCart = (product)=>{
  
        console.log('test')
        const productExist = cartItems.find((item) => item._id === product._id)
        if(productExist){
          setCartItems(cartItems.map((item) => item._id === product._id ? {...productExist, quantity: productExist.quantity +1} : item))
        } else {
          setCartItems([...cartItems,{...product, quantity: 1} ])
        }
      }

      const handleRemoveProduct =(product) =>{
        const productExist = cartItems.find((item) => item._id === product._id)
        if(productExist === 0){
          setCartItems(cartItems.filter((item) => item._id !== product._id ))
        } else {
          setCartItems(
            cartItems.map((item) => item._id === product._id ? {...productExist, quantity: productExist.quantity -1 } : item)
          )
          
        }
      
      }
    console.log(item)
    const cardArr = imageSeeds.map((card) => card);
  const foundProductImage = cardArr
    .filter((arr) => arr.name === item.name)
    .map((card) => card.img);
 
    
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
                    >{item.name}
                </Box>
                    <Image  
                        ms={2} 
                        me={5} 
                        src={foundProductImage} 
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
                    
                    ${item.price} {item.quantity}
                    <Button onClick={() => handleAddToCart(item)}>+</Button>
                   <Button onClick={() => handleRemoveProduct(item)}>-</Button>
                    
                   
                </Flex>

                    <Flex alignItems='center'>
                        <Box fontSize='25px'>$</Box>
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

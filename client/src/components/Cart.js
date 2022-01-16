import React from "react";
import Header from "./Header";
import SideNavBar from "./SideNavBar";

import {
  Flex,
  Box,
  Container,
  Heading,
  Text,
  Button,
  Center,
} from "@chakra-ui/react";
import ProductCardCart from "./ProductCardCart";


function Cart({cartItems, setCartItems}) {

   const totalPrice = cartItems.reduce((price,item) => price+ item.quantity*item.price,0)
  return (
    <>
      <Flex>
        <SideNavBar />
        <Box m={4} flex="1">
     
          <Container maxW="container.md">
            <Flex
              justifyContent="center"
              alignItems="center"
              mt={5}
              fontWeight="600"
              backgroundColor="white"
              flexDir="column"
              border="grey 2px solid"
              borderRadius="25px"
              boxShadow="1px 1px black"
            >
              <Heading>Your Cart</Heading>
              
              <Container maxW="100%">
                <Flex flexDir="column"></Flex>
                {cartItems.length === 0 && 
              (<Text>No items are added</Text>)}

              {cartItems.map((item,idx) => (
                  
                  <ProductCardCart key={idx} item={item} cartItems={cartItems} setCartItems={setCartItems} />
                   
                  
                   
                   
                 
              ))}
          
                 
                

                <Flex
                  mt={3}
                  mb={2}
                  justifyContent="center"
                  alignItems="center"
                  flexDir="column"
                >
                  <Flex>
                    <Text fontSize="35px">Total:</Text>
                    <Text ms={2} fontSize="35px">
                      ${totalPrice}
                    </Text>
                  </Flex>
                  <Button
                    fontSize="25px"
                    border="1px solid grey"
                    boxShadow="1px 1px black"
                    backgroundColor="primary.lightGreen"
                  >
                    Checkout
                  </Button>
                </Flex>
                <Center></Center>
              </Container>
            </Flex>
            
          </Container>
        </Box>
      </Flex>
    </>
  );
}

export default Cart;

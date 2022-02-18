import React from "react";
import CheckOutBtn from "./CheckOutBtn";
import ProductCardCart from "./ProductCardCart";
import store from "../utils/store";
import { setCartItems } from "../utils/actions";
import { Box, Typography } from "@mui/material";


function Cart() {
  const { cart: { cartItems } } = store.getState()

  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0)
  return (
    <>
      <Box>
        <Box m={4} flex="1">

          <Box maxW="container.md">
            <Box
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
              <Typography>Your Cart</Typography>

              <Box maxW="100%">
                <Box flexDir="column"></Box>
                {cartItems.length === 0 &&
                  (<Typography>No items are added</Typography>)}

                {cartItems.map((item, idx) => (

                  <ProductCardCart key={idx} item={item} cartItems={cartItems} setCartItems={setCartItems} />





                ))}




                <Box
                  mt={3}
                  mb={2}
                  justifyContent="center"
                  alignItems="center"
                  flexDir="column"
                >
                  <Box>
                    <Typography fontSize="35px">Total:</Typography>
                    <Typography ms={2} fontSize="35px">
                      ${totalPrice}
                    </Typography>
                  </Box>
                  {cartItems.length === 0 ? "" : <CheckOutBtn cartItems={cartItems} totalPrice={totalPrice} />}
                </Box>
              </Box>
            </Box>

          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Cart;

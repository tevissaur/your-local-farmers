import React, { useEffect } from "react";
import CheckOutBtn from "../Buttons/CheckOutBtn";
import ProductCardCart from "./ProductCardCart";
import store from "../../utils/store";
import { setCartItems } from "../../utils/actions";
import { Box, Typography } from "@mui/material";
import { setCartArray } from "../../resources/cart/cart.actions";
import UtilsService from "../../services/utils.service";


function Cart() {
  const { cart: { items, cart } } = store.getState()
  
  
  useEffect(() => {
    store.dispatch(setCartArray(UtilsService.cartItemsToArray(items)))
  }, [])

  useEffect(() => {
    console.log(items, cart)
  }, [items, cart])

  // const totalPrice = items.reduce((price, item) => price + item.quantity * item.price, 0)
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
                {cart.length === 0 &&
                  (<Typography>No items are added</Typography>)}

                {/* { 
                  for (let item in items) {
                    <ProductCardCart key={idx} item={item} cartItems={items} setCartItems={setCartItems} />
                  }
                } */}

                {cart.map((item, itx) => <ProductCardCart key={itx} item={item} />)}


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
                      ${0}
                    </Typography>
                  </Box>
                  {items.length === 0 ? "" : <CheckOutBtn cartItems={items} totalPrice={0} />}
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

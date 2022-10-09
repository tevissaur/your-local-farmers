import React, { useEffect } from "react";
import CheckOutBtn from "../Buttons/CheckOutBtn";
import ProductCardCart from "./ProductCardCart";
import store from "../../utils/store";
import { Box, Typography } from "@mui/material";



function Cart() {
  const { cart: { items }, profile: { loggedIn } } = store.getState()

  useEffect(() => {
    
    console.log()
  }, [])
  useEffect(() => {

    console.log(items)
  }, [items])

  // const totalPrice = items.reduce((price, item) => price + item.quantity * item.price, 0)
  return (
    <>
      <Box
        justifyContent="center"
        alignItems="center"
        fontWeight="600"
        backgroundColor="white"
        border="grey 2px solid"
        borderRadius="25px"
        boxShadow="1px 1px black"
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          margin: '160px 20px'
        }}
      >
        <Typography>Your Cart</Typography>

        <Box maxW="100%">
          <Box flexDir="column"></Box>
          {loggedIn ? (items.length === 0 ? (
            <Typography>
              No items are added
            </Typography>
          ) : (
            <>
              {items.map((item, itx) => <ProductCardCart key={itx} item={item} />)}
            </>
          )) : (<></>)}




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
    </>
  );
}

export default Cart;

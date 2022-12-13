import React, { useEffect } from "react";
import CheckOutBtn from "../Buttons/CheckOutBtn";
import store, { RootState } from "../../utils/store";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { ICartProduct } from "../../interfaces/ICart";



function Cart() {
  const { cart: { products }, user: { loggedIn } } = useSelector((state: RootState) => state);

  useEffect(() => {
    
    console.log()
  }, [])
  
  useEffect(() => {

    console.log(products)
  }, [products])

  // const totalPrice = items.reduce((price, item) => price + item.quantity * item.price, 0)
  return (
    <>
      <Box
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          margin: '160px 20px'
        }}
      >
        <Typography> Your Cart </Typography>

        <Box>
          <Box></Box>
          {loggedIn ? (products.length === 0 ? (
            <Typography>
              No items are added
            </Typography>
          ) : (
            <>

            </>
          )) : (<></>)}




          <Box>
            <Box>
              <Typography fontSize="35px">Total:</Typography>
              <Typography>
                ${0}
              </Typography>
            </Box>
            {products.length === 0 ? "" : <CheckOutBtn />}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Cart;

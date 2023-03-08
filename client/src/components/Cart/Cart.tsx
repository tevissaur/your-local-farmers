import React, { useEffect } from "react";
import CheckOutBtn from "../Buttons/CheckOutBtn";
import store, { RootState } from "../../utils/store";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { ICartProduct } from "../../interfaces/ICart";
import { useAppSelector } from "../../hooks";



function Cart() {
  const { products, total } = useAppSelector(state => state.cart);

  useEffect(() => {
    console.log(products, total)
  }, [])
  
  useEffect(() => {
    console.log(products)
  }, [products])

  // const totalPrice = items.reduce((price, item) => price + item.quantity * item.price, 0)
  return (
    <>

    </>
  );
}

export default Cart;

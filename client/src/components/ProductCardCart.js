import React from "react";
import asters from "../assets/flowersPlants/asters.jpg";
import { ImCross } from "react-icons/im";
import { imageSeeds } from "../imageSeeds";
import { Box, Typography, Button } from "@mui/material";

function ProductCardCart({ item, cartItems, setCartItems }) {
  const handleAddToCart = (product) => {
    console.log("test");
    const productExist = cartItems.find((item) => item._id === product._id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item._id === product._id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleReduceItem = (product) => {
    const productExist = cartItems.find((item) => item._id === product._id);
   
    if (productExist.quantity === 1) {
      
      setCartItems(cartItems.filter((item) => item._id !== product._id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item._id === product._id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };
  const handleRemoveItem = () => {
    setCartItems(cartItems.filter((el) => el._id !== item._id));
  };


  const cardArr = imageSeeds.map((card) => card);
  const foundProductImage = cardArr
    .filter((arr) => arr.name === item.name)
    .map((card) => card.img);

  return (
    <>
      <Box mt={5}>
        <Box
          flexDirection="row"
      
       
          flexWrap="wrap"
        
          maxWidth="100%"
          border="lightgrey 2px solid"
          borderRadius="25px"
          boxShadow="2px 2px grey"
          backgroundColor="white"
        >
          <Box width="40%" flexDir="column" justifyContent="center" alignItems="flex-start" px="20px" py="10px">
            <Typography me={2} fontSize="25px">
              {item.name}
            </Typography>
            {/* <Image
              ms={2}
              me={5}
              src={foundProductImage}
              boxSize="80px"
              mb={2}
            ></Image> */}
          </Box>

          <Box
          width="30%"
           justifyContent="flex-start"
           justifyContent="space-between"
           alignItems="center"
            fontSize="25px"
          >
            ${item.price}
            <Button onClick={() => handleAddToCart(item)}>+</Button>
            {item.quantity}
            <Button onClick={() => handleReduceItem(item)}>-</Button>
          </Box>

          {/* <Box width ="20%" alignItems="center" justifyContent="center">
            <Box fontSize="25px">${item.price} * {item.quantity}</Box>
          </Box> */}
          <Box alignItems="center"  width ="30%" justifyContent="center">
            <Button onClick={handleRemoveItem}>
              <ImCross color="red" fontSize="25px" />
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ProductCardCart;

import React, { useEffect } from "react";
import { ImCross } from "react-icons/im";
import { imageSeeds } from "../../imageSeeds";
import { Box, Typography, Button } from "@mui/material";

function ProductCardCart({ item }) {

  const handleIncreaseItem = (product) => {

  };

  const handleReduceItem = (product) => {

  };

  const handleRemoveItem = () => {

  };


  const cardArr = imageSeeds.map((card) => card);
  const foundProductImage = cardArr
    .filter((arr) => arr.name === item?.name)
    .map((card) => card.img);

  useEffect(() => {
    console.log(item)
  }, [])

  return (
    <>
      <Box>
        <Box
          flexDirection="row"
          flexWrap="wrap"
          maxWidth="100%"
          border="lightgrey 2px solid"
          borderRadius="25px"
        >
          <Box
            width="40%"
            flexDir="column"
            justifyContent="center"
            alignItems="flex-start"
            px="20px"
            py="10px"
          >
            <Typography
              me={2}
              fontSize="25px"
            >
              {item?.name}
            </Typography>
            {/* <Image
              ms={2}
       `       me={5}
              src={foundProductImage}
              boxSize="80px"
              mb={2}
            ></Image> */}
          </Box>

          <Box
            width="30%"
            justifyContent="flex-start"
            alignItems="center"
            fontSize="25px"
          >
            ${item?.price}
            <Button onClick={() => handleIncreaseItem(item)}> + </Button>
            {item?.quantity.amount} / {item?.quantity.type}
            <Button onClick={() => handleReduceItem(item)}> - </Button>
          </Box>

          {/* <Box width ="20%" alignItems="center" justifyContent="center">
            <Box fontSize="25px">${item.price} * {item.quantity}</Box>
          </Box> */}
          <Box alignItems="center" width="30%" justifyContent="center">
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

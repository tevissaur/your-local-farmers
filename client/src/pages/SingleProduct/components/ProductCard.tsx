import { Link } from "react-router-dom";
import { imageSeeds } from "../../../imageSeeds";


import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Box, Typography } from "@mui/material";
import React, { FC } from "react";
import { FarmProductProps } from "../../SingleFarm/components/FarmProductCard";




const ProductCard: FC<FarmProductProps> = ({ product }) => {

  //finding image matched product from seed
  const cardArr = imageSeeds.map((card) => card);

  const foundProduct = cardArr.filter((arr) => arr.name === product.name);

  const foundProductImage = foundProduct.map((card) => card.img);
  console.log(foundProductImage);

  return (
    <>
      <Box p="10px" flex="50%">
        <Box border="green 2px solid" borderRadius="25px" height="100%">
          <Box>
            <img src={`${foundProductImage}`} style={{ borderRadius: "25px" }} />
            <Link to={`/products/${product._id}`}>
              <Box justifyContent="space-between">
                <Typography
                  fontSize="2xl"
                  px="4px"
                  style={{ fontWeight: "bolder" }}
                >
                  {product.name}
                </Typography>
                <Box alignItems="center" justifyContent="end" padding="4px">
                  <Typography fontSize="2xl">${product.price}</Typography>
                </Box>
              </Box>
            </Link>
            <Box px="10px">
              <Box>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </Box>
              <small>Based on {product.reviews?.length} reviews</small>
            </Box>

            <Box p="10px">
              <Typography>
                Available :{" "}
                <span style={{ fontWeight: "bolder" }}>
                  {product.quantity}{" "}
                </span>
                from{" "}
              </Typography>

              <Link to={`/farm/${product?.farm?.name?.toLowerCase()}`}>
                <Typography fontSize="2xl" color="primary.darkGreen">
                  {product.farm?.name}
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductCard;

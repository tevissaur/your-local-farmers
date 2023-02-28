import { Link } from "react-router-dom";


import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Box, Typography } from "@mui/material";
import React, { FC } from "react";
import { FarmProductProps } from "../../SingleFarm/components/FarmProductCard";




const ProductCard: FC<FarmProductProps> = ({ product }) => {


  return (
    <>
      <Box p="10px" flex="50%">
        <Box border="green 2px solid" borderRadius="25px" height="100%">
          <Box>
            <img src={`https://toppng.com/uploads/preview/clipart-free-seaweed-clipart-draw-food-placeholder-11562968708qhzooxrjly.png`} style={{ borderRadius: "25px" }} />
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
              <div>
                Available :{" "}
                <span style={{ fontWeight: "bolder" }}>
                  {`${product.quantity}`}
                </span>
                from{" "}
              </div>

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

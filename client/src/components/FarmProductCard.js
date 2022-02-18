import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { imageSeeds } from "../imageSeeds";

const FarmProduct = ({ product }) => {
  const cardArr = imageSeeds.map((card) => card);

  const foundProduct = cardArr.filter((arr) => arr.name === product.name);

  const foundProductImage = foundProduct.map((card) => card.img);

  return (
    <Box flex="50%" flexDirection="column" alignItems="center">
      {/* {foundProductImage ? (<></>) : (
        <Image
          boxSize="200px"
          objectFit="cover"
          src={foundProductImage}
          alt="Dan Abramov"
        />)} */}

      <Link to={`/products/${product._id}`}>
        <Box flexDirection="column" alignItems="center">
          <Typography fontSize="2xl">{product.name}</Typography>

          <Typography fontSize="2xl">${product.price}</Typography>
        </Box>
      </Link>

      <Typography>
        Available :{" "}
        <span style={{ fontWeight: "bolder" }}>{product.quantity}</span>
      </Typography>
    </Box>
  );
};

export default FarmProduct;

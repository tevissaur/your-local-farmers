import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Box, Flex, Text, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { imageSeeds } from "../imageSeeds";
import { Image } from "@chakra-ui/react";
import { flexbox } from "@chakra-ui/react";

const FarmProduct = ({ product }) => {
  const cardArr = imageSeeds.map((card) => card);

  const foundProduct = cardArr.filter((arr) => arr.name === product.name);

  const foundProductImage = foundProduct.map((card) => card.img);

  return (
    <Flex flex="50%" flexDirection="column" alignItems="center">
      {foundProductImage ? (<></>) : (
        <Image
          boxSize="200px"
          objectFit="cover"
          src={foundProductImage}
          alt="Dan Abramov"
        />)}

      <Link to={`/products/${product._id}`}>
        <Flex flexDirection="column" alignItems="center">
          <Text fontSize="2xl">{product.name}</Text>

          <Text fontSize="2xl">${product.price}</Text>
        </Flex>
      </Link>

      <Text>
        Available :{" "}
        <span style={{ fontWeight: "bolder" }}>{product.quantity}</span>
      </Text>
    </Flex>
  );
};

export default FarmProduct;

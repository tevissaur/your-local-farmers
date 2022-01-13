import { Link } from "react-router-dom";
import { imageSeeds } from "../imageSeeds";
import customeTheme from "../extendedTheme";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import {
  Button,
  Box,
  Flex,
  Heading,
  Spacer,
  Center,
  Text,
  Container,
  List,
  ListItem,
  OrderedList,
  UnorderedList,
  ListIcon,
  Image,
} from "@chakra-ui/react";
import { CgShoppingCart } from "react-icons/cg";

const ProductCard = ({ product }) => {
  console.log(product);

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
            <img src={foundProductImage} style={{ borderRadius: "25px" }} />
            <Link to={`/products/${product._id}`}>
              <Flex justifyContent="space-between">
                <Text
                  fontSize="2xl"
                  px="4px"
                  px="10px"
                  style={{ fontWeight: "bolder" }}
                >
                  {product.name}
                </Text>
                <Flex alignItems="center" justifyContent="end" padding="4px">
                  <Text fontSize="2xl">${product.price}</Text>
                </Flex>
              </Flex>
            </Link>
            <Box px="10px">
              <Flex>
                < AiFillStar />
                < AiFillStar />
                < AiFillStar />
                < AiFillStar />
              </Flex>
             <small>Based on {product.reviews.length} reviews</small>
            </Box>
            
            <Box p="10px">
              <Text>
                Available :{" "}
                <span style={{ fontWeight: "bolder" }}>
                  {product.quantity}{" "}
                </span>
                from{" "}
              </Text>

              <Link to={`/farm/${product.farm.name.toLowerCase()}`}>
                <Text fontSize="2xl" color="primary.darkGreen">
                  {product.farm.name}
                </Text>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductCard;

import { Link } from "react-router-dom";
import { imageSeeds } from "../imageSeeds";
import customeTheme from "../extendedTheme";
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

const Product = ({ product }) => {
  console.log(product);
  const cardArr = imageSeeds.map((card) => card);

  const foundProductCard = cardArr.filter((arr) => arr.name === product.name);

  const foundProductImage = foundProductCard.map((card) => card.img);
  console.log(foundProductImage);
  return (
    <>
      <Box p="10px" flex="50%">
        <Box border="green 2px solid" borderRadius="25px" height="100%">
          <Box>
            <img
              src={foundProductImage}
              style={{ borderRadius: "25px" }}
            />
            <Link to={`/products/:${product._id}`}>
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

                  <CgShoppingCart fontSize="20px" />
                </Flex>
              </Flex>
            </Link>
            {/* <Box>
            {product.reviews.map((review, idx) => (
              <h1 key={idx}>
                {review.content}-----{review.rating} -----
                {review.author.firstName}
              </h1>
            ))}
          </Box> */}
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

export default Product;

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

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
import { QUERY_PRODUCT, QUERY_PRODUCTS, QUERY_FARM } from "../utils/queries";
import { imageSeeds } from "../imageSeeds";
import ProductCard from "./ProductCard";
import SideNavBar from "./SideNavBar";
import Header from "./Header";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useEffect, useState } from "react";

const Product = () => {
  const { id } = useParams();
  const {
    loading,
    data,
    error,
  } = useQuery(QUERY_PRODUCT, {
    variables: {
      id
    }
  });
  const [foundProduct, setFoundProduct] = useState()
  useEffect(() => {
    console.log(data)
    setFoundProduct(data)
  })

  // console.log(foundProduct);
  // const foundProductWithFarm = {
  //   ...foundProduct, farm
  // }

  // finding image matched product from seed
  // const cardArr = imageSeeds.map((card) => card);
  // const foundProductImage = cardArr
  //   .filter((arr) => arr.name === foundProduct.name)
  //   .map((card) => card.img);
  // console.log(foundProductImage);
  const foundProductImage = ''

  return (
    <>

      {loading ? (
        <>
          <Flex>
            <SideNavBar />
            <Box m={4} flex="1" alignItems="center">
              <Header />
              <Box
                border="green 2px solid"
                alignItems="stretch"
                justifyItems="center"
                backgroundColor="lightyellow"
                padding={5}
                margin={20}
              >
                <Flex>
                  <Box>
                    <img style={{ width: "300px" }} />
                    <Text
                      fontSize="2xl"
                      px="4px"
                      px="10px"
                      style={{ fontWeight: "bolder" }}
                    >
                      
                    </Text>
                    <Flex alignItems="center" justifyContent="end" padding="4px">
                      <Text fontSize="2xl">$ </Text>

                      <CgShoppingCart fontSize="20px" />
                    </Flex>
                    <Box
                      px="10px"
                      backgroundColor="darkGreen"
                      color="yellowGreen"
                      alignItems="center"
                    >
                      <Flex>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </Flex>
                      <small>Based on  reviews</small>
                      <Text color="black">Leave a review</Text>
                    </Box>
                  </Box>

                  <Box m="20px">
                    {/* <Link to={`/farm/${foundProduct.oneProduct.farm.name.toLowerCase()}`}>
                      <Text fontSize="2xl" color="primary.darkGreen">
                        {foundProduct.oneProduct.farm.name}
                      </Text>
                    </Link> */}
                    {/* <Text> {foundProduct.oneProduct.quantity} available</Text> */}
                    [product's description]


                  </Box>
                </Flex>

              </Box>
              <Box
                border="green 2px solid"
                alignItems="stretch"
                justifyItems="center"
                backgroundColor="lightyellow"
                padding={5}
                margin={20}
              >
                Customer review
                {/* {foundProduct.reviews.map((review, idx) => (
                  <h1 key={idx}>
                    {review.content}---{review.rating}---{review.author.firstName}
                  </h1>
                ))} */}
              </Box>
            </Box>
          </Flex>
        </>
      ) : (
        <>
          <Flex>
            <SideNavBar />
            <Box m={4} flex="1" alignItems="center">
              <Header />
              <Box
                border="green 2px solid"
                alignItems="stretch"
                justifyItems="center"
                backgroundColor="lightyellow"
                padding={5}
                margin={20}
              >
                <Flex>
                  <Box>
                    <img src={foundProductImage} style={{ width: "300px" }} />
                    <Text
                      fontSize="2xl"
                      px="4px"
                      px="10px"
                      style={{ fontWeight: "bolder" }}
                    >
                      {foundProduct.name}
                    </Text>
                    <Flex alignItems="center" justifyContent="end" padding="4px">
                      <Text fontSize="2xl">$ {foundProduct.price}</Text>

                      <CgShoppingCart fontSize="20px" />
                    </Flex>
                    <Box
                      px="10px"
                      backgroundColor="darkGreen"
                      color="yellowGreen"
                      alignItems="center"
                    >
                      <Flex>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </Flex>
                      <small>Based on {foundProduct.reviews.length} reviews</small>
                      <Text color="black">Leave a review</Text>
                    </Box>
                  </Box>

                  <Box m="20px">
                    <Link to={`/farm/${foundProduct.farm.name.toLowerCase()}`}>
                      <Text fontSize="2xl" color="primary.darkGreen">
                        {foundProduct.farm.name}
                      </Text>
                    </Link>
                    <Text> {foundProduct.quantity} available</Text>
                    [product's description]


                  </Box>
                </Flex>

              </Box>
              <Box
                border="green 2px solid"
                alignItems="stretch"
                justifyItems="center"
                backgroundColor="lightyellow"
                padding={5}
                margin={20}
              >
                Customer review
                {foundProduct.reviews.map((review, idx) => (
                  <h1 key={idx}>
                    {review.content}---{review.rating}---{review.author.firstName}
                  </h1>
                ))}
              </Box>
            </Box>
          </Flex>
        </>
      )}

    </>
  );
};

export default Product;
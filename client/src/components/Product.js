import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { BsFillHouseFill } from "react-icons/bs";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";

import {
  Button,
  Box,
  Flex,
  Text,
  FormControl,
  Select,
  Input,
} from "@chakra-ui/react";
import { CgShoppingCart } from "react-icons/cg";
import { QUERY_PRODUCTS, QUERY_FARM } from "../utils/queries";
import { imageSeeds } from "../imageSeeds";
import SideNavBar from "./SideNavBar";
import Header from "./Header";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import customTheme from "../extendedTheme";
import Auth from "../utils/auth";
import { useEffect, useState, useRef } from "react";
import ReviewButton from "./ReviewButton";

const Product = () => {
  const [inputText, setInputText] = useState("");
  const [rating, setRating] = useState("");

  // const [reviews, setReviews] = useState("");
  const [dataReviews, setDataReviews] = useState([]);

  const handleLogOut = () => {
    Auth.logout();
  };

  const { id } = useParams();
  const {
    loading: productLoading,
    data: productData,
    error: productError,
  } = useQuery(QUERY_PRODUCTS);
  const {
    loading: farmLoading,
    data: farmData,
    error: farmError,
  } = useQuery(QUERY_FARM);

  const productList = productData ? productData.products : [];
  const foundProduct = productList.find((product) => product._id === id);

  useEffect(() => {
    if (foundProduct) {
      setDataReviews([...foundProduct.reviews].reverse());
    }
  }, [foundProduct]);

  if (productLoading || farmLoading) {
    return "loading";
  }

  // console.log(foundProduct);
  const farmList = farmData ? farmData.farms : [];
  const farm = farmList.find((farm) => {
    const foundFarmProduct = farm.products.find(
      (product) => product._id === id
    );
    return foundFarmProduct ? farm : {};
  });

  // finding image matched product from seed
  const cardArr = imageSeeds.map((card) => card);
  const foundProductImage = cardArr
    .filter((arr) => arr.name === foundProduct.name)
    .map((card) => card.img);

  return (
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
            margin={10}
          >
            <Flex>
              <Box>
                <img src={foundProductImage} style={{ width: "300px" }} />

                <Flex
                  p="10px"
                  backgroundColor="darkGreen"
                  color="yellowGreen"
                  justifyContent="center"
                  mt="10px"
                >
                  <Flex flexDirection="column" alignItems="center">
                    <Flex>
                      <AiFillStar fontSize="15px" />
                      <AiFillStar fontSize="15px" />
                      <AiFillStar fontSize="15px" />
                      <AiFillStar fontSize="15px" />
                    </Flex>
                    <Text fontSize="sm">

                      Based on {dataReviews.length} reviews
  
                   

                    </Text>
                    {Auth.loggedIn() ? (
                      <ReviewButton
                        inputText={inputText}
                        setInputText={setInputText}
                        reviews={dataReviews}
                        setReviews={setDataReviews}
                        product={foundProduct}
                        rating={rating}
                        setRating={setRating}
                      />
                    ) : (
                      ""
                    )}
                  </Flex>
                </Flex>
              </Box>

              <Box m="30px">
                <Link to={`/farm/${farm.name.toLowerCase()}`}>
                  <Flex>
                    <Text fontSize="2xl" color="primary.darkGreen">
                      {farm.name}
                    </Text>
                    {<BsFillHouseFill />}
                  </Flex>
                </Link>
                <Text
                  fontSize="2xl"
                  px="4px"
                  px="10px"
                  style={{ fontWeight: "bolder" }}
                >
                  {foundProduct.name}
                </Text>
                [product's description]
                <Flex>
                  <Text>Available :</Text>
                  <Text
                    color="primary.darkGreen"
                    style={{ fontWeight: "bolder" }}
                  >
                    {foundProduct.quantity}
                  </Text>
                </Flex>
                <Box>
                  <Box>
                    <Text fontSize="2xl">$ {foundProduct.price}.00</Text>
                  </Box>
                  <Button
                    leftIcon={<CgShoppingCart fontSize="20px" />}
                    backgroundColor="primary.lightGreen"
                    variant="solid"
                    fontSize="sm"
                  >
                    Add To Cart
                  </Button>
                </Box>
              </Box>
            </Flex>
          </Box>
          <Box
            border="green 2px solid"
            alignItems="stretch"
            justifyItems="center"
            backgroundColor="lightyellow"
            padding={5}
            mx={10}
          >
            <Text
              fontSize="2xl"
              px="4px"
              px="10px"
              style={{ fontWeight: "bolder" }}
              mb={5}
            >
              Customer Review
            </Text>
            {/* {reviews.map((review,idx) => (
              <h1 key={idx}>{review.content}</h1>
            ))} */}

            {dataReviews.map((review, idx) => (
              <Box m="15px" key={idx}>
                <Flex>
                  {Array(review.rating)
                    .fill(0)
                    .map(() => (
                      <AiFillStar color="green" />
                    ))}
                </Flex>

                <Flex gap={6}>
                  <Flex>
                    <RiDoubleQuotesL />
                    <Text>{review.content}...</Text>
                    <RiDoubleQuotesR />
                  </Flex>

                  <Flex alignItems="center">
                    <BsPersonFill />
                    <Text>{review.author.firstName}</Text>
                  </Flex>
                </Flex>
              </Box>
            ))}
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Product;
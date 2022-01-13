import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { BsFillHouseFill } from "react-icons/bs";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";
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
import { QUERY_PRODUCTS, QUERY_FARM } from "../utils/queries";
import { imageSeeds } from "../imageSeeds";
import ProductCard from "./ProductCard";
import SideNavBar from "./SideNavBar";
import Header from "./Header";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Product = () => {
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

  if (productLoading || farmLoading) {
    return "loading";
  }

  const productList = productData ? productData.products : [];
  const foundProduct = productList.find((product) => product._id === id);
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

  const reviews = foundProduct.reviews.map((review) => review);
  console.log(reviews);

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
            margin={20}
          >
            <Flex>
              <Box>
                <img src={foundProductImage} style={{ width: "300px" }} />

                <Flex
                  p="10px"
                  backgroundColor="darkGreen"
                  color="yellowGreen"
                  justifyContent="center"
                >
                  <Box>
                    <Flex>
                      <AiFillStar fontSize="25px" />
                      <AiFillStar fontSize="25px" />
                      <AiFillStar fontSize="25px" />
                      <AiFillStar fontSize="25px" />
                    </Flex>
                    <small>
                      Based on {foundProduct.reviews.length} reviews
                    </small>
                    <Text color="black">Leave a review</Text>
                  </Box>
                </Flex>
              </Box>

              <Box m="20px">
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
                  <Box>
                    <Flex>
                      <Text> + -</Text>
                      <Text>Add To Cart</Text>
                      <CgShoppingCart fontSize="20px" />
                    </Flex>
                  </Box>
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
            margin={20}
          >
            <Text
              fontSize="2xl"
              px="4px"
              px="10px"
              style={{ fontWeight: "bolder" }}
            >
              Customer Review
            </Text>
            {reviews.map((review, idx) => (
              <Box m="15px">
                <AiFillStar />
                <Flex>
                  <RiDoubleQuotesL />
                  <Text key={idx}>{review.content}...</Text>
                  <RiDoubleQuotesR />
                </Flex>

                <Flex alignItems="center">
                  <BsPersonFill />
                  <Text>{review.author.firstName}</Text>
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

import { useQuery } from "@apollo/client";
import { QUERY_FARM } from "../utils/queries";
import { useParams } from "react-router-dom";
import localFarm from "../assets/localFarm.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideNavBar from "../components/SideNavBar";
import Auth from "../utils/auth";
import ReviewButton from "../components/ReviewButton";
import FarmProductCard from "../components/FarmProductCard";
import ProductCard from "../components/ProductCard";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import {
  Flex,
  Container,
  Image,
  Heading,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
const Farm = () => {
  const [inputText, setInputText] = useState("");
  const [rating, setRating] = useState("");
  const { name } = useParams();
  const { loading, data, error } = useQuery(QUERY_FARM);

  if (loading) {
    return "<h2>Loading</h2>";
  }

  const farmList = data ? data.farms : [];
  const foundFarm = farmList.find((farm) => farm.name.toLowerCase() === name);
  console.log(foundFarm);

  return (
    <>
      <Flex>
        <SideNavBar />
        <Box m={4} flex="1">
          <Header />
          <Box>
            <Flex
              border="black 2px solid"
              borderRadius={25}
              backgroundColor="lightyellow"
              boxShadow="1px 1px black"
              p="10px"
              px="20px"
              margin={20}
              justifyContent="space-evenly"
            >
              <Box>
                <Flex flexDirection="column" alignItems="center">
                  <Heading as="h6" size="lg" pb={2} textAlign="center">
                    {foundFarm.name}
                  </Heading>
                  <Image
                    boxSize="300px"
                    src={localFarm}
                    borderRadius="25px"
                  ></Image>

                  {foundFarm.owners.map((owner, idx) => (
                    <Text key={idx} fontWeight="600" mt={1}>
                      {owner.fullName}
                    </Text>
                  ))}

                  <Text fontWeight="600" mt={1}>
                    {foundFarm.address}
                  </Text>
                  <Text fontWeight="600" mt={1} color="green" fontSize="xl">
                    {foundFarm.story}
                  </Text>
                </Flex>
                <Flex
                  p="10px"
                  backgroundColor="darkGreen"
                  borderRadius="25px"
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
                      Based on {foundFarm.reviews.length} reviews
                    </Text>
                    {Auth.loggedIn() ? (
                      <ReviewButton
                        inputText={inputText}
                        setInputText={setInputText}
                        rating={rating}
                        setRating={setRating}
                        farm={foundFarm}
                      />
                    ) : (
                      ""
                    )}
                  </Flex>
                </Flex>
              </Box>
              <Box>
                <Flex marginTop={15} justifyContent="center" flexWrap="wrap">
                  {foundFarm.products.map((product, idx) => (
                    <FarmProductCard key={idx} product={product} />
                  ))}
                </Flex>

                <Box>
                  {foundFarm.reviews.map((review, idx) => (
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
                  {/* {foundFarm.reviews.map((review, idx) => (
                    <p key={idx}>{review.rating}</p>
                  ))} */}
                </Box>
              </Box>
            </Flex>
          </Box>

          <Footer />
        </Box>
      </Flex>
    </>
  );
};

export default Farm;

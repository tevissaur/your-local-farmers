import { useQuery } from "@apollo/client";
import { QUERY_FARM } from "../utils/queries";
import { useParams } from "react-router-dom";
import Auth from "../utils/auth";
import ReviewButton from "../components/ReviewButton";
import FarmProductCard from "../components/FarmProductCard";
import ProductCard from "../components/ProductCard";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { Box, Typography } from "@mui/material";
const Farm = () => {
  const [inputText, setInputText] = useState("");
  const [rating, setRating] = useState("");
  const [farmReviews, setFarmReviews] = useState([])
  const { name } = useParams();
  const { loading, data, error } = useQuery(QUERY_FARM);

  const farmList = data ? data.farms : [];
  const foundFarm = farmList.find((farm) => farm.name.toLowerCase() === name);
  
  useEffect(() => {
    if (foundFarm) {
      setFarmReviews([...foundFarm.reviews].reverse());
    }
  }, [foundFarm]);

  if (loading) {
    return "<h2>Loading</h2>";
  }
  
  console.log(foundFarm);

  return (
    <>
      <Box>
        <Box flex="1">
      
          <Box>
            <Box
              border="black 2px solid"
              borderRadius={25}
              backgroundColor="lightyellow"
              boxShadow="1px 1px black"
              p="10px"
              px="20px"
              margin={15}
              justifyContent="space-evenly"
            >
              <Box>
                <Box flexDirection="column" alignItems="center">
                  <Typography as="h6" size="lg" pb={2} textAlign="center">
                    {foundFarm.name}
                  </Typography>
                  {/* <Image
                    boxSize="300px"
                    src={localFarm}
                    borderRadius="25px"
                  ></Image> */}

                  {foundFarm.owners.map((owner, idx) => (
                    <Typography key={idx} fontWeight="600" mt={1}>
                      {owner.fullName}
                    </Typography>
                  ))}

                  <Typography fontWeight="600" mt={1}>
                    {foundFarm.address}
                  </Typography>

                  <Typography
                    as="samp"
                    fontWeight="600"
                    mt={1}
                    color="green"
                    fontSize="xl"
                    textAlign="center"
                  >
                    {foundFarm.story}
                  </Typography>
                </Box>
                <Box
                  p="10px"
                  backgroundColor="darkGreen"
                  borderRadius="25px"
                  color="yellowGreen"
                  justifyContent="center"
                  mt="10px"
                >
                  <Box flexDirection="column" alignItems="center">
                    <Box>
                      <AiFillStar fontSize="15px" />
                      <AiFillStar fontSize="15px" />
                      <AiFillStar fontSize="15px" />
                      <AiFillStar fontSize="15px" />
                    </Box>
                    <Typography fontSize="sm">
                      Based on {farmReviews.length} reviews
                    </Typography>
                    {Auth.loggedIn() ? (
                      <ReviewButton
                        inputText={inputText}
                        setInputText={setInputText}
                        rating={rating}
                        setRating={setRating}
                        farm={foundFarm}
                        reviews={farmReviews}
                        setReviews={setFarmReviews}
                      />
                    ) : (
                      ""
                    )}
                  </Box>
                </Box>
                <Box>
                  {farmReviews.map((review, idx) => (
                    <Box m="15px" key={idx}>
                      <Box>
                        {Array(review.rating)
                          .fill(0)
                          .map(() => (
                            <AiFillStar color="green" />
                          ))}
                      </Box>

                      <Box gap={6}>
                        <Box>
                          <RiDoubleQuotesL />
                          <Typography fontSize="sm">{review.content}...</Typography>
                          <RiDoubleQuotesR />
                        </Box>

                        <Box alignItems="center">
                          <BsPersonFill />
                          <Typography fontSize="sm">{review.author.firstName}</Typography>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                  {/* {foundFarm.reviews.map((review, idx) => (
                    <p key={idx}>{review.rating}</p>
                  ))} */}
                </Box>
              </Box>
              <Box>
                <Box marginTop={15} justifyContent="center" flexWrap="wrap">
                  {foundFarm.products.map((product, idx) => (
                    <FarmProductCard key={idx} product={product} />
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Farm;

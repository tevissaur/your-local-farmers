import { useQuery } from "@apollo/client";
import { QUERY_FARM } from "../utils/queries";
import { useParams } from "react-router-dom";
import Auth from "../utils/auth";
import ReviewButton from "../components/Storefront/ReviewButton";
import FarmProductCard from "../components/Storefront/FarmProductCard";
import ProductCard from "../components/Storefront/ProductCard";
import localFarm from '../assets/localFarm.jpg'
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { Box, Typography } from "@mui/material";
import store from "../utils/store";








const Farm = () => {
  const { profile: { loggedIn } } = store.getState()
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
    return (<h2>Loading</h2>);
  }

  return (
    <>
      <Box
        border="black 1px solid"
        borderRadius={5}
        backgroundColor="lightyellow"
        boxShadow="2px 2px 1px black"
        p="10px"
        px="20px"
        margin={15}
        justifyContent="space-evenly"
        sx={{
          border: 'black 1px solid',
          borderRadius: 5,
          backgroundColor: 'lightyellow',
          boxShadow: "2px 2px 1px black",
          p: '10px',
          m: 15,
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: 'column'
        }}
      >
        <Typography variant="h4" textAlign='center' marginY={2}>
          {foundFarm.name}
        </Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '40%'
          }}>

            <Box component='img' src={localFarm} sx={{
              width: '350px',
              border: '5px double black',
              borderRadius: '10px'
            }} />
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
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            margin: 4,
            width: '40%'
          }}>
            {foundFarm.products.map((product, idx) => (
              <FarmProductCard key={idx} product={product} />
            ))}
          </Box>
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

          </Box>

        </Box>
        <Box sx={{
          width: '40%'
        }}>
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
        <ReviewButton
          inputText={inputText}
          setInputText={setInputText}
          rating={rating}
          setRating={setRating}
          farm={foundFarm}
          reviews={farmReviews}
          setReviews={setFarmReviews}
        />
      </Box>
    </>
  );
};

export default Farm;

import { useEffect, useState, useRef } from "react";
import { useMutation } from "@apollo/client";
import { POST_REVIEW } from "../../utils/mutations";
import auth from "../../utils/auth";
import { Button, FormControl, Input, Select } from "@mui/material";
import { Box } from "@mui/system";
import store from '../../utils/store'
import LoggedOutButtons from "../NavComponents/LoggedOutButtons";

const ReviewButton = ({
  inputText,
  setInputText,
  reviews,
  setReviews,
  product,
  rating,
  setRating,
  farm,
}) => {
  const { profile: { loggedIn } } = store.getState()
  const [postReview, { data, loading, error }] = useMutation(POST_REVIEW);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputText) return;
    const profile = auth.getProfile();
    console.log(profile.data._id);

    const newReview = await postReview({
      variables: {
        review: {
          author: profile.data._id,
          content: inputText,
          rating: parseInt(rating),
        },
        product_id: product ? product._id : null,
        farm_id: farm ? farm._id : null,
      },
    });
    console.log(newReview);
    setReviews([newReview.data.postReview, ...reviews]);
    setInputText("");
  };

  return (

    <Box sx={{
      color: 'green',
      border: '1px solid black'
    }}>
      {loggedIn ? (
        <FormControl color="green" border="green">
          {/* <Input
          id="content"
          type="text"
          value={inputText}
          placeholder="Type your review of this product here..."
          onChange={(e) => setInputText(e.target.value)}
        />
        <Select
          id="country"
          placeholder="EXCELLENT"
          backgroundColor="primary.yellowGreen"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="5">5-EXCELLENT</option>
          <option value="4">4-GOOD</option>
          <option value="3">3-AVERAGE</option>
          <option value="2">2-POOR</option>
          <option value="1">1-BAD</option>
        </Select> */}
          <Button>
            Leave a review
          </Button>
        </FormControl>
      ) : (
        <>
          <LoggedOutButtons />
        </>
      )}


    </Box>
  );
};

export default ReviewButton;

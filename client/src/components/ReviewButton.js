import { useEffect, useState, useRef } from "react";
import { useMutation } from "@apollo/client";
import { POST_REVIEW } from "../../utils/mutations";
import auth from "../../utils/auth";
import { Button, FormControl, FormLabel, Input, Select } from "@mui/material";
import { Box } from "@mui/system";
import store from '../../utils/store'
import LoggedOutButtons from "../NavComponents/LoggedOutButtons";
import { setReviewContent } from "../../utils/actions";

const ReviewButton = ({
  setInputText,
  reviews,
  setReviews,
  product,
  farm,
}) => {
  const { profile: { loggedIn }, ui: { review: { inputText, rating } } } = store.getState()
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
      border: '1px solid black'
    }}>
      {loggedIn ? (
        <Box sx={{
          padding: '20px',
          display: 'flex',

        }}>
          <Input type="text" id='review-content' value={inputText} onChange={e => store.dispatch(setReviewContent(e.target.value))} />
          <Input type="number" id='review-rating' value={rating} />
          <Button sx={{
                borderRadius: '25px',
                paddingX: 1.5,
                color: 'black',
                backgroundColor: 'lightgray',
                border: '1px solid black',
                marginRight: 2,
                ':hover': {
                    backgroundColor: 'white',
                    boxShadow: '1px 1px 0 black'
                }
            }}>
            Leave a review
          </Button>
        </Box>
      ) : (
        <>
          <LoggedOutButtons />
        </>
      )}
        

    </Box>
  );
};

export default ReviewButton;

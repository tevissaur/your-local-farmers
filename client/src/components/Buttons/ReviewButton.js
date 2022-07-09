import { useMutation } from "@apollo/client";
import { POST_REVIEW } from "../../utils/mutations";
import auth from "../../utils/auth";
import { Box, FormControl, FormLabel, Input, Select } from "@mui/material";
import { BaseButton as Button } from "./BaseButton";
// import { Box } from "@mui/system";
import store from '../../utils/store'
import LoggedOutButtons from "./LoggedOutButtons";
import { setReviewContent } from "../../utils/actions";
import { useLocation } from "react-router-dom";
import UtilsService from "../../services/utils.service";

const ReviewButton = () => {

  const {
    profile: {
      loggedIn
    },
    ui: {
      review: {
        inputText,
        rating
      }
    },
    product: {

    } } = store.getState()

  const [postReview, { data, loading, error }] = useMutation(POST_REVIEW);

  const { search } = useLocation()
  const { fid, pid } = UtilsService.getSearchParams(search)

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
        product_id: pid,
        farm_id: fid,
      },
    });
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
          <Button>
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

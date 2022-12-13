import { useMutation } from "@apollo/client";
import { POST_REVIEW } from "../../utils/mutations";
import auth from "../../services/authentication.service";
import { Box, FormControl, FormLabel, Input, Select } from "@mui/material";
import { BaseButton as Button } from "./BaseButton";
// import { Box } from "@mui/system";
import store, { RootState } from "../../utils/store";
import LoggedOutButtons from "./LoggedOutButtons";
import { setReviewContent } from "../../utils/actions";
import { useLocation } from "react-router-dom";
import UtilsService from "../../services/utils.service";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ReviewButton = () => {
	const {
		user: { loggedIn },
		ui: {
			review: {
				author: { username, firstName, lastName, email },
				content,
				rating,
				farm,
				product,
			},
		},
	} = useSelector((state: RootState) => state);
	const dispatch = useDispatch();
	const [postReview, { data, loading, error }] = useMutation(POST_REVIEW);

	const { search } = useLocation();
	const { fid, pid } = UtilsService.getSearchParams(search);

	const handleSubmit = async (e: MouseEvent) => {
		e.preventDefault();
		if (!content) return;
		const profile = auth.getProfile();
		console.log(profile.data._id);

		const newReview = await postReview({
			variables: {
				review: {
					author: profile.data._id,
					content: content,
					rating: rating,
				},
				product_id: pid,
				farm_id: fid,
			},
		});
	};

	return (
		<Box
			sx={{
				border: "1px solid black",
			}}
		></Box>
	);
};

export default ReviewButton;

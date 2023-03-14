import { useMutation } from "@apollo/client";
import auth from "../../services/authentication.service";
import { Box, FormControl, FormLabel, Input, Select } from "@mui/material";
import { BaseButton as Button } from "./BaseButton";
// import { Box } from "@mui/system";
import store, { RootState } from "../../utils/store";
import LoggedOutButtons from "./LoggedOutButtons";
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

	const { search } = useLocation();
	const { fid, pid } = UtilsService.getSearchParams(search);

	const handleSubmit = async (e: MouseEvent) => {
		e.preventDefault();
		if (!content) return;
		const profile = auth.getProfile();
		console.log(profile.data._id);
	};

	return <></>;
};

export default ReviewButton;

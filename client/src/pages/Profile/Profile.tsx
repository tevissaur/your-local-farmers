import { useMutation, useQuery, useLazyQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { GET_ME } from "../../utils/queries";
import UserMain from "./components/UserMain";
import AuthService from "../../services/authentication.service";
import { Box, Tab, Tabs } from "@mui/material";
import { TabPanel, a11yProps } from "../../components/TabPanel/TabPanel";
import store, { RootState } from "../../utils/store";
import UserOrders from "./components/UserOrders";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../utils/slices/user-slice";
import { useGetMeQuery } from "../../services/api.service";
import { setOpenTab } from "../../utils/slices/ui-slice";

const Profile = () => {
	const {
		user: {
			loggedIn,
			userData: { _id },
		},
		ui: { openTab },
	} = useSelector((state: RootState) => state);

	const dispatch = useDispatch();

	// const { data: { _id } } = AuthService.getProfile();

	const { data, isLoading, error } = useGetMeQuery(_id)

	useEffect(() => {}, []);

	useEffect(() => {
		try {
			isLoading ? console.log(isLoading) : dispatch(setUserData(data?.me));
		} catch (err) {
			console.log(err);
		}
	}, [isLoading, data, error]);


	if (isLoading) return null;
	return (
		<>
		</>
	);
};

export default Profile;

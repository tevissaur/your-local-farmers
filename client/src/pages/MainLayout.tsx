import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { QUERY_CATEGORIES, GET_ME } from "../utils/queries";
import store, { RootState } from "../utils/store";
import Banner from "../components/Banner";
import styled from "@mui/material/styles/styled";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage } from "../utils/slices/ui-slice";
import utilsService from "../services/utils.service";
import { setCartData } from "../utils/slices/cart-slice";
import { setCategories } from "../utils/slices/search-slice";
import { useGetMeQuery } from "../services/api.service";
import authenticationService from "../services/authentication.service";
import { IAuthToken } from "../interfaces/IUser";

const MainContainer = styled("main")(({ theme }) => ({
	display: "flex",
	position: "relative",
	justifyContent: "flex-start",
	flexDirection: "column",
	flexGrow: 1,
	minHeight: "calc(100vh - 316px)",
	backgroundColor: theme.palette.common.white,
}));

const MainLayout = () => {
  const { data: { _id } } = authenticationService.getProfile()
	const {
		user: {
			loggedIn,
			userData: { isFarmer },
		},
	} = useSelector((state: RootState) => state);
	const dispatch = useDispatch();

	// const { loading, data, error } = useQuery(QUERY_CATEGORIES);
	const { data, isLoading, isError } = useGetMeQuery(profile.data._id)

	useEffect(() => {
		dispatch(setActivePage(utilsService.getActivePage()));
	}, []);

	useEffect(() => {
		console.log(store);
	});

	useEffect(() => {
		if (!userInfoLoading && me?.me !== undefined) {
			dispatch(setCartData(utilsService.cleanCart(me?.me?.cart.products)));
		}
	}, [me, isFarmer, userInfoLoading]);

	useEffect(() => {
		if (!loading) {
			dispatch(
				setCategories(
					data.categories.map((cat) => {
						return {
							...cat,
							selected: false,
						};
					})
				)
			);
		}
	}, [loading, data]);

	return (
		<>
			<Header />
			<MainContainer>
				<Banner />
				<Outlet />
			</MainContainer>
			<Footer />
		</>
	);
};

export default MainLayout;

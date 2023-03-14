import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import store, { RootState } from "../utils/store";
import Banner from "../components/Banner";
import React from "react";
import { setActivePage } from "../utils/slices/ui/ui-slice";
import authenticationService from "../services/authentication.service";
import { IAuthToken } from "../interfaces/IUser";
import utilsService from "../services/utils.service";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useLazyGetMeQuery } from "../utils/slices/user/user-api";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setCartData } from "../utils/slices/cart/cart-slice";

const MainContainer = styled(Container)`
	padding: 0;
`;

const MainLayout = () => {
	const profile = authenticationService.getProfile() || {};
	const {
		loggedIn,
		userData: { isFarmer },
	} = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();

	// const { loading, data, error } = useQuery(QUERY_CATEGORIES);
	const [getMe, { data, isLoading, isError }] = useLazyGetMeQuery();

	useEffect(() => {
		dispatch(setActivePage(utilsService.getActivePage()));
	}, []);

	useEffect(() => {
		if (loggedIn) getMe(profile.data._id);
	}, [loggedIn]);

	useEffect(() => {
		console.log(data);
		if (!isLoading && data) {
			dispatch(setCartData(data.cart));
		}
	}, [isFarmer, data, isLoading]);

	useEffect(() => {
		// if (!isLoading) {
		// 	dispatch(
		// 		setCategories(
		// 			data.categories.map((cat) => {
		// 				return {
		// 					...cat,
		// 					selected: false,
		// 				};
		// 			})
		// 		)
		// 	);
		// }
	}, [isLoading, data]);

	return (
		<>
			<NavBar />
			<MainContainer fluid>
				<Banner />
				<Outlet />
			</MainContainer>
			<Footer />
		</>
	);
};

export default MainLayout;

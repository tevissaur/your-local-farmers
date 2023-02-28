import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import store, { RootState } from "../utils/store";
import Banner from "../components/Banner";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage } from "../utils/slices/ui-slice";
import { useGetMeQuery } from "../services/api.service";
import authenticationService from "../services/authentication.service";
import { IAuthToken } from "../interfaces/IUser";
import utilsService from "../services/utils.service";
import styled from "styled-components";
import { Container } from "react-bootstrap";

	const MainContainer = styled(Container)`
			
	`;

const MainLayout = () => {
	// const profile = authenticationService.getProfile();
	// const {
	// 	user: {
	// 		loggedIn,
	// 		userData: { isFarmer },
	// 	},
	// } = useSelector((state: RootState) => state); 
	// const dispatch = useDispatch();

	// // const { loading, data, error } = useQuery(QUERY_CATEGORIES);
	// const { data, isLoading, isError } = useGetMeQuery(profile);

	// useEffect(() => {
	// 	dispatch(setActivePage(utilsService.getActivePage()));
	// }, []);

	// useEffect(() => {
	// 	console.log(store);
	// });

	// useEffect(() => {
	// 	console.log(data)
	// 	if (!isLoading && data !== undefined) {
	// 		// dispatch(setCartData(utilsService.cleanCart(data.cart.products)));
	// 	}
	// }, [isFarmer, data]);

	// useEffect(() => {
	// 	// if (!isLoading) {
	// 	// 	dispatch(
	// 	// 		setCategories(
	// 	// 			data.categories.map((cat) => {
	// 	// 				return {
	// 	// 					...cat,
	// 	// 					selected: false,
	// 	// 				};
	// 	// 			})
	// 	// 		)
	// 	// 	);
	// 	// }
	// }, [isLoading, data]);

	return (
		<>
			<NavBar />
			<MainContainer>
				<Banner />
				<Outlet />
			</MainContainer>
			<Footer />
		</>
	);
};

export default MainLayout;

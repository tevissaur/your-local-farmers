import WhatIs from "./components/WhatIs";
import MissionStatement from "../AboutUs/components/MissionStatement";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "../../hooks";
import {
	useGetCategoriesQuery,
	useGetLocalFarmsQuery,
} from "../../utils/slices/search/search-api";
import {
	setCategories,
	setFarms,
} from "../../utils/slices/search/search-slice";
import slugify from "slugify";
import SmallIcon from "./components/SmallIcon";

const WidgetCol = styled(Col)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 10px 0;
	align-items: center;
	&::-webkit-scrollbar {
		border-radius: 2px;
	}
`;

const Homepage = () => {
	const { categories, farms } = useAppSelector((state) => state.search);
	const dispatch = useAppDispatch();
	const {
		userData: { location },
	} = useAppSelector((state) => state.user);

	const {
		isLoading: categoriesLoading,
		error: categoriesError,
		data: categoriesResponse,
		isSuccess: categoriesSuccess,
	} = useGetCategoriesQuery("");
	const {
		isLoading: localFarmsLoading,
		error: localFarmsError,
		data: localFarmsResponse,
		isSuccess: localFarmsSuccess,
	} = useGetLocalFarmsQuery(location);

	useEffect(() => {
		if (categoriesSuccess && !categoriesLoading)
			dispatch(setCategories(categoriesResponse.categories));
	}, [categoriesLoading, categoriesError, categoriesResponse]);

	useEffect(() => {
		if (localFarmsSuccess && !localFarmsLoading)
			dispatch(setFarms(localFarmsResponse.localFarms));
	}, [localFarmsResponse, localFarmsLoading, localFarmsError]);

	return (
		<Container className="py-5">
			<Row className="d-flex justify-content-around flex-column">
				<WidgetCol xs={12}>
					<h2 className="mb-4 display-6">
						Explore Our Most Popular Categories
					</h2>
					<div className="d-flex flex-wrap">
						{categories.map((category) => (
							<SmallIcon
								key={category._id}
								to={`/category/${slugify(category.name, {
									lower: true,
								})}?cid=${category._id}`}
								label={category.name}
							/>
						))}
					</div>
				</WidgetCol>
				<WidgetCol>
					<h2 className="mb-4 display-6">Local Farms Near You</h2>
					<Col className="d-flex flex-wrap">
						{farms.map((farm) => (
							<SmallIcon
								key={farm._id}
								to={`/farm/${slugify(farm.name, {
									lower: true,
								})}?fid=${farm._id}`}
								label={farm.name}
							/>
						))}
					</Col>
				</WidgetCol>
				<Col className="d-flex w-100 m-auto" xs={12} sm={8} md={8}>
					<MissionStatement />
				</Col>
				<Col className="d-flex w-100 m-auto">
					<WhatIs />
				</Col>
			</Row>
		</Container>
	);
};

export default Homepage;

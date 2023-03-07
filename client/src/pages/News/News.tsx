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

const News = () => {
	const { categories, farms } = useAppSelector((state) => state.search);
	const dispatch = useAppDispatch();

	return (
		<Container className="py-5">
			
		</Container>
	);
};

export default News;

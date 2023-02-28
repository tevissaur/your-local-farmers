import { useQuery } from "@apollo/client";
import { Typography, Box } from "@mui/material";
import React, { useEffect } from "react";
import { Container, Row,  } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";
import store, { RootState } from "../../../utils/store";
import SmallCategoryIcon from "./SmallCategoryIcon";

const CategoryHeaderContainer = styled(Container)`
	display: "flex";
	position: "relative";
	flex-direction: "column";
	justify-content: "center";
	flex-wrap: "wrap";
`;

const CategoryHeader = () => {
	const {
		search: { categories },
	} = useSelector((state: RootState) => state);
	return (
		<CategoryHeaderContainer>
			<Row>
				<div>
					Explore Our Most Popular Categories
				</div>
			</Row>

			<Row>
				{categories.map((category, index) => {
					return <SmallCategoryIcon key={index + 30} card />;
				})}
			</Row>
		</CategoryHeaderContainer>
	);
};

export default CategoryHeader;

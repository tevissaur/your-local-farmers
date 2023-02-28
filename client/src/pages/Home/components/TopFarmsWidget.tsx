import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Link as ReactLink } from "react-router-dom";
import store, { RootState } from "../../../utils/store";
import { setTopFarms } from "../../../utils/actions";
import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import SmallFarmsIcon from "./SmallFarmsIcon";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const LocalFarmsContainer = styled(Container)`
	display: "flex";
	position: "relative";
	flex-direction: "column";
	justify-content: "center";
	flex-wrap: "wrap";
	margin: "40px auto";
`;

const TopFarmsWidget = () => {
	const {
		search: { farms },
	} = useSelector((state: RootState) => state);

	// useEffect(() => {
	// 	loading
	// 		? console.log(loading)
	// 		: store.dispatch(setTopFarms(data?.farms));
	// }, [data, loading, error]);

	return (
		<>
			<LocalFarmsContainer></LocalFarmsContainer>
		</>
	);
};

export default TopFarmsWidget;

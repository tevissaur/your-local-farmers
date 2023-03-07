import React from "react";
import { Card, Carousel, Col, Container } from "react-bootstrap";
import slugify from "slugify";
import styled from "styled-components";
import { BaseLink as Link } from "../../../components/BaseLink";
import { ICategory } from "../../../interfaces/ICategory";
import { IFarm } from "../../../interfaces/IFarm";

const CardLink = styled(Link)`
	display: flex;
	border-radius: 25px;
	padding: 5px 10px;
	color: black;
	margin: 5px 10px;
	background-image: url(${"holder.js/100px180"});
	border: 1px solid black;
	transition: all 200ms;
	text-decoration: none;
	min-width: 150px;
	min-height: 150px;
	border-radius: 50%;
	background-color: gray;
	&:hover {
		transform: scale(1.1);
		box-shadow: 0px 0px 0 black;
		color: black;
		z-index: 10;
	}
`;

const CardLabel = styled.label`
	font-size: 20px;
	color: black;
	margin-bottom: 10px;
	text-align: center;
`;

const CardContainer = styled(Card)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-width: 150px;
	min-height: 150px;
	margin: 10px;
	border: none;
`;

interface CardProps {
	label: string;
	to: string;
}

const SmallFarmsIcon: React.FC<CardProps> = ({ label, to }) => {
	return (
		<CardContainer>
			<CardLink to={to}></CardLink>
			<CardLabel>{label}</CardLabel>
		</CardContainer>
	);
};

export default SmallFarmsIcon;

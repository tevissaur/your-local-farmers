import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const BaseButtonStyled = styled(Button)`
	border-radius: 25px;
	padding: auto 1.5rem;
	color: black;
	margin: 2px 5px;
	background-color: lightgray;
	border: 1px solid black;
	box-shadow: 1px 1px 0 black;
	transform: translate(-1px, -1px);
	transition: all 100ms;
	&:hover {
		background-color: white;
		transform: translate(0px, 0px);
		box-shadow: 0px 0px 0 black;
	}
`;


export const BaseButton = ({ children, ...props}) => {


	return (
		<BaseButtonStyled {...props}>{children}</BaseButtonStyled>
	)
};
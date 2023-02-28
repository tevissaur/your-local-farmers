import { Link as ReactLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import React from "react";
import styled from "styled-components";


const BaseLinkStyled = styled(ReactLink)`
	border-radius: 25px;
	padding: auto;
	color: black;
	margin: 2px 5px;
	background-color: lightgray;
	border: 1px solid black;
	box-shadow: 1px 1px 0 black;
	transform: translate(-1px, -1px);
	transition: all 100ms;
	text-decoration: none;
	&:hover {
		background-color: white;
		transform: translate(0px, 0px);
		box-shadow: 0px 0px 0 black;
	}
`;

export const LinkBase: React.FC<any> = ({ children, ...props }) => {
	const dispatch = useDispatch();
	return (
		<BaseLinkStyled {...props}>
			{children}
		</BaseLinkStyled>
	);
};

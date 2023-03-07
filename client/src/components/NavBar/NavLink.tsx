import React from "react";
import styled from "styled-components";
import { BaseLink } from "../BaseLink";
import { BaseButton } from "../Buttons/BaseButton";

const NavLinkStyled = styled(BaseLink)`
	width: fit-content;
	border-radius: 25px;
	padding: 5px 10px;
	color: black;
	margin: auto 10px;
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
		color: black;
	}
`;

const NavLink: React.FC<any> = ({ children, to, ...props }) => {
	return (
		<NavLinkStyled to={to} {...props}>
			{children}
		</NavLinkStyled>
	);
};

export default NavLink;

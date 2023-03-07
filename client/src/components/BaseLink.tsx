import { Link as ReactLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import React from "react";
import styled from "styled-components";
import { BaseButton } from "./Buttons/BaseButton";
import { Nav } from "react-bootstrap";

const BaseLinkStyled = styled(ReactLink)`
	color: black;
	text-decoration: none;
	&:hover {
		color: black;
	}
`;

export const BaseLink: React.FC<any> = ({ children, to, ...props }) => 
(<BaseLinkStyled to={to} {...props}>{children}</BaseLinkStyled>);

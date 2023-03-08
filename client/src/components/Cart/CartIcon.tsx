import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import {
	BsArrowUpRight,
	BsCart,
	BsCashStack,
	BsGear,
	BsPersonFill,
	BsTreeFill,
} from "react-icons/bs";
import styled from "styled-components";
import { useAppSelector } from "../../hooks";
import authenticationService from "../../services/authentication.service";
import { profileUrl } from "../../services/constants.service";
import { BaseLink } from "../BaseLink";

const StyledCartDropdownContainer = styled(Dropdown)`
	border-radius: 50px;
	position: relative;
	transition: all 0.5s;
    margin: 0px 10px;
`;

const StyledCartDropdownMenuContainer = styled(Dropdown.Menu)`
	transition: all 0.5s;
	border: 1px solid black;
`;
const StyledCartDropdownToggle = styled(Dropdown.Toggle)`
	border-radius: 50px;
	border: 1px solid black;
	box-shadow: 2px 2px 0 black;
	background-color: gray;
	&:focus {
		background-color: gray;
		border: 1px solid black;
	}
	&:hover {
		background-color: darkgray;
		border: 1px solid black;
	}
	&:active {
		background-color: darkgray;
		border: 1px solid black;
	}
	&:focus-visible {
		background-color: darkgray;
		border: 1px solid black;
	}
`;
const Arrow = styled.span`
	position: absolute;
	left: 20px;
	top: -5px;
	width: 10px;
	height: 10px;
	background-color: white;
	transform: rotate(45deg);
	border-style: solid;
	border-width: 1px 1px 1px 1px;
	border-color: black transparent transparent black;
`;
const CartDropdown = () => {
    const { products, total } = useAppSelector(state => state.cart);
	const handleLogout = () => {
		authenticationService.logout();
	};

	return (
		<StyledCartDropdownContainer>
			<StyledCartDropdownToggle
				className="d-none d-md-block"
				id="dropdown-basic"
			>
				<BsCart />
			</StyledCartDropdownToggle>
			<StyledCartDropdownToggle
				className="d-md-none w-100"
				id="dropdown-basic"
			>
				<BsCart />
			</StyledCartDropdownToggle>

			<StyledCartDropdownMenuContainer className="mt-2">
				<Arrow className="d-none d-md-block" />
				{products.map(product => (
                    <Dropdown.Item>
                        {`${product.name} qty: ${product.quantity?.amount} / ${product.quantity?.type}`}
                    </Dropdown.Item>
                ))}
                <Dropdown.Item as={BaseLink} to={"/cart"}>Go to cart</Dropdown.Item>
			</StyledCartDropdownMenuContainer>
		</StyledCartDropdownContainer>
	);
};

export default CartDropdown;

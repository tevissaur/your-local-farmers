import React, { useEffect } from "react";
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
import { BaseButton } from "../Buttons/BaseButton";

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
const CartDropdown = () => {
    const { products, total } = useAppSelector(state => state.cart);
	const handleLogout = () => {
		authenticationService.logout();
	};

	useEffect(() => {
		console.log("Cart icon: ", products)
	}, [products])

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

			<StyledCartDropdownMenuContainer align={{ sm: "end" }} className="mt-2">
				{products?.length > 0 ? (products.map(product => (
                    <Dropdown.Item key={product.productId._id}>
                        {`${product.productId?.name} qty: ${product.quantity?.amount} / ${product.quantity?.type}`}
                    </Dropdown.Item>
                ))) : <></>}
				<Dropdown.Divider />
                <Dropdown.ItemText>
					<BaseButton as={BaseLink} to={"/cart"}>
						Go to cart
					</BaseButton>
					<BaseButton as={BaseLink} to={"/checkout"}>
						Checkout
					</BaseButton>

				</Dropdown.ItemText>
			</StyledCartDropdownMenuContainer>
		</StyledCartDropdownContainer>
	);
};

export default CartDropdown;

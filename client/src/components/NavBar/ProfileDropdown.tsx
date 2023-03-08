import React from "react";
import { Dropdown } from "react-bootstrap";
import {
	BsArrowUpRight,
	BsCashStack,
	BsGear,
	BsPersonFill,
	BsTreeFill,
} from "react-icons/bs";
import styled from "styled-components";
import authenticationService from "../../services/authentication.service";
import { profileUrl } from "../../services/constants.service";
import { BaseLink } from "../BaseLink";

const StyledProfileDropdownContainer = styled(Dropdown)`
	border-radius: 50px;
	position: relative;
	transition: all 0.5s;
`;

const StyledProfileDropdownMenuContainer = styled(Dropdown.Menu)`
	transition: all 0.5s;
	border: 1px solid black;
`;
const StyledProfileDropdownToggle = styled(Dropdown.Toggle)`
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
const ProfileDropdown = () => {
	const handleLogout = () => {
		authenticationService.logout();
	};

	return (
		<StyledProfileDropdownContainer>
			<StyledProfileDropdownToggle className="d-none d-md-block" id="dropdown-basic">
				<BsPersonFill />
			</StyledProfileDropdownToggle>
			<StyledProfileDropdownToggle className="d-md-none w-100" id="dropdown-basic">
				<BsPersonFill />
			</StyledProfileDropdownToggle>

			<StyledProfileDropdownMenuContainer className="mt-2">
				<Arrow className="d-none d-md-block" />
				<Dropdown.Item as={BaseLink} to={profileUrl}>
					<BsPersonFill className="me-2 rounded-circle" />
					My Profile
				</Dropdown.Item>
				<Dropdown.Item as={BaseLink} to={profileUrl}>
					<BsGear className="me-2 rounded-circle" />
					Account Settings
				</Dropdown.Item>
				<Dropdown.Item as={BaseLink} to={profileUrl}>
					<BsCashStack className="me-2 rounded-circle" />
					My Purchases
				</Dropdown.Item>
				<Dropdown.Item onClick={handleLogout}>
					<BsArrowUpRight className="me-2 rounded-circle" />
					Log out
				</Dropdown.Item>
			</StyledProfileDropdownMenuContainer>
		</StyledProfileDropdownContainer>
	);
};

export default ProfileDropdown;

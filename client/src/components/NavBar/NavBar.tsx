import store, { RootState } from "../../utils/store";
import LoggedOutButtons from "../Buttons/LoggedOutButtons";
import { LinkBase as Link, LinkBase } from "../LinkBase";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Col, Container, Form, Row } from "react-bootstrap";
import { BaseButton } from "../Buttons/BaseButton";
import { BaseContainer } from "../Container";

const NavContainer = styled(BaseContainer)`
	display: flex;
	margin: auto;
	flex-direction: column;
	background-color: gray;
	padding: 10px;
	justify-content: center;
`;

const SearchBar = styled.input`
	width: 100%;
	border-radius: 25px;
	border: 1px solid black;
	box-shadow: 2px 2px 0 black;
	padding: 5px 15px;
	background-color: lightgray;
	margin: 5px auto 10px auto;
	&:hover {
		background-color: white;
	}
`;

const NavButton = styled(LinkBase)`
	padding: 7.5px 10px;
`;

const NavBar = () => {
	const {
		user: { loggedIn },
	} = useSelector((state: RootState) => state);
	const dispatch = useDispatch();


	const handleSearchChange = (e) => {
		console.log(e.target.value);

	};
	const handleSearchSubmit = (e) => {
		console.log(e.target.value);

	};

	return (
		<>
			<NavContainer fluid>
				<Row>
					<Col xs={12} md={6}>
						<SearchBar
							type={"search"}
							id={"search"}
							placeholder={"Search for Local Foods here!"}
							onChange={handleSearchChange}
							onSubmit={handleSearchSubmit}
						/>
					</Col>
				</Row>
				<Row>
					<Col xs={8} className={"align-content-center"}>
						<NavButton>Home</NavButton>
						<NavButton>News</NavButton>
						<NavButton>Browse</NavButton>
						<NavButton>My Farm</NavButton>
						<NavButton>My Orders</NavButton>
						<NavButton>About Us</NavButton>
					</Col>
					<Col xs={4}>
						<LoggedOutButtons />
					</Col>
				</Row>
			</NavContainer>
		</>
	);
};

export default NavBar;

import store, { RootState } from "../../utils/store";
import LoggedOutButtons from "../Buttons/LoggedOutButtons";
import { BaseLink } from "../BaseLink";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
	Button,
	Col,
	Container,
	Form,
	Nav,
	Navbar,
	NavDropdown,
	Offcanvas,
	OffcanvasHeader,
	Row,
} from "react-bootstrap";
import NavButton from "./NavLink";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { toggleDrawer } from "../../utils/slices/ui/ui-slice";
import {
	aboutUsUrl,
	browseUrl,
	homeUrl,
	loginUrl,
	myFarmUrl,
	myOrdersUrl,
	newsUrl,
	signUpUrl,
} from "../../services/constants.service";
import ProfileDropdown from "./ProfileDropdown";
import { CartIcon } from "../Cart";

export const StyledInput = styled(Form.Control)`
	width: 100%;
	max-height: 40px;
	border-radius: 25px;
	border: 1px solid black;
	box-shadow: 2px 2px 0 black;
	padding: 5px 15px;
	background-color: lightgray;
	margin: 0px 10px;
	&:hover {
		background-color: white;
	}
	&:focus {
		border: 1px solid black;
		box-shadow: 2px 2px 0 black;
	}
`;

const OffcanvasNavButton = styled(NavButton)`
	width: 95%;
	text-align: center;
	font-size: 20px;
	margin: 5px auto;
`;
const Title = styled(Navbar.Brand)`
	font-size: 30px;
`;

const NavBar = () => {
	const {
		drawer: { open },
	} = useAppSelector((state) => state.ui);
	const { loggedIn } = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();

	const handleSearchChange = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(e.currentTarget.nodeValue);
	};
	const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(e.currentTarget.nodeValue);
	};
	const handleDrawerToggle = () => {
		dispatch(toggleDrawer(!open));
	};

	return (
		<Navbar
			collapseOnSelect
			expand="md"
			expanded={open}
			className="bg-secondary"
		>
			<Container fluid className="pt-3 pb-2 justify-content-start">
				<Col className="d-flex justify-content-center d-md-none" xs={2}>
					<Navbar.Toggle
						onClick={handleDrawerToggle}
						aria-controls={`offcanvasNavbar-expand-md`}
					>
						<BsThreeDotsVertical />
					</Navbar.Toggle>
				</Col>
				<Navbar.Brand
					className="d-md-none col-8 text-center"
					as={BaseLink}
					to={homeUrl}
				>
					Local Farmers
				</Navbar.Brand>
				<Col className="d-md-none" xs={2} />
				<Navbar.Offcanvas
					id={`offcanvasNavbar-expand-md`}
					className="justify-content-end"
					show={open}
					aria-labelledby={`offcanvasNavbarLabel-expand-md`}
					placement="start"
				>
					<Offcanvas.Header closeButton onHide={handleDrawerToggle}>
						<Offcanvas.Title
							id={`offcanvasNavbarLabel-expand-md`}
						></Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body className="flex-wrap">
						<Nav className="d-flex justify-content-center w-100 m-auto align-items-center">
							<Col
								className="d-flex justify-content-start justify-content-md-end"
								xs={12}
								md={4}
								lg={3}
							>
								<Title as={BaseLink} to={homeUrl}>
									Local Farmers
								</Title>
							</Col>
							<Col
								as={Form}
								onSubmit={handleSearchSubmit}
								className="d-flex"
								xs={12}
								md={4}
								lg={6}
							>
								<StyledInput
									type={"search"}
									id={"search"}
									placeholder={"Search for Local Foods"}
									onChange={handleSearchChange}
								/>
							</Col>
							<Col
								className="d-flex justify-content-center justify-content-md-start my-3"
								xs={12}
								md={4}
								lg={3}
							>
								{loggedIn ? (
									<>
										<ProfileDropdown />
										<CartIcon />
									</>
								) : (
									<>
										<NavButton to={loginUrl}>
											Log In
										</NavButton>
										<NavButton
											className="bg-success"
											to={signUpUrl}
										>
											Sign Up
										</NavButton>
									</>
								)}
							</Col>
						</Nav>
						<Row className="d-none d-md-flex justify-content-center w-100 flex-column flex-md-row">
							<NavButton to={homeUrl}>Home</NavButton>
							<NavButton to={newsUrl}>News</NavButton>
							<NavButton to={browseUrl}>Browse</NavButton>
							<NavButton to={myFarmUrl}>My Farm</NavButton>
							<NavButton to={myOrdersUrl}>My Orders</NavButton>
							<NavButton to={aboutUsUrl}>About Us</NavButton>
						</Row>
						<Row className="d-flex d-md-none flex-column">
							<OffcanvasNavButton to={homeUrl}>
								Home
							</OffcanvasNavButton>
							<OffcanvasNavButton to={newsUrl}>
								News
							</OffcanvasNavButton>
							<OffcanvasNavButton to={browseUrl}>
								Browse
							</OffcanvasNavButton>
							<OffcanvasNavButton to={myFarmUrl}>
								My Farm
							</OffcanvasNavButton>
							<OffcanvasNavButton to={myOrdersUrl}>
								My Orders
							</OffcanvasNavButton>
							<OffcanvasNavButton to={aboutUsUrl}>
								About Us
							</OffcanvasNavButton>
						</Row>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
};

export default NavBar;

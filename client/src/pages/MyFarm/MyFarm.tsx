import React from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import {
	BsCashStack,
	BsFillStarFill,
	BsGear,
	BsPersonFill,
} from "react-icons/bs";
import styled from "styled-components";
import { BaseLink } from "../../components/BaseLink";
import { profileUrl } from "../../services/constants.service";
import CurrentNews from "./components/CurrentNewsCard";
import FarmMenu from "./components/FarmMenu";
import Favorites from "./components/FavoritesCard";
import FinancialSummary from "./components/FinancialSummaryCard";
import RecentPurchases from "./components/RecentPurchasesCard";
import UpcomingEvents from "./components/UpcomingEventsCard";

const Profile = () => {
	return (
		<Container fluid className="d-flex p-5">
			<Row>
				<Col xs={12} md={3} className="my-3">
                    <FarmMenu />
				</Col>
				<Col xs={12} md={9}>
					<Container fluid>
						<Row>
							<RecentPurchases />
							<CurrentNews />
							<FinancialSummary /> 
							<Favorites />
							<UpcomingEvents />
						</Row>
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

export default Profile;

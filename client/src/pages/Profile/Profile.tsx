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
import Favorites from "./components/FavoritesCard";
import FinancialSummary from "./components/FinancialSummaryCard";
import RecentPurchases from "./components/RecentPurchasesCard";
import UpcomingEvents from "./components/UpcomingEventsCard";

const Profile = () => {
	return (
		<Container fluid className="d-flex p-5">
			<Row>
				<Col xs={12} md={3} className="my-3">
					<Card>
						<Card.Body>
							<Card.Title>Profile Menu</Card.Title>
							<ListGroup variant="flush">
								<ListGroup.Item
									as={BaseLink}
									to={profileUrl}
									className="bg-light rounded-1"
								>
									<BsPersonFill className="me-2 rounded-circle" />
									Edit Profile
								</ListGroup.Item>
								<ListGroup.Item
									as={BaseLink}
									to={profileUrl}
									className="bg-light rounded-1"
								>
									<BsGear className="me-2 rounded-circle" />
									Account Settings
								</ListGroup.Item>
								<ListGroup.Item
									as={BaseLink}
									to={profileUrl}
									className="bg-light rounded-1"
								>
									<BsCashStack className="me-2 rounded-circle" />
									My Purchases & Subscriptions
								</ListGroup.Item>
								<ListGroup.Item
									as={BaseLink}
									to={profileUrl}
									className="bg-light rounded-1"
								>
									<BsFillStarFill className="me-2 rounded-circle" />
									My Reviews
								</ListGroup.Item>
							</ListGroup>
						</Card.Body>
					</Card>
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

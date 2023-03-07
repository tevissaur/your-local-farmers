import React from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import {
	BsCashStack,
	BsFillStarFill,
	BsGear,
	BsPersonFill,
} from "react-icons/bs";
import styled from "styled-components";
import { BaseLink } from "../../../components/BaseLink";
import { profileUrl } from "../../../services/constants.service";

const FarmMenu = () => {
	return (
		<Card>
			<Card.Body>
				<Card.Title>Farm Menu</Card.Title>
				<ListGroup variant="flush">
					<ListGroup.Item
						as={BaseLink}
						to={profileUrl}
						className="bg-light rounded-1"
					>
						<BsPersonFill className="me-2 rounded-circle" />
						Edit Farm Profile
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
						<BsCashStack className="me-2 rounded-circle" />
						Open Orders
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
	);
};

export default FarmMenu;

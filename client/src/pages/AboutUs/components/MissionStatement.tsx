import React from "react";
import styled from "styled-components";
import { Card, ListGroup } from "react-bootstrap";

export const StyledCardContainer = styled(Card)`
	margin: 20px auto;
	display: flex;
	flex-direction: column;
	background-color: ghostwhite;
	border-radius: 10px;
	border: 1px solid black;
	box-shadow: 1px 1px 0 black;
`;

const ListGroupContainer = styled(ListGroup)`
	border: 1px solid black;
	box-shadow: 2px 2px 0 black;
	margin: 10px;
`;

const MissionStatement = () => {
	return (
		<StyledCardContainer>
			<Card.Header className="display-6">
				Our Mission Statement!
			</Card.Header>
			<Card.Body>
				<ListGroupContainer>
					<ListGroup.Item>
						Support local farming communities
					</ListGroup.Item>

					<ListGroup.Item>
						To Raise awareness for developing and supporting those
						that generate goods in a renewable way
					</ListGroup.Item>

					<ListGroup.Item>
						Creating a community where people can get the food and
						resources they need to survive
					</ListGroup.Item>
				</ListGroupContainer>
			</Card.Body>
		</StyledCardContainer>
	);
};

export default MissionStatement;

import React from "react";
import styled from "styled-components";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";

const MissionContainer = styled(Container)`
	margin: "20px auto";
	display: "flex";
	flex-direction: "column";
	padding: "20px";
	width: "40%";
	background-color: "ghostwhite";
	border-radius: "10px";
	border: "1px solid black";
	box-shadow: "1px 1px 0 black";
`;

const MissionStatement = () => {
	return (
		<MissionContainer>
			<header>
				Our Mission Statement!
			</header>
			<ListGroup>
				<ListGroupItem>
					Support local farming communities
				</ListGroupItem>

				<ListGroupItem>
					To Raise awareness for developing and supporting those that
					generate goods in a renewable way
				</ListGroupItem>

				<ListGroupItem>
					Creating a community where people can get the food and
					resources they need to survive
				</ListGroupItem>
			</ListGroup>
		</MissionContainer>
	);
};

export default MissionStatement;

import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import slugify from "slugify";
import { RootState } from "../../../utils/store";
import { useSelector } from "react-redux";
import { IProduct } from "../../../interfaces/IProduct";
import { UrlParams } from "../../../interfaces/UrlParams";
import { Card, Col, Container, Row } from "react-bootstrap";
import { BaseLink } from "../../../components/BaseLink";
import { useAppSelector } from "../../../hooks";

const FarmInfo: React.FC = () => {
	const { name, story, address } = useAppSelector(
		(state) => state.farmStore.farm
	);
	const { fname } = useParams<UrlParams>();

	return (
		<Col xs={12} md={4}>
			<Card>
				<Card.Header>
					<Card.Title>{name}</Card.Title>
				</Card.Header>
				<Card.Body>
					<Card.Text>{story}</Card.Text>
					<Card.Text>{address}</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default FarmInfo;

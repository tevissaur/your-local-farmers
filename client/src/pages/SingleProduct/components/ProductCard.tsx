import { Box, Typography, Link } from "@mui/material";
import { Link as ReactLink, useParams } from "react-router-dom";
import React, { useEffect, FC } from "react";
import slugify from "slugify";
import { RootState } from "../../../utils/store";
import { useSelector } from "react-redux";
import { IProduct } from "../../../interfaces/IProduct";
import { UrlParams } from "../../../interfaces/UrlParams";
import { Card, Col, Container, Row } from "react-bootstrap";
import { BaseLink } from "../../../components/BaseLink";
import { BaseButton } from "../../../components/Buttons/BaseButton";
import { useAppSelector } from "../../../hooks";
import AddToCardBtn from "../../../components/Buttons/AddToCartBtn";


const FarmProduct: React.FC = () => {
	const { farm, product } = useAppSelector((state) => state.farmStore);
	const { fname } = useParams<UrlParams>();


	useEffect(() => {
		console.log(product);
	})


	return (
		<Col xs={12} sm={6}>
			<Card className="my-3">
				<Card.Header className="d-flex justify-content-between align-items-center">
					<Card.Title className="h5 d-flex">
						{product.name}
					</Card.Title>
				</Card.Header>
				<Card.Body>
					<AddToCardBtn product={product} />
					<div>
						<div>${product.price}</div>
					</div>

					<div>
						Available:{" "}
						<span style={{ fontWeight: "bolder" }}>
							{product.quantity?.amount}/{product.quantity?.type}
						</span>
					</div>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default FarmProduct;

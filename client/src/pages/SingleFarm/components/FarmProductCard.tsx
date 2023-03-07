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

export interface FarmProductProps {
	product: IProduct;
}

const FarmProduct: FC<FarmProductProps> = ({ product }) => {
	const {
		farmStore: { farm },
	} = useSelector((state: RootState) => state);
	const { fname } = useParams<UrlParams>();

	return (
		<Col xs={12} sm={6}>
			<Card className="my-3">
				<Card.Header
					as={BaseLink}
					to={`/farm/${slugify(fname ?? "", {
						lower: true,
					})}/store/product/${slugify(product.name, {
						lower: true,
					})}?fid=${farm._id}&pid=${product._id}`}
					className="d-flex justify-content-between align-items-center"
				>
					<Card.Title className="h5 d-flex">
						{product.name}
					</Card.Title>
				</Card.Header>
				<Card.Body>
					<BaseButton as={BaseLink}>Add to Cart</BaseButton>
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

import React from "react";
import { Box } from "@mui/material";
import { ICategory } from "../../../interfaces/ICategory";
import { Col, Container, Row } from "react-bootstrap";

function FarmCardAvailableGoods({ categories }: { categories: ICategory[] }) {
	return (
		<Container id="work">
			<Row>
				{categories.map((category) => (<Col>{category.name}</Col>))}
			</Row>
		</Container>
	);
}

export default FarmCardAvailableGoods;

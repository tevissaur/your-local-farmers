import React from "react";
import { Card, Col } from "react-bootstrap";
import slugify from 'slugify'
import styled from "styled-components";
import { LinkBase as Link } from "../../../components/LinkBase";

const CategoryImage = styled(Card.Img)`
	height: "125px";
	width: "125px";
	margin: "auto";
	border-radius: "50%";
`;

const SmallCategoryIcon: React.FC<any> = ({ data }) => {
	return (
		<Col>
			<Card>
				<Link
					to={`/category/${slugify(data.name, { lower: true })}?cid=${
						data._id
					}`}
				>
					<Card.Title>{data.name}</Card.Title>
					<CategoryImage src={"../../../assets/bakedGoods.jpg"} />
				</Link>
			</Card>
		</Col>
	);
};

export default SmallCategoryIcon;

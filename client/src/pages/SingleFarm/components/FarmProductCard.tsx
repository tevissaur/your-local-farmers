import { Box, Typography, Link } from "@mui/material";
import { Link as ReactLink, useParams } from "react-router-dom";
import React, { useEffect, FC } from "react";
import { imageSeeds } from "../../../imageSeeds";
import slugify from "slugify";
import store, { RootState } from "../../../utils/store";
import { useSelector } from "react-redux";
import { IProduct } from "../../../interfaces/IProduct";
import { UrlParams } from "../../../interfaces/UrlParams";

export interface FarmProductProps {
	product: IProduct;
}

const FarmProduct: FC<FarmProductProps> = ({ product }) => {

	const {
		farmStore: { farm },
	} = useSelector((state: RootState) => state);
	const { fname } = useParams<UrlParams>();
	
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignContent: "space-between",
				paddingX: 3,
			}}
		>
			<Link
				component={ReactLink}
				to={`/farm/${slugify(fname ?? '', {
					lower: true,
				})}/store/product/${slugify(product.name, {
					lower: true,
				})}?fid=${farm._id}&pid=${product._id}`}
			>
				<Box flexDirection="column" alignItems="center">
					<Typography fontSize="2xl">{product.name}</Typography>

					<Typography fontSize="2xl">${product.price}</Typography>
				</Box>
			</Link>

			<Typography>
				Available:{" "}
				<span style={{ fontWeight: "bolder" }}>
					{product.quantity?.amount}/{product.quantity?.type}
				</span>
			</Typography>
		</Box>
	);
};

export default FarmProduct;

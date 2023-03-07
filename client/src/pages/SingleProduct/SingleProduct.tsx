import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import UtilsService from "../../services/utils.service";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useGetProductQuery } from "../../utils/slices/search/search-api";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import {
	resetFarmData,
	setFarmData,
	setProduct,
} from "../../utils/slices/farm-store-slice";
import ProductCard from "./components/ProductCard";

const Product = () => {
	const dispatch = useAppDispatch();
	const { search } = useLocation();
	const { fid, pid } = UtilsService.getSearchParams(search);
	const { isLoading, isSuccess, isError, data, error } = useGetProductQuery(pid);

	useEffect(() => {
		if (isSuccess && !isLoading && data) {
			dispatch(setProduct(data));
		}
		console.log(data);
	}, [isLoading, data, error]);

	return (
		<Container fluid className="p-5">
			<Row>
				<ProductCard />
			</Row>
		</Container>
	);
};

export default Product;

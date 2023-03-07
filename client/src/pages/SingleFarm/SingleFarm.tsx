import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FarmProductCard from "./components/FarmProductCard";
import FarmReviews from "../../components/Reviews";
import UtilsService from "../../services/utils.service";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useGetFarmQuery } from "../../utils/slices/search/search-api";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import {
	resetFarmData,
	setFarmData,
} from "../../utils/slices/farm-store-slice";
import FarmInfo from "./components/FarmInfoCard";

const Farm = () => {
	const { _id, name, owners, products, story } = useAppSelector(
		(state) => state.farmStore.farm
	);
	const dispatch = useAppDispatch();
	const { search } = useLocation();
	const { fid } = UtilsService.getSearchParams(search);
	const { isLoading, isSuccess, isError, data, error } = useGetFarmQuery(fid);

	useEffect(() => {
		if (fid === _id) {
			dispatch(resetFarmData());
		}
	}, []);

	useEffect(() => {
		if (isSuccess && !isLoading && data) {
			dispatch(setFarmData(data));
		}
		console.log(data);
	}, [isLoading, data, error]);

	return (
		<Container fluid className="p-5">
			<Row>
				{isLoading ? (
					<>
						<Col>
							<Spinner animation="grow" />
						</Col>
					</>
				) : (
					<>
						<FarmInfo />
						<Col xs={12} md={8}>
							<Row>
								{products?.map((product) => (
									<FarmProductCard product={product} />
								))}
							</Row>
						</Col>
					</>
				)}
			</Row>
		</Container>
	);
};

export default Farm;

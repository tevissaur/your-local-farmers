import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_FARMS } from "../../../utils/queries";
import ProductCard from "../../../components/ProductCard";
import Footer from "../../../components/Footer/Footer";
import { Box } from "@mui/material";
import slugify from "slugify";
import React from "react";
import { IProduct } from "../../../interfaces/IProduct";
import { useSelector } from "react-redux";
import { RootState } from "../../../utils/store";

const FarmSearch = () => {
	const { search } = useSelector((state: RootState) => state);

	return (
		<>
			
		</>
	);
};

export default FarmSearch;

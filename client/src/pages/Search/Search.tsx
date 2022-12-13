import { useSearchParams } from "react-router-dom";
import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/store";
import { Outlet, useParams } from "react-router";

const Search = () => {
	const { search } = useSelector((state: RootState) => state);
	const [searchParams, setSearchParams] = useSearchParams();

	return (
		<>
			<Box m={4} flex="1" alignItems="center">
				<Outlet />
			</Box>
		</>
	);
};

export default Search;

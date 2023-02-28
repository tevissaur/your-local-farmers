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

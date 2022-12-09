import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Link as ReactLink } from "react-router-dom";
import store, { RootState } from "../../../utils/store";
import { setTopFarms } from "../../../utils/actions";
import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import SmallFarmsIcon from "./SmallFarmsIcon";
import { useSelector } from "react-redux";

const TopFarmsWidget = () => {
	const {
		search: { farms },
	} = useSelector((state: RootState) => state);

	// useEffect(() => {
	// 	loading
	// 		? console.log(loading)
	// 		: store.dispatch(setTopFarms(data?.farms));
	// }, [data, loading, error]);

	return (
		<>
			<Box
				sx={{
					display: "flex",
					position: "relative",
					flexDirection: "column",
					justifyContent: "center",
					flexWrap: "wrap",
					margin: "40px auto",
				}}
			>
				<Box sx={{ display: "flex", justifyContent: "space-between" }}>
					<Typography
						variant="h5"
						sx={{
							marginY: "10px",
							fontSize: "28px",
						}}
					>
						Here Are Some Of Our Top Farmers
					</Typography>
					<Typography
						variant="h5"
						sx={{
							marginY: "10px",
							fontSize: "20px",
							alignSelf: "center",
						}}
					>
						<Link
							component={ReactLink}
							to="/farms"
							underline="none"
							sx={{ ":hover": { textDecoration: "underline" } }}
						>
							See More
						</Link>
					</Typography>
				</Box>
				<Box
					sx={{
						margin: "5px auto",
						display: "flex",
						flexWrap: "wrap",
					}}
				>
					{farms?.map((farm, index) => {
						return (
							<SmallFarmsIcon
								key={farm._id}
								id={farm._id}
								name={farm.name}
							/>
						);
					})}
				</Box>
			</Box>
		</>
	);
};

export default TopFarmsWidget;

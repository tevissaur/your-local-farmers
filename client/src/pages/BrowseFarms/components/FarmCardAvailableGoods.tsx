import React from "react";
import { BiCookie } from "react-icons/bi";
import { ImMug } from "react-icons/im";
import {
	GiGrainBundle,
	GiFruitBowl,
	GiMeatCleaver,
	GiFlowerPot,
} from "react-icons/gi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsFillCloudSunFill } from "react-icons/bs";
import { Box } from "@mui/material";
import { ICategory } from "../../../interfaces/ICategory";

function FarmCardAvailableGoods({ categories }: { categories: Array<ICategory> }) {
	return (
		<Box id="work">
			{categories.map((category) => {
				switch (category) {
					// case "Baked Goods":
					// 	return <BiCookie fontSize="25px" key={1} />;
					// case "Dairy, Meat & Eggs":
					// 	return <GiMeatCleaver fontSize="25px" key={2} />;
					// case "Flowers & Plants":
					// 	return <GiFlowerPot fontSize="25px" key={3} />;
					// case "Fruits & Vegetables":
					// 	return <GiFruitBowl fontSize="25px" key={4} />;
					// case "Seasonal Stuffs":
					// 	return <BsFillCloudSunFill fontSize="25px" key={5} />;
					// case "Beverages":
					// 	return <ImMug fontSize="25px" key={6} />;
				}
			})}
		</Box>
	);
}

export default FarmCardAvailableGoods;

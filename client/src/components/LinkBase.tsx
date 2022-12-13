import { Link as ReactLink } from "react-router-dom";
import Link from "@mui/material/Link";
import { useDispatch } from "react-redux";
import React from "react";

export const LinkBase = ({
	to,
	children,
}: {
	to: string;
	children: Array<React.Component>;
}) => {
	const dispatch = useDispatch();

	const handleClick = () => {
		let pageUrl = to.split("/")[1];
	};
	return (
		<Link
			to={to}
			component={ReactLink}
			onClick={handleClick}
			underline="none"
		>
			{children}
		</Link>
	);
};

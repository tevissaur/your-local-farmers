import ReviewButton from "./Buttons/ReviewButton";
import AuthService from "../services/authentication.service";
import { AiFillStar } from "react-icons/ai";
import { Box, Container, Typography } from "@mui/material";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IReview } from "../interfaces/IReview";
import { RootState } from "../utils/store";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";


const ReviewContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

const ReviewRow = styled(Row)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ReviewCol = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Reviews = () => {
	const {
		farmStore: { product, farm },
		user: { loggedIn },
	} = useSelector((state: RootState) => state);
	const dispatch = useDispatch();

	return (
		<ReviewContainer>
			<ReviewRow flexDirection="column" alignItems="center">
				<Typography fontSize="sm">
					Based on {farm.reviews?.length} reviews
				</Typography>
			</ReviewRow>

			<Box
				sx={{
					width: "40%",
				}}
			>
				{farm.reviews?.map((review: IReview) => (
					<Box m="15px" key={review._id}>
						<Box>
							{Array(review.rating)
								.fill(0)
								.map(() => (
									<AiFillStar color="green" />
								))}
						</Box>

						<Box gap={6}>
							<Box>
								<RiDoubleQuotesL />
								<Typography fontSize="sm">
									{review.content}
								</Typography>
								<RiDoubleQuotesR />
							</Box>

							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "start",
								}}
							>
								<BsPersonFill />
								<Typography
									sx={{
										margin: "5px 10px",
										fontSize: "18px",
										fontWeight: "bold",
									}}
								>
									{review.author.firstName}
								</Typography>
							</Box>
						</Box>
					</Box>
				))}
			</Box>
			{AuthService.loggedIn() && loggedIn ? <ReviewButton /> : <></>}
		</ReviewContainer>
	);
};

export default Reviews;

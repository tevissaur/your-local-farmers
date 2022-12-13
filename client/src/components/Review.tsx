import ReviewButton from "../components/Buttons/ReviewButton";
import AuthService from "../services/authentication.service";
import { AiFillStar } from "react-icons/ai";
import { Box, Typography } from "@mui/material";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IReview } from "../interfaces/IReview";
import { RootState } from "../utils/store";

const Reviews = () => {
    const {
		farmStore: { product, farm },
		user: { loggedIn },
	} = useSelector((state: RootState) => state);
    const dispatch = useDispatch();
    
    return (
        <>
            <Box>
                <Box flexDirection="column" alignItems="center">
                    <Box>
                        {/* <AiFillStar fontSize="15px"/>
                        <AiFillStar fontSize="15px"/>
                        <AiFillStar fontSize="15px"/>
                        <AiFillStar fontSize="15px"/> */}
                    </Box>
                    <Typography fontSize="sm">
                        Based on {farm.reviews?.length} reviews
                    </Typography>

                </Box>

            </Box>
            <Box sx={{
                width: '40%'
            }}>
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

                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'start'
                            }}>
                                <BsPersonFill />
                                <Typography sx={{
                                    margin: '5px 10px',
                                    fontSize: '18px',
                                    fontWeight: 'bold'
                                }}>{review.author.firstName}</Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
            {AuthService.loggedIn() && loggedIn ? (<ReviewButton />) : (<></>)}

        </>
    )
}

export default Reviews
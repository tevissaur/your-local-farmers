import ReviewButton from "../../../components/Buttons/ReviewButton";
import AuthService from "../../../utils/auth";
import { AiFillStar } from "react-icons/ai";
import { Box, Typography } from "@mui/material";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";
import store from "../../../utils/store";

const FarmReviews = () => {
    const { profile: { loggedIn }, browseFarms: { singleFarm: { reviews } } } = store.getState()

    return (
        <>
            <Box
                p="10px"
                backgroundColor="darkGreen"
                borderRadius="25px"
                color="yellowGreen"
                justifyContent="space-between"
            >
                <Box flexDirection="column" alignItems="center">
                    <Box>
                        {/* <AiFillStar fontSize="15px"/>
                        <AiFillStar fontSize="15px"/>
                        <AiFillStar fontSize="15px"/>
                        <AiFillStar fontSize="15px"/> */}
                    </Box>
                    <Typography fontSize="sm">
                        Based on {reviews?.length} reviews
                    </Typography>

                </Box>

            </Box>
            <Box sx={{
                width: '40%'
            }}>
                {reviews?.map((review, idx) => (
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

export default FarmReviews
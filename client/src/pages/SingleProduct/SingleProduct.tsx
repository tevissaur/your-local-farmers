import { useLocation } from "react-router-dom";
import { BsFillHouseFill } from "react-icons/bs";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import Auth from "../../services/authentication.service";
import UtilsService from "../../services/utils.service";
import { useEffect } from "react";
import ReviewButton from "../../components/Buttons/ReviewButton";
import { Box, Typography } from "@mui/material";
import AddToCardBtn from "../../components/Buttons/AddToCartBtn";
import store, { RootState } from "../../utils/store";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { setProduct } from "../../utils/slices/farm-store-slice";
import { useGetProductQuery } from "../../services/api.service";

const Product = () => {
	const {
		farmStore: { product, farm },
		user: { loggedIn },
		ui: { modal: { open } }
	} = useSelector((state: RootState) => state);

	const dispatch = useDispatch();
	
	const { search } = useLocation();
	const { pid } = UtilsService.getSearchParams(search);

	const { isLoading, data, error, isError } = useGetProductQuery(pid);

	useEffect(() => {
		isLoading ? null : dispatch(setProduct(data));
	}, [isLoading, data]);

	return (
		<>
			{isLoading ? (
				<></>
			) : (
				<Box m={4} flex="1" alignItems="center">
					<Box>
						<Box>
							{/* <img src={productImage} style={{ width: "300px" }} /> */}

							<Box m="30px">
								{/* <Link to={`/farm/${slugify(product?.farm?.name, { lower: true })}${fid}`}>
                  </Link> */}
								<Box>
									<Typography
										fontSize="2xl"
										color="primary.darkGreen"
									>
										{farm.name}
									</Typography>
									{<BsFillHouseFill />}
								</Box>
								<Typography
									fontSize="2xl"
									px="4px"
									style={{ fontWeight: "bolder" }}
								>
									{product?.name}
								</Typography>
								<Box>
									<Typography>Available :</Typography>
									<Typography
										color="primary.darkGreen"
										style={{ fontWeight: "bolder" }}
									>
										{product?.quantity?.amount} /
										{product?.quantity?.type}
									</Typography>
								</Box>
								<Box>
									<Box>
										<Typography fontSize="2xl">
											$ {product?.price}.00
										</Typography>
									</Box>
									{Auth.loggedIn() && loggedIn ? (
										<AddToCardBtn product={product} />
									) : (
										""
									)}
								</Box>
							</Box>
						</Box>
					</Box>
					<Box>
						<Typography
							fontSize="2xl"
							px="4px"
							sx={{
								fontWeight: "bolder",
							}}
							mb={5}
						>
							Customer Review
						</Typography>
						{/* {reviews.map((review,idx) => (
              <h1 key={idx}>{review.content}</h1>
            ))} */}

						{product.reviews?.map((review, idx) => (
							<Box m="15px" key={idx}>
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
										<Typography>
											{review.content}...
										</Typography>
										<RiDoubleQuotesR />
									</Box>

									<Box alignItems="center">
										<BsPersonFill />
										<Typography>{review.author}</Typography>
									</Box>
								</Box>
							</Box>
						))}
						<Box>
							<Box flexDirection="column" alignItems="center">
								<Box>
									<AiFillStar fontSize="15px" />
									<AiFillStar fontSize="15px" />
									<AiFillStar fontSize="15px" />
									<AiFillStar fontSize="15px" />
								</Box>
								<Typography fontSize="sm">
									Based on {product.reviews?.length} reviews
								</Typography>
								{Auth.loggedIn() ? <ReviewButton /> : ""}
							</Box>
						</Box>
					</Box>
				</Box>
			)}
		</>
	);
};
export default Product;

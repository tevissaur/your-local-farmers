import { useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { BsFillHouseFill } from "react-icons/bs";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { QUERY_PRODUCT } from "../../utils/queries";
import Auth from "../../utils/auth";
import UtilsService from '../../services/utils.service';
import { useEffect } from "react";
import ReviewButton from "../../components/Buttons/ReviewButton";
import { Box, Typography } from "@mui/material";
import AddToCardBtn from "../../components/Buttons/AddToCartBtn";
import store from "../../utils/store";
import { setSingleProduct } from "../../resources/product/product.actions";


const Product = () => {
  const { product: { product }, profile: { loggedIn } } = store.getState()


  const { search } = useLocation()
  const { pid } = UtilsService.getSearchParams(search)

  const {
    loading: productLoading,
    data: productData,
    error: productError } = useQuery(QUERY_PRODUCT, { variables: { id: pid } })


  useEffect(() => {

    productLoading ? console.log(productLoading) : store.dispatch(setSingleProduct(productData.oneProduct))

  }, [productLoading, productData])



  



  return (
    <>
      {productLoading ? (
        <></>
      ) : (
        <Box>
          <Box m={4} flex="1" alignItems="center">

            <Box
              border="green 2px solid"
              alignItems="stretch"
              justifyItems="center"
              backgroundColor="lightyellow"
              padding={5}
              margin={10}
            >
              <Box>
                {/* <img src={productImage} style={{ width: "300px" }} /> */}



                <Box m="30px">
                  {/* <Link to={`/farm/${slugify(product?.farm?.name, { lower: true })}${fid}`}>
                  </Link> */}
                  <Box>
                    <Typography fontSize="2xl" color="primary.darkGreen">
                      {product?.farm?.name}
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
                      {product?.quantity}
                    </Typography>
                  </Box>
                  <Box>
                    <Box>
                      <Typography fontSize="2xl">$ {product?.price}.00</Typography>
                    </Box>
                    {Auth.loggedIn() && loggedIn ? (
                      <AddToCardBtn product={product} />
                    ) : ("")}

                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              border="green 2px solid"
              alignItems="stretch"
              justifyItems="center"
              backgroundColor="lightyellow"
              padding={5}
              mx={10}
            >
              <Typography
                fontSize="2xl"
                px="4px"
                sx={{ fontWeight: "bolder" }}
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
                      <Typography>{review.content}...</Typography>
                      <RiDoubleQuotesR />
                    </Box>

                    <Box alignItems="center">
                      <BsPersonFill />
                      <Typography>{review.author.firstName}</Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
              <Box
                p="10px"
                backgroundColor="darkGreen"
                color="yellowGreen"
                justifyContent="center"
                mt="10px"
              >
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
                  {Auth.loggedIn() ? (
                    <ReviewButton />
                  ) : (
                    ""
                  )}
                </Box>
              </Box>
            </Box>

          </Box>
        </Box>
      )}
    </>
  )
}
export default Product;
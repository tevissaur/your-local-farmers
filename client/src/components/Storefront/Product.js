import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { BsFillHouseFill } from "react-icons/bs";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { imageSeeds } from "../../imageSeeds";
import { QUERY_FARMS, QUERY_PRODUCT } from "../../utils/queries";
import Auth from "../../utils/auth";
import { useEffect, useState, useRef } from "react";
import ReviewButton from "./ReviewButton";
import { Box, Typography, Button } from "@mui/material";
import store from "../../utils/store";
import { setSingleProduct } from "../../utils/actions";

const Product = ({ cartItems, setCartItems }) => {
  const { product: { product } } = store.getState()
  const [inputText, setInputText] = useState("");
  const [rating, setRating] = useState("");

  // const [reviews, setReviews] = useState("");
  const [dataReviews, setDataReviews] = useState([]);

  const { fid, pid } = useParams();
  const {
    loading: productLoading,
    data: productData,
    error: productError } = useQuery(QUERY_PRODUCT, { variables: { id: pid } })
  useEffect(() => {
    productLoading ? console.log(productLoading) : store.dispatch(setSingleProduct(productData.oneProduct))
    console.log(product)
  }, [productLoading, productData])

  if (productLoading) {
    return "loading";
  }


  const handleAddToCart = (product) => {

    console.log('test')
    const productExist = cartItems.find((item) => item._id === product._id)
    if (productExist) {
      setCartItems(cartItems.map((item) => item._id === product._id ? { ...productExist, quantity: productExist.quantity + 1 } : item))
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }



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
                      Based on {dataReviews.length} reviews
                    </Typography>
                    {Auth.loggedIn() ? (
                      <ReviewButton
                        inputText={inputText}
                        setInputText={setInputText}
                        reviews={dataReviews}
                        setReviews={setDataReviews}
                        product={product}
                        rating={rating}
                        setRating={setRating}
                      />
                    ) : (
                      ""
                    )}
                  </Box>
                </Box>

                <Box m="30px">
                  <Link to={`/farm/${fid}`}>
                    <Box>
                      <Typography fontSize="2xl" color="primary.darkGreen">
                        {product?.farm?.name}
                      </Typography>
                      {<BsFillHouseFill />}
                    </Box>
                  </Link>
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
                    {Auth.loggedIn() ? (
                      <Button
                        leftIcon={<CgShoppingCart fontSize="20px" />}
                        backgroundColor="primary.lightGreen"
                        variant="solid"
                        fontSize="sm"
                      >
                        Add To Cart
                      </Button>
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

              {dataReviews.map((review, idx) => (
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
            </Box>
          </Box>
        </Box>
      )}
    </>
  )
}
export default Product;
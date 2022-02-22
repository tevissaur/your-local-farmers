import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { BsFillHouseFill } from "react-icons/bs";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { imageSeeds } from "../../imageSeeds";
import { QUERY_PRODUCTS, QUERY_FARM } from "../../utils/queries";
import Auth from "../../utils/auth";
import { useEffect, useState, useRef } from "react";
import ReviewButton from "./ReviewButton";
import { Box, Typography, Button } from "@mui/material";

const Product = ({cartItems,setCartItems}) => {
  const [inputText, setInputText] = useState("");
  const [rating, setRating] = useState("");

  // const [reviews, setReviews] = useState("");
  const [dataReviews, setDataReviews] = useState([]);
  

  const handleLogOut = () => {
    Auth.logout();
  };

  const { id } = useParams();
  const {
    loading: productLoading,
    data: productData,
    error: productError,
  } = useQuery(QUERY_PRODUCTS);
  const {
    loading: farmLoading,
    data: farmData,
    error: farmError,
  } = useQuery(QUERY_FARM);

  const productList = productData ? productData.products : [];
  const foundProduct = productList.find((product) => product._id === id);
  console.log(foundProduct)

  useEffect(() => {
    if (foundProduct) {
      setDataReviews([...foundProduct.reviews].reverse());
    }
  }, [foundProduct]);

  if (productLoading || farmLoading) {
    return "loading";
  }

  // console.log(foundProduct);
  const farmList = farmData ? farmData.farms : [];
  const farm = farmList.find((farm) => {
    const foundFarmProduct = farm.products.find(
      (product) => product._id === id
    );
    return foundFarmProduct ? farm : {};
  });

  // finding image matched product from seed
  const cardArr = imageSeeds.map((card) => card);
  const foundProductImage = cardArr
    .filter((arr) => arr.name === foundProduct.name)
    .map((card) => card.img);

  const handleAddToCart = (product)=>{
  
    console.log('test')
    const productExist = cartItems.find((item) => item._id === product._id)
    if(productExist){
      setCartItems(cartItems.map((item) => item._id === product._id ? {...productExist, quantity: productExist.quantity + 1} : item))
    } else {
      setCartItems([...cartItems,{...product, quantity: 1} ])
    }
  }
  

  return (
    <>
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
              <Box>
                <img src={foundProductImage} style={{ width: "300px" }} />

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
                        product={foundProduct}
                        rating={rating}
                        setRating={setRating}
                      />
                    ) : (
                      ""
                    )}
                  </Box>
                </Box>
              </Box>

              <Box m="30px">
                <Link to={`/farm/${farm.name.toLowerCase()}`}>
                  <Box>
                    <Typography fontSize="2xl" color="primary.darkGreen">
                      {farm.name}
                    </Typography>
                    {<BsFillHouseFill />}
                  </Box>
                </Link>
                <Typography
                  fontSize="2xl"
                  px="4px"
                  px="10px"
                  style={{ fontWeight: "bolder" }}
                >
                  {foundProduct.name}
                </Typography>
                [product's description]
                <Box>
                  <Typography>Available :</Typography>
                  <Typography
                    color="primary.darkGreen"
                    style={{ fontWeight: "bolder" }}
                  >
                    {foundProduct.quantity}
                  </Typography>
                </Box>
                <Box>
                  <Box>
                    <Typography fontSize="2xl">$ {foundProduct.price}.00</Typography>
                  </Box>
                  {Auth.loggedIn() ? (
                    <Button
                    leftIcon={<CgShoppingCart fontSize="20px" />}
                    backgroundColor="primary.lightGreen"
                    variant="solid"
                    fontSize="sm"
                    onClick={() => handleAddToCart(foundProduct)}
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
              px="10px"
              style={{ fontWeight: "bolder" }}
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
    </>
  )
}
export default Product;
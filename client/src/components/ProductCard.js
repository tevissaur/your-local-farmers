import { Link } from "react-router-dom";
import { imageSeeds } from "../imageSeeds";
import slugify from 'slugify'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";




const ProductCard = ({ product }) => {

  //finding image matched product from seed
  const cardArr = imageSeeds.map((card) => card);

  const foundProduct = cardArr.filter((arr) => arr.name === product.name);

  const foundProductImage = foundProduct.map((card) => card.img);

  return (
    <>
      <Box p="10px" flex="50%">
        <Box border="green 2px solid" borderRadius="25px" height="100%" width="100%">
          <Box component='img' src={foundProductImage} style={{ borderRadius: "25px", width: "100%" }} />
          <Link to={`/products/${product._id}`}>
            <Box justifyContent="space-between">
              <Typography
                px="4px"
                style={{
                  fontWeight: "bolder",
                  textDecoration: 'none'
                }}
              >
                {product.name}
              </Typography>
              <Box alignItems="center" justifyContent="end" padding="4px">
                <Typography fontSize="2xl">${product.price}</Typography>
              </Box>
            </Box>
          </Link>
          <Box px="10px">
            <Box>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </Box>
            <small>Based on {product.reviews.length} reviews</small>
          </Box>

          <Box p="10px">
            <Typography>
              Available:
              <span style={{ fontWeight: "bolder" }}>
                {` ${product.quantity} `}
              </span>
              from
            </Typography>

            <Link to={`/farm/${slugify(product.farm.name, { lower: true })}`}>
              <Typography fontSize="2xl" color="primary.darkGreen">
                {product.farm.name}
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductCard;

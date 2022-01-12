import { Flex, Box, Spacer, Grid, GridItem } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { imageSeeds } from "../imageSeeds";

const Product = ({ product }) => {
  const cardArr = imageSeeds.map((card) => card);

  const foundProductCard = cardArr.filter((arr) => arr.name === product.name);

  const foundProductImage = foundProductCard.map((card) => card.img);
  console.log(foundProductImage);

  return (
    <>
    <h1>
        {product.name} ----{product.price}--- {product.quantity}
      </h1>
      <img src={foundProductImage} style={{width:"150px", height:"100px"}} />

    
      <Link to={`/farm/${product.farm.name.toLowerCase()}`}>{product.farm.name}</Link>
      {product.reviews.map((review, idx) => (
        <h1 key={idx}>
          {review.content}-----{review.rating} -----{review.author.firstName}
        </h1>
      ))}
      --------------------------------------------------
      --------------------------------------------------
    </>
  );
};

export default Product;

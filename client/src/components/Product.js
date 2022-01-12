import { Flex, Box, Spacer, Grid, GridItem } from "@chakra-ui/react";

const Product = ({ product }) => {
  console.log(product)
  return (
    <>
      <h1>{product.name} ----{product.price}--- {product.quantity}</h1>
      <h1>{product.farm.name}</h1>
      {product.reviews.map((review,idx) =>(
        
        <h1 key={idx}>{review.content}-----{review.rating} -----{review.author.firstName}</h1>
       
      
        
      ))}
      {/* <p>Price: {product.price}</p>
      <h1>Quantity : {product.quantity}</h1>
      Reviews:{" "}
      {product.reviews.map((review, idx) => (
        <h1 key={idx}>
          {review.content} {review.rating}
        </h1>
      ))}
      {product.farms.map((farm, idx) => (
        <h1 key={idx}>Farm that has it {farm.name} </h1>
      ))}
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem w="100%" h="10" bg="blue.500" />
        
      </Grid> */}
    </>
  );
};

export default Product;

import { Flex, Box ,Spacer} from "@chakra-ui/react";

const Product = ({ product }) => {
  return (
    <Flex>
      <h1>{product.name}</h1>
      <Spacer />
      <p>Price: {product.price}</p>
      <Spacer />
      <h1>Quantity : {product.quantity}</h1>
      <Spacer />
       Reviews: {product.reviews.map((review,idx)=> (
        <h1 key={idx}>{review.content} {review.rating}</h1>
      ))}
    </Flex>
  );
};

export default Product;

import { Box } from "@chakra-ui/react";

const CategoryCard = ({ card }) => {
  console.log(card);
  return (
    <>
      <Box m="1px">
      <img 
      src={card.image}
      style={{ width: "450px", height: "250px" }}
        />

      </Box>

    
    </>
  );
};

export default CategoryCard;

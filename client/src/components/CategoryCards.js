import CategoryCard from "./CategoryCard";
import { Flex, Box } from "@chakra-ui/react";
import categoryPhoto1 from "../assets/categoryPhoto1.jpg";
import categoryPhoto2 from "../assets/categoryPhoto2.jpg";
import categoryPhoto3 from "../assets/categoryPhoto3.jpg";

const CategoryCards = () => {
  const categoryPhotos = [
    {
      image: categoryPhoto1,
    },
    {
      image: categoryPhoto2,
    },
    {
      image: categoryPhoto3,
    },
  ];

  return (
    <Flex>
      {categoryPhotos.map((card, index) => (
        <CategoryCard key={index} card={card} />
      ))}
    </Flex>
  );
};

export default CategoryCards;

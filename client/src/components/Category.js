import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_FARM } from "../utils/queries";
import {
  Box,
  Flex,
} from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import customeTheme from "../extendedTheme";
import SideNavBar from "./SideNavBar";
import Header from "./Header";
import Footer from "./Footer";
const Category = () => {
  const { name } = useParams();
  console.log(name);
  const { loading, data, error } = useQuery(QUERY_FARM);

  const farmList = data ? data.farms : [];
  const allProducts = farmList
    .map((farm) => {
      const productWithFarm = farm.products.map((product) => {
        return { ...product, farm };
      });
      return productWithFarm;
    })
    .flat();
  const foundProducts = allProducts.filter((product) => {
    return product.categories.find(
      (category) => category.name.toLowerCase() === name
    );
  });

  return (
    <>
      <Flex >
        <SideNavBar />
        <Box m={4} flex="1" alignItems="center">
       

          <Flex
            borderRadius="25px"

            border="green 2px solid"
            alignItems="stretch"
            justifyItems="center"
            backgroundColor="lightyellow"
            padding={5}
            margin={20}
        
            flexWrap="wrap"



          >
            {foundProducts.map((product, idx) => (
              <ProductCard key={idx} product={product} />
            ))}
          </Flex>
          <Footer />
        </Box>
      </Flex>
    </>
  );
};

export default Category;
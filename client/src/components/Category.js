import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCT, QUERY_FARM } from "../utils/queries";
import { Flex, Box } from '@chakra-ui/react'
import Product from "./Product"
import customeTheme from "../extendedTheme";
import SideNavBar from "./SideNavBar";
import Header from "./Header";

const Category = () => {
  const { name } = useParams();
  console.log(name);
  const { loading: productLoading, data: productData, error: productError } = useQuery(QUERY_PRODUCT)
  const { loading: farmLoading, data: farmData, error: farmError } = useQuery(QUERY_FARM)


  const farmList = farmData ? farmData.farms : [];
  const allProducts = productData ? productData.products : []
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
      <Flex>
        <SideNavBar />
        <Box m={4} flex="1">
          <Header />

          <Flex
            borderRadius="25px"
            border="green 2px solid"
            alignItems="stretch"
            backgroundColor="lightyellow"
            padding={5}
            flex="50%"
            flexWrap="wrap"



          >
            {foundProducts.map((product, idx) => (
              <Product key={idx} product={product} />
            ))}
          </Flex>
        </Box >
      </Flex >
    </>
  );
};

export default Category;

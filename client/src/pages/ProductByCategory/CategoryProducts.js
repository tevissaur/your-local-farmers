import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_FARMS } from "../../utils/queries";
import ProductCard from "../../components/ProductCard";
import Footer from "../../components/Footer/Footer";
import { Box } from "@mui/material";


const Category = () => {
  const { name } = useParams();
  console.log(name);
  const { loading, data, error } = useQuery(QUERY_FARMS);

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
      <Box>
        <Box m={4} flex="1" alignItems="center">
       

          <Box
            borderRadius="25px"

            border="green 2px solid"
            alignItems="stretch"
            justifyItems="center"
            backgroundColor="lightyellow"
            padding={5}
            margin={20}
            flexWrap="wrap" >
            {foundProducts.map((product, idx) => (
              <ProductCard key={idx} product={product} />
            ))}
          </Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Category;
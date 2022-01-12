import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCT, QUERY_FARM } from "../utils/queries";
import Product from "./Product"

const Category = () => {
  const { name } = useParams()
  //  const foundCategory = data.find(category => category.title.toLowerCase() === title)
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
  console.log(foundProducts)


  return (
    <>
      {/* {foundProducts.map((product, idx) => (
        <Product key={idx} product={product} />
      ))} */}

    </>
  )
}

export default Category

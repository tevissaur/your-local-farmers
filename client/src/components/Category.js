import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {QUERY_PRODUCT,QUERY_FARM} from "../utils/queries";
import Product from "./Product"

const Category= () => {
 const {name} = useParams()
//  const foundCategory = data.find(category => category.title.toLowerCase() === title)
 const {loading: productLoading, data:productData, error: productError} = useQuery(QUERY_PRODUCT)
 const {loading: farmLoading, data: farmData, error: farmError} = useQuery(QUERY_FARM)



 const productList = productData? productData.products : []
 const foundProducts = productList.filter((product) => {
    return product.categories.find((category)=> category.name.toLowerCase() === name)
 })

 const farmList = farmData ? farmData.farms : []
 
const foundProductsWithFarms = foundProducts.map((product) => {
  const farms = farmList.filter((farm) => {
     return farm.products.find((farmProduct) => farmProduct._id === product._id)
  })
  return {...product, farms}
}) 
console.log(foundProductsWithFarms)

  return (
    <div>
      <h1> Category Name :{name}</h1>
      {foundProductsWithFarms.map((product,idx) =>(
        <Product key={idx} product={product}/>
      ))}
     
    </div>
  )
}

export default Category

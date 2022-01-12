import {useParams} from "react-router-dom"

const ProductCard = () => {
  const {id} =useParams()
  return (
    <div>
      product card {id}
    </div>
  )
}

export default ProductCard

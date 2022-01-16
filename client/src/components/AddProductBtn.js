import { Button } from "@chakra-ui/react"

const AddProductBtn = ({handleAddToCart,foundProduct}) => {
  return (
    <div>
       <Button onClick={() => handleAddToCart(foundProduct)}>+</Button>
    </div>
  )
}

export default AddProductBtn

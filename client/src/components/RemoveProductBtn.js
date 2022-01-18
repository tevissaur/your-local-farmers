import React from 'react'
import { Button } from "@chakra-ui/react"
const RemoveProductBtn = ({handleRemoveProduct, foundProduct}) => {
  return (
    <div>
       <Button onClick={() => handleRemoveProduct(foundProduct)}>-</Button> 
    </div>
  )
}

export default RemoveProductBtn

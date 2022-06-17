
import { BaseButton as Button } from "./BaseButton";
import store from "../../utils/store";
import { setCartItems } from "../../resources/cart/cart.actions";
import { useEffect } from "react";

const AddToCardBtn = ({ product }) => {
  const { product: { product: p }, cart: { items } } = store.getState()

  const handleAddToCart = () => {
    const { name, _id, price, farm } = product
    store.dispatch(setCartItems({
        name,
        product: {
          _id,
          price,
          farm,
          quantity: 1
        }
    }))
  } 

  useEffect(() => {
    console.log(items)
  }, [items])


  return (
      <Button onClick={handleAddToCart}>
        Add To Cart
      </Button>
  )
}

export default AddToCardBtn

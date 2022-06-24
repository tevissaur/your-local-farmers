
import { BaseButton as Button } from "./BaseButton";
import store from "../../utils/store";
import { setCartItems, setCartArray } from "../../resources/cart/cart.actions";
import { useEffect } from "react";
import UtilsService from "../../services/utils.service";

const AddToCardBtn = ({ product }) => {
  const { product: { product: p }, cart: { items } } = store.getState()

  const handleAddToCart = () => {
    const { name, _id, price, farm } = product
    localStorage.setItem('cart', JSON.stringify({
      ...items,
      [name]: {
        _id,
        price,
        farm,
        quantity: 1
      }
    }))
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
    store.dispatch(setCartArray(UtilsService.cartItemsToArray(items)))
  }, [items])


  return (
    <Button onClick={handleAddToCart}>
      Add To Cart
    </Button>
  )
}

export default AddToCardBtn

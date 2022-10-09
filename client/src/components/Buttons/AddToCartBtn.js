
import { BaseButton as Button } from "./BaseButton";
import store from "../../utils/store";
import { setCartItems } from "../../resources/cart/cart.actions";
import { useEffect } from "react";
import UtilsService from "../../services/utils.service";
import AuthService from "../../services/authentication.service"
import { UPDATE_CART } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import { useLocation } from "react-router-dom";

const AddToCardBtn = ({ product }) => {
  const { cart: { items } } = store.getState()
  const { search } = useLocation()
  const { data: { _id } } = AuthService.getProfile()
  const { fid, pid } = UtilsService.getSearchParams(search)
  const [updateCart] = useMutation(UPDATE_CART)

  
  const handleAddToCart = async () => {
    
    const newItem = {
      price: product.price,
      quantity: {
        type: product.quantity.type,
        amount: product.quantity.amount
      },
      farmID: fid,
      productID: pid
    }
    if (UtilsService.isCartDuplicate(items, newItem)) {
      window.alert("This item is already in your cart!")
      return
    }
    const cartInput = {
      owner: _id,
      cart: [...items, newItem]
    }
    const { data: { updateCart: { cart } } } = await updateCart({
      variables: {
        cart: {
          ...cartInput
        }
      }
    })
    console.log(cart)
    let cleanedCart = cart.map(item => {
      return {
        price: item.price,
        quantity: {
          type: item.quantity.type,
          amount: item.quantity.amount
        },
        dateAdded: item.dateAdded,
        farmID: item.farmID,
        productID: item.productID
      }

    })
    console.log(cleanedCart)
    await store.dispatch(setCartItems(cleanedCart))


  }

  useEffect(() => {


  }, [items])


  return (
    <Button onClick={handleAddToCart}>
      Add To Cart
    </Button>
  )
}

export default AddToCardBtn

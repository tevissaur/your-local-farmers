import { gql } from 'graphql'

class CartController {

    // Calls createPO mutation
    static CREATE_PO = gql`
        mutation createPO($PO: NewPurchaseOrder) {
            createPO(PO: $PO) {
                seller{
                    name
                }
                buyer {
                    firstName
                }
                dateCreated
                items {
                    name
                }
                pickUpTime
                orderTotal
            }
        }
`
    static UPDATE_CART = gql`
        mutation updateCart($cart: CartInput) {
            updateCart(cart: $cart) {
                cart
            }
        }
    `
}

export default new CartController()
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
}

export default new CartController()
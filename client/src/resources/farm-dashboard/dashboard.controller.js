export const GET_MY_FARM = `
    query FarmDashboard($id: ID!) {
      farmDashboard(_id: $id) {
        _id
        name
        address
        story
        products {
          _id
          name
          price
          quantity {
            amount
            type
          }
          categories { 
            name
          }
        }
        purchaseOrders {
          _id
          seller {
            _id
          }
          items {
            _id
            name
          }
          buyer{
            _id
            firstName
          }
          dateCreated
          orderTotal
        }
      }
    }
`
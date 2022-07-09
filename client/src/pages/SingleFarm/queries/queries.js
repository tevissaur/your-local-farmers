

export const SINGLE_FARM = `query FarmStore($id: ID!) {
    farmStore(_id: $id) {
      _id
      name
      address
      story
      reviews {
        _id
        author{
          firstName
        }
        content
        rating
      }
      products {
        _id
        name
        price
        quantity
        categories {
          name
        }
      }
      owners {
        fullName
      }
    }
  }`

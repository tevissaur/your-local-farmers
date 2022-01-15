import { gql } from '@apollo/client';


export const GET_MY_FARM = gql`
  query Farm($id: ID!) {
    farmDashboard(_id: $id) {
      name
      address
      story
      reviews {
        author
        content
        rating
      }
      products {
        name
        price
        quantity
        categories
      }
      purchaseOrders
    }
  }
`

export const QUERY_FARM = gql`
  query Farms {
    farms {
      _id
      name
      address
      story
      reviews {
       author{
         firstName
       }
       content
       rating
      }
      products {

        _id
        image
        name
        price
        quantity
        reviews {
          author {
            username
          }
          rating
          content
        }

        categories {
          name
        }
      }
      owners {
        fullName
      }
    }
  }

`
export const GET_ME = gql`
  query GetMe($id: ID!) {
    me(_id: $id) {
      _id
      firstName
      lastName
      username
      email
      address
      isFarmer
    }
  }
`
export const QUERY_PRODUCT = gql`
    query Product($id: ID!) {
      oneProduct(_id: $id) {
        name
        image
        price
        quantity
        inSeason
        farm {
          name
        }
        categories {
          name
        }
        reviews {
          author {
            username
          }
          content
          rating
        }
      }
    }
`

export const QUERY_PRODUCTS = gql`
    query Product {
      products {
        _id
        name
        image
        price
        quantity
        reviews {
          author {
            firstName
          }
          content
          rating
        }
        categories {
          name
          imgUrl
        }
     
      }
    }


`

export const QUERY_CATEGORIES = gql`
  query Categories {
    categories {
      _id
      name
    }
  }

`

// export const QUERY_ORDERS = gql`

// `

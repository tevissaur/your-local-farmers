import { gql } from '@apollo/client';


export const QUERY_FARM = gql`
  query Farms {
    farms {
      _id
      name
      address
      reviews {
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
            firstName
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
export const QUERY_PRODUCTS = gql`
    query Product {
      products {
        _id
        name
        image
        price
        quantity
        reviews {
          content
          rating
        }
        categories {
          name
          imgUrl
        }
        farm {
          name
        }
      }
    }


`

export const QUERY_CATEGORIES = gql`
  query Categories {
    categories {
      name
      imgUrl
      products {
        _id
        name
        price
        quantity
        reviews {
          content
          rating
        }
      }
    }
  }

`

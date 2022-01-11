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
      firstName
      lastName
      fullName
      username
      email
      password
      address
      reviews {
      _id
      }
      isFarmer
    }
  }
`
export const QUERY_PRODUCT =gql `
    query Product {
      products {
        _id
        name
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
      }
    }


`

export const QUERY_CATEGORIES =gql`
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

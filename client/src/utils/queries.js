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
        farm {
          name
        }

      }
    }


`

export const QUERY_CATEGORIES = gql`
  query Categories {
    categories {
      _id
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

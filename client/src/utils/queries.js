import {gql} from '@apollo/client';
const QUERY_FARM = gql`
  query Farms {
    farms {
      _id
      name
      address
      reviews {
        author {
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
        reviews {
          rating
          content
        }
      }
      owners {
        firstName
        lastName
      }
    }
  }


`

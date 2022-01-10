import {gql} from '@apollo/client';
export const QUERY_FARM = gql`
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

// export const QUERY_CATEGORIES =gql`
//   query Categories {
//     categories {
//       name
//       imgUrl
//       products {
//         _id
//         name
//         price
//         quantity
//         reviews {
//           content
//           rating
//         }
//       }
//     }
//   }

// `

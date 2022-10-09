import { gql } from '@apollo/client';

export const GET_MY_FARM = gql`
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
          type
          amount
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
export const QUERY_FARM = gql`
  query FarmStore($id: ID!) {
    farmStore(_id: $id) {
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
        name
        price
        quantity {
          type
          amount
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
export const QUERY_FARMS = gql`
  query Farms {
    farms {
      _id
      name
      address
      story
      categoriesOffered {
        _id
        name
      }
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
        quantity {
          type
          amount
        }
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
      cart {
        productID
        farmID
        dateAdded
        price
        quantity {
          type
          amount
        }
      }
      orders {
        _id
        seller {
          _id
          name
        }
        items {
          _id
          name
        }
        dateCreated
        orderTotal
      }
    }
  }
`
export const QUERY_PRODUCT = gql`
    query Product($id: ID!) {
      oneProduct(_id: $id) {
        _id
        name
        price
        quantity {
          type
          amount
        }
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
      imgUrl
    }
  }

`
export const GET_PO = gql`
  query getPO($id: ID!){
    po(_id: $id){
      dateCreated
      items
      orderTotal
      seller
    }

  }
`

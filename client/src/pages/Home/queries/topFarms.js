import { gql } from '@apollo/client'

export const QUERY_TOP_FARMS = gql`
  query Farms {
    farms {
      _id
      name
      address
      story
      owners {
        fullName
      }
    }
  }

`
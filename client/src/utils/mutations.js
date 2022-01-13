import { gql } from '@apollo/client'

export const CREATE_USER = gql`
    mutation CreateUser($username: String!, $email: String!, $password: String!) {
        createUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            }
        }
    }
`

export const LOG_IN = gql`
    mutation LogIn($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`

export const CREATE_FARM = gql`
mutation CreateFarm($farm: NewFarm) {
    createFarm(farm: $farm) {
      _id
      name
      address
      story
      owners {
        _id
      }
    }
  }
`

export const UPDATE_USER = gql`
    mutation UpdateUser($user: UpdatedUser) {
        updateUser(user: $user) {
            _id
            firstName
            lastName
            username
            email
            password
            isFarmer
            address
    }
}
`

export const UPDATE_FARM = gql`
    mutation UpdateFarm($farm: UpdatedFarm){
        updateFarm(farm: $farm){
            _id
            name
            address
            story
        }
    }
`


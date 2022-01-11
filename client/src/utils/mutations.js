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
mutation CreateFarm($name: String!, $address: String!, $story: String!, $owners: String!) {
    createFarm(name: $name, address: $address, owners: $owners, story: $story){
        _id
    }
}`



import { gql } from '@apollo/client'

export const CREATE_USER = gql`
    mutation CreateUser($username: String!, $email: String!, $password: String!, $firstName: String!) {
        createUser(username: $username, email: $email, password: $password, firstName: $firstName) {
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
export const POST_REVIEW = gql`
mutation PostReview ($review: NewReview!, $product_id: ID, $user: ID, $farm: ID) {
    postReview(review: $review, product_id: $product_id, user: $user, farm: $farm) {
        author {
            firstName
        }
        content
        rating
    }
}


`


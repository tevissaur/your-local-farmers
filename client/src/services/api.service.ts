import { gql } from "graphql-request";
import { ILogin } from "../interfaces/IUser";
import { api } from "../utils/api";

export const baseApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getMe: builder.query({
			query: (id) => ({
				body: gql`
                    query {
                        me(_id: "${id}") {
                            _id
                            firstName
                            lastName
                            username
                            email
                            address
                            isFarmer
                            cart {
                                total
                                items {
                                    productID
                                    farmID
                                    dateAdded
                                    price
                                    quantity {
                                        type
                                        amount
                                    }
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
                    }`,
			}),
			transformResponse: (response) => response.me,
		}),
		getFarm: builder.query({
			query: (id) => ({
				body: gql` 
                query {
                    farm(_id: "${id}") {
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
                  }`,
			}),
			transformResponse: (response) => response.farm,
		}),
		getProduct: builder.query({
			query: (id) => ({
				body: gql`
        query {
          product(_id: "${id}") {
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
        `,
			}),
			transformResponse: (response) => response.product,
		}),
		getLocalFarms: builder.query({
			query: (id) => ({
				body: gql`
            query {
              localFarms(_id: "${id}") {
                _id
                name
              }
            }
          `,
			}),
		}),
		login: builder.mutation({
			query: (login: ILogin) => ({
				body: gql`
            mutation {
                login(username: "${login.username}", password: "${login.password}")) {
                  token
                  user {
                    _id
                  }
                }
            }
        `,
			}),
		}),
    signup: builder.mutation({
			query: (login: ILogin) => ({
				body: gql`
            mutation {
                login(username: "${login.username}", password: "${login.password}")) {
                  token
                  user {
                    _id
                  }
                }
            }
        `,
			}),
		}),
	}),
});

export const {
	useGetMeQuery,
	useGetFarmQuery,
	useGetProductQuery,
	useGetLocalFarmsQuery,
  useSignupMutation,
  useLoginMutation
} = baseApi;

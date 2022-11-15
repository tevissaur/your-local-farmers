import { gql } from "graphql-request";
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
	}),
});

export const { useGetMeQuery, useGetFarmQuery } = baseApi;

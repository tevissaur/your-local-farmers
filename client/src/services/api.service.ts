import { gql } from "graphql-request";
import { ILogin } from "../interfaces/IUser";
import { api } from "../utils/api";

export const baseApi = api.injectEndpoints({
	endpoints: (builder) => ({
		
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

	}),
});

export const {
	useGetFarmQuery,
	useGetProductQuery,
	useGetLocalFarmsQuery,
} = baseApi;

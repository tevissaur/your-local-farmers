import { gql } from "graphql-request";
import { api } from "../../api";

export const searchApi = api.injectEndpoints({
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
                    }
                `
            }),
			transformResponse: (response) => (response.farm)
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
			transformResponse: (response) => (response.product)
		}),
		getLocalFarms: builder.query({
			query: (location) => ({
				body: gql`
                    query {
                        localFarms(latitude: ${location.latitude}, longitude: ${location.longitude}) {
                            _id
                            name
                            avgScore
                        }
                    }
                `
            }),
		}),
        getCategories: builder.query({
            query: () => ({
                body: gql`
                    query {
                        categories {
                            _id
                            name
                        }
                    }
                `
            })
        }),
    })
});

export const {
	useGetFarmQuery,
	useGetProductQuery,
	useGetLocalFarmsQuery,
    useGetCategoriesQuery,
    useLazyGetCategoriesQuery,
} = searchApi;

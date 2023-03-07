import { gql } from "graphql-request";
import { ILogin, ISignup } from "../../../interfaces/IUser";
import { api } from "../../api";

export const userApi = api.injectEndpoints({
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
                    }
                `,
			}),
			transformResponse: (response) => response.me,
		}),
		login: builder.mutation({
			query: (login: ILogin) => ({
				body: gql`
					mutation {
						login(email: "${login.email}", password: "${login.password}") {
							token
							user {
								_id
							}
						}
					}
				`,
			}),
			transformErrorResponse: (e) => {
                console.log(e.data.response.errors);
				return e.data.response.errors[0].message;
			},
		}),
		signup: builder.mutation({
			query: (signup: ISignup) => ({
				body: gql`
            mutation {
                login(username: "${signup.username}", password: "${signup.password}", email: "${signup.email}") {
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

export const { useGetMeQuery, useLoginMutation, useSignupMutation } = userApi;

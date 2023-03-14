import { gql } from "graphql-request";
import { api } from "../../api";

export const cartApi = api.injectEndpoints({
	endpoints: (builder) => ({
		updateCart: builder.mutation({
			query: ({ products, ownerId }) => ({
				body: gql`
                    mutation upsertCart($products: [CartProductInput]!) {
                        upsertCart(
                            products: $products, 
                            ownerId: "${ownerId}"
                        ) {
                            total
                            products {
                                productId
                            }
                        }
                    }
                `,
				variables: { products },
			}),
			transformResponse: (response) => {
				console.log(response);
				return response.upsertCart;
			},
		}),
		addProductToCart: builder.mutation({
			query: ({ product, ownerId }) => ({
				body: gql`
                    mutation addProductToCart($product: CartProductInput!) {
                        addProductToCart(
                            product: $product,
                            ownerId: "${ownerId}"
                        ) {
                            total
                            products {
                                productId {
                                    _id
                                    name
                                }
                                farmId {
                                    _id
                                }
                                dateAdded
                                price
                                quantity {
                                    type
                                    amount
                                }
                            }
                        }
                    }
                `,
				variables: { product },
			}),
			transformResponse: (response) => response.addProductToCart,
		}),
		removeProductFromCart: builder.mutation({
			query: ({ product, ownerId }) => ({
				body: gql`
                    mutation removeProductFromCart($product: CartProductInput!) {
                        removeProductFromCart(
                            product: $product, 
                            ownerId: "${ownerId}"
                        ) {
                            total
                            products {
                                name
                            }
                        }
                    }
                `,
				variables: { product: product.id },
			}),
		}),
	}),
});

export const {
	useUpdateCartMutation,
	useAddProductToCartMutation,
	useRemoveProductFromCartMutation,
} = cartApi;

import { BaseButton as Button } from "./BaseButton";
import { addProduct, setCartData, updateQuantityToAdd } from "../../utils/slices/cart/cart-slice";
import { ChangeEvent, ChangeEventHandler, FC, useEffect } from "react";
import UtilsService from "../../services/utils.service";
import AuthService from "../../services/authentication.service";
import { useLocation } from "react-router-dom";
import { ICartProduct } from "../../interfaces/ICart";
import { FarmProductProps } from "../../pages/SingleFarm/components/FarmProductCard";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { useAddProductToCartMutation, useUpdateCartMutation } from "../../utils/slices/cart/cart-api";

type FormControlElement = HTMLInputElement | HTMLTextAreaElement;

const AddToCardBtn: FC<FarmProductProps> = ({ product }) => {
	const {
		cart: { products, total },
	} = useAppSelector((state) => state);
	const dispatch = useAppDispatch();
	const { search } = useLocation();
	const {
		data: { _id: ownerId },
	} = AuthService.getProfile() || "";
	const { fid, pid } = UtilsService.getSearchParams(search);
	const [addProductToCart, { data: addToCartResponse, isLoading: addToCartLoading, isSuccess: addToCartSuccess }] = useAddProductToCartMutation();

	const handleAddToCart = async (e: React.FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault();
			e.stopPropagation();
			console.log(e.currentTarget)
			let newItem = {
				price: product.price,
				quantity: {
					type: product.quantity.type,
					amount: product.quantity.amount,
				},
				farmId: fid,
				productId: product._id || pid,
				name: product.name,
			};
			console.log(UtilsService.isCartDuplicate(products, product._id || pid))
			if (UtilsService.isCartDuplicate(products, product._id || pid))
				throw new Error("Item is already in your cart!");

		await addProductToCart({ product: newItem, ownerId });
		} catch (error) {
			alert(error.message);
			console.error(error);
		}
	};

	const handleQuantityChange = async (e: ChangeEvent<FormControlElement>) => {
		try {
            e.preventDefault();
            e.stopPropagation();
			dispatch(updateQuantityToAdd(e.currentTarget.value))

        } catch (error) {
            alert(error.message);
            console.error(error);
        }
	}

	useEffect(() => {
		console.log(addToCartResponse)
		if (addToCartSuccess && !addToCartLoading && addToCartResponse) dispatch(setCartData(addToCartResponse))
	}, [addToCartResponse, addToCartLoading, addToCartSuccess]);

	return (
		<Form className="d-flex" onSubmit={handleAddToCart}>
			<Form.Group>
				<Form.Label htmlFor="quantity">Quantity</Form.Label>
				<InputGroup className="w-75">
					<Form.Control
						type="number"
						id="quantity"
						name="quantity"
						onChange={handleQuantityChange}
						defaultValue={product.quantity.amount}
					></Form.Control>
					<InputGroup.Text>{product?.quantity.type}</InputGroup.Text>
				</InputGroup>
			<Button className="m-2" type="submit">Add To Cart</Button>
			</Form.Group>
		</Form>
	);
};

export default AddToCardBtn;

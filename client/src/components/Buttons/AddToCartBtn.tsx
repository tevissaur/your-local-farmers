import { BaseButton as Button } from "./BaseButton";
import { RootState } from "../../utils/store";
import { addProduct, setCartData } from "../../utils/slices/cart-slice";
import { FC, useEffect } from "react";
import UtilsService from "../../services/utils.service";
import AuthService from "../../services/authentication.service";
import { UPDATE_CART } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ICartProduct } from "../../interfaces/ICart";
import { FarmProductProps } from "../../pages/SingleFarm/components/FarmProductCard";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Form, InputGroup } from "react-bootstrap";

const AddToCardBtn: FC<FarmProductProps> = ({ product }) => {
	const {
		cart: { products, total },
	} = useAppSelector((state) => state);
	const dispatch = useAppDispatch();
	const { search } = useLocation();
	const {
		data: { _id },
	} = AuthService.getProfile();
	const { fid, pid } = UtilsService.getSearchParams(search);

	const handleAddToCart = async () => {
		let newItem: ICartProduct = {
			price: product.price,
			quantity: {
				type: product.quantity.type,
				amount: product.quantity.amount,
			},
			farmID: fid,
			productID: pid || product._id || "",
			name: product.name,
		};

		if (UtilsService.isCartDuplicate(products, newItem)) {
			window.alert("This item is already in your cart!");
			return;
		}

		dispatch(addProduct(newItem));
	};

	useEffect(() => {
		console.log(products);
	}, [products]);

	return (
		<Form className="d-flex">
			<Form.Group >
				<Form.Label htmlFor="quantity">Quantity</Form.Label>
				<InputGroup className="w-25">
					<Form.Control
						type="number"
						id="quantity"
						name="quantity"
						defaultValue={0}
					></Form.Control>
					<InputGroup.Text>{product.quantity.type}</InputGroup.Text>
				</InputGroup>
			</Form.Group>
			<Button onSubmit={handleAddToCart}>Add To Cart</Button>
		</Form>
	);
};

export default AddToCardBtn;

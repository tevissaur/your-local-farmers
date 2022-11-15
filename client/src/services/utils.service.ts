import { ICart, ICartProduct } from "../interfaces/ICart";
import { IProduct } from "../interfaces/IProduct";

class UtilsService {
	public calculateCartTotal(products: Array<ICartProduct>) {
		return products.map(prod => prod.price).reduce((accumulator: number, currentValue: number) => accumulator + currentValue);
	}

	isCartDuplicate(cart: ICart, newItem: ICartProduct) {
		for (let item of cart.products) {
			if (item.productID === newItem.productID) {
				return true;
			}
		}
		return false;
	}

	cleanCart(products: Array<ICartProduct>) {
		if (products.length == 0) return products;

		return products.map((item: ICartProduct) => {
			return {
				price: item.price,
				quantity: item.quantity,
				dateAdded: item.dateAdded,
				productID: item.productID,
			};
		});
	}

	getSearchParams(params) {
		const paramsArr = params.split("&").map((param) => param.split("="));
		let paramsObj;
		for (let param of paramsArr) {
			paramsObj = {
				...paramsObj,
				[param[0].replace("?", "")]: param[1],
			};
		}
		return paramsObj;
	}

	// cartItemsToArray(items) {
	//     let cart = []
	//     for (const product in items) {
	//         cart.push({ ...items[product], name: product })
	//     }
	//     return cart
	// }

	getActivePage = () => window.location.pathname.split("/")[1];
}
export default new UtilsService();

import { ICartProduct } from "../interfaces/ICart";

class UtilsService {
	calculateCartTotal(products: Array<ICartProduct>) {
		return products
			.map((prod) => prod.price)
			.reduce(
				(accumulator: number, currentValue: number) =>
					accumulator + currentValue
			);
	}

	isCartDuplicate(products: Array<ICartProduct>, newItem: ICartProduct) {
		for (let item of products) {
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
				farmID: item.farmID,
			};
		});
	}

	getSearchParams(params: string) {
		const paramsArr = params.split("&").map((param) => param.split("="));
		let paramsObj: { fid: string; pid: string } = { fid: "", pid: "" };
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

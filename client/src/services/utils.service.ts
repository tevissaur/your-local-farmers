import { ICartProduct } from "../interfaces/ICart";

class UtilsService {
	calculateCartTotal(products: Array<ICartProduct>) {
		try {
			if (products.length === 0) return 0;
			return products
				.map((prod) => prod?.price || 0)
				.reduce(
					(accumulator: number, currentValue: number) =>
						accumulator + currentValue
				);
		} catch (error) {
			console.error(error);
			return 0;
		}
	}

	isCartDuplicate(products: Array<ICartProduct>, newItemId: string) {
		try {
			console.log(products, newItemId)
			if (products.length === 0) return false;
			for (let item of products)
				if (item.productId._id === newItemId) return true;

			return false;
		} catch (error) {
			return false;
		}
	}

	cleanCart(products: Array<ICartProduct>) {
		if (products.length === 0) return products;

		return products.map((item: ICartProduct) => ({
			price: item.price,
			quantity: item.quantity,
			dateAdded: item.dateAdded,
			productID: item.productId,
			farmID: item.farmId,
		}));
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

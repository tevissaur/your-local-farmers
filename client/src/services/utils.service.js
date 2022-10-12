

class UtilsService {

    isCartDuplicate(cart = [], newItem) {
        for (let item of cart) {
            if (item.productID === newItem.productID) {
                return true
            }
        }
        return false
    }

    cleanCart(cart = []) {
        console.log(cart)
        if (cart == []) {
            return cart
        }
        return cart.map(item => {
            return {
                price: item.price,
                quantity: {
                    type: item.quantity.type,
                    amount: item.quantity.amount
                },
                dateAdded: item.dateAdded,
                farmID: item.farmID,
                productID: item.productID
            }

        })
    }

    getSearchParams(params) {
        const paramsArr = params.split('&').map(param => param.split('='))
        let paramsObj
        for (let param of paramsArr) {
            paramsObj = {
                ...paramsObj,
                [param[0].replace('?', '')]: param[1]
            }
        }
        return paramsObj
    }

    cartItemsToArray(items) {
        let cart = []
        for (const product in items) {
            cart.push({ ...items[product], name: product })
        }
        return cart
    }

    getActivePage = () => window.location.pathname.split('/')[1]



}
export default new UtilsService();
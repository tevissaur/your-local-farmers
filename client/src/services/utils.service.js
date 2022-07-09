

class UtilsService {

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

    getActivePage() {
        console.log(window.location.pathname.split('/')[1])
        return window.location.pathname.split('/')[1]
    }

}
export default new UtilsService();
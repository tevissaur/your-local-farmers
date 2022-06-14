
class RouterService {
    HOME_ROUTE = '/home'

    redirectToPage(fromPageUrl, toPageUrl) {

        window.location.replace(toPageUrl)
    }
}

export default new RouterService()
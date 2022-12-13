
class RouterService {
    HOME_ROUTE = '/home'

    redirectToPage(fromPageUrl: string, toPageUrl: string) {

        window.location.replace(toPageUrl)
    }
}

export default new RouterService()
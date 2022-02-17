export const setCartItems = (payload) => {
    return {
        type: 'cart/items',
        payload
    }
}

export const setDrawerOpen = (payload) => {
    return {
        type: 'ui/drawer',
        payload
    }
}
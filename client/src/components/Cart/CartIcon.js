import ShoppingCart from '@mui/icons-material/ShoppingCart'
import { LinkBase as Link } from '../LinkBase';
import IconButton from '@mui/material/IconButton'
import store from '../../utils/store';



const CartIcon = () => {
    const { cart: { items, cart } } = store.getState()


    return (
            <Link to={"/cart"}>
                <IconButton>
                    <ShoppingCart />
                    {cart.length}
                </IconButton>
            </Link>
    )
}

export default CartIcon
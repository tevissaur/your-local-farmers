import ShoppingCart from '@mui/icons-material/ShoppingCart'
import { LinkBase as Link } from '../LinkBase';
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import store from '../../utils/store';



const CartIcon = () => {
    const { cart: { items, cart } } = store.getState()
    

    return (
        <Tooltip title="Your cart">

            <Link to={"/cart"}>
                <IconButton>
                    <ShoppingCart />
                    {cart.length}
                </IconButton>
            </Link>
        </Tooltip>)
}

export default CartIcon
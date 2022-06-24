import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Link from '@mui/material/Link'
import { Link as ReactLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import store from '../../utils/store';



const CartIcon = () => {
    const { cart: { items, cart } } = store.getState()
    

    return (
        <Tooltip title="Your cart">

            <Link component={ReactLink} to={"/cart"}>
                <IconButton>
                    <ShoppingCart />
                    {cart.length}
                </IconButton>
            </Link>
        </Tooltip>)
}

export default CartIcon
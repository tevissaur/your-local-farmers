import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Link from '@mui/material/Link'
import { Link as ReactLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'



const CartIcon = () => {

    return (
        <Tooltip title="Your cart">

            <Link component={ReactLink} to={"/cart"}>
                <IconButton>
                    <ShoppingCart />
                </IconButton>
            </Link>
        </Tooltip>)
}

export default CartIcon
import ShoppingCart from '@mui/icons-material/ShoppingCart'
import { LinkBase as Link } from '../LinkBase';
import IconButton from '@mui/material/IconButton'
import store from '../../utils/store';



const CartIcon = () => {
    const { cart: { items } } = useSelector((state: RootState) => state);


    return (
            <Link to={"/cart"}>
                <IconButton>
                    <ShoppingCart />
                    {items.length}
                </IconButton>
            </Link>
    )
}

export default CartIcon
import ShoppingCart from '@mui/icons-material/ShoppingCart'
import { LinkBase as Link } from '../LinkBase';
import IconButton from '@mui/material/IconButton'
import store, { RootState } from '../../utils/store';
import React from 'react';
import { useSelector } from 'react-redux';



const CartIcon = () => {
    const { cart: { products } } = useSelector((state: RootState) => state);


    return (
            <></>
    )
}

export default CartIcon
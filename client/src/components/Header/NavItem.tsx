import React from 'react'
import store, { RootState } from '../../utils/store'
import { LinkBase as Link } from '../LinkBase'
import { BaseButton as Button } from '../Buttons/BaseButton'
import { useSelector } from 'react-redux';


function NavItem() {
    const {
        ui: {
            activePage
        }
    } = useSelector((state: RootState) => state);


    return <></>
}

export default NavItem

import React from 'react'
import store from '../../utils/store'
import { LinkBase as Link } from '../LinkBase'
import { BaseButton as Button } from '../Buttons/BaseButton'


function NavItem({ text, pageUrl }) {
    const {
        ui: {
            nav: {
                activePage
            }
        }
    } = store.getState()


    return (
        <Link to={`/${pageUrl}`} sx={{
            borderRadius: '25px',
            marginX: '5px'
        }}>
            <Button sx={{
                transform: activePage === pageUrl ? 'translate(0px, 0px)' : 'translate(-1px, -1px)',
                backgroundColor: activePage === pageUrl ? '#b2cfab' : 'ivory',
                boxShadow: activePage === pageUrl ? '0 0 0 black' : '1px 1px 0 black',
                ':hover': {
                    backgroundColor: '#b2cfab',
                    boxShadow: '0 0 0 black',
                    transform: 'translate(0px, 0px)'
                }
            }}>
                {text}
            </Button>
        </Link>
    )
}

export default NavItem

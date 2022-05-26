import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import Icon from '@mui/material/Icon'
import Typography from '@mui/material/Typography'
import store from '../../utils/store'
import { setActivePage } from '../../utils/actions'


function NavItem({ text, active, pageUrl }) {
    const { ui: { drawerOpen, nav: { activePage } } } = store.getState()


    return (
        <Link to={`/${pageUrl}`} component={ReactLink} underline='none' color='black' marginX='10px' >
            <Button sx={{
                borderRadius: '25px',
                paddingX: 1.5,
                color: 'black',
                backgroundColor: activePage === pageUrl ? '#b2cfab' : 'ivory',
                border: '1px solid black',
                boxShadow: activePage === pageUrl ? '1px 1px 0 black' : '0 0 0 black',
                ':hover': {
                    backgroundColor: 'white',
                    boxShadow: activePage === pageUrl ? '0 0 0 black' : '1px 1px 0 black'
                }
            }} onClick={() => store.dispatch(setActivePage(pageUrl))}>
                {text}
            </Button>
        </Link>
    )
}

export default NavItem

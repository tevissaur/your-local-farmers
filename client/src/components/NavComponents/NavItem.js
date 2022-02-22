import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import Icon from '@mui/material/Icon'
import Typography from '@mui/material/Typography'
import store from '../../utils/store'


function NavItem({ text, active, pageUrl }) {
    const { ui: { drawerOpen } } = store.getState()


    return (
        <Link to={`/${pageUrl}`} component={ReactLink} underline='none' color='black' >
            <Button sx={{
                borderRadius: '25px',
                paddingX: 1.5,
                color: 'black',
                backgroundColor: 'ivory',
                border: '1px solid black',
                marginX: '10px',
                ':hover': {
                    backgroundColor: 'white',
                    boxShadow: '1px 1px 0 black'
                }
            }}>
                {text}
            </Button>
        </Link>
    )
}

export default NavItem

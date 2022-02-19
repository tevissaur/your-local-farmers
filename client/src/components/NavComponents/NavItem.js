import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import Icon from '@mui/material/Icon'
import Typography from '@mui/material/Typography'
import store from '../../utils/store'


function NavItem({ title, icon, active, pageUrl }) {
    const { ui: { drawerOpen } } = store.getState()


    return (
        <Link
            as={ReactLink}
            to={pageUrl}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '90%',
                margin: '5px auto',
                borderRadius: '5px',
            }}
            underline='none'
        >
            <Button sx={{
                display: 'flex',
                justifyContent: drawerOpen ? 'flex-start' : 'center',
                padding: 1.5,
                width: '100%',
            }} >

                <Icon component={icon}
                    sx={{
                        alignSelf: 'center',
                        margin: drawerOpen ? '1px 10px 1px 0' : '1px auto'
                    }} />
                <Typography sx={{ display: drawerOpen ? 'flex' : 'none' }}>
                    {title}
                </Typography>
            </Button>
        </Link>
    )
}

export default NavItem

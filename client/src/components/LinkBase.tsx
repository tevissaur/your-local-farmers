import { Link as ReactLink } from 'react-router-dom'
import Link from '@mui/material/Link'
import { useDispatch } from 'react-redux'
import { setActivePage } from '../resources/ui/ui.actions'
import React from 'react'


export const LinkBase = ({ to, children, variant, sx }: {to: string; children: Array<React.Component>;}) => {
    const dispatch = useDispatch()

    const handleClick = (e) => {
        let pageUrl = to.split('/')[1]

        dispatch(setActivePage(pageUrl))
    }
    return (
        <Link
            to={to}
            component={ReactLink}
            variant={variant}
            onClick={handleClick}
            underline='none'
            sx={sx}
        >
            {children}
        </Link>
    )

}

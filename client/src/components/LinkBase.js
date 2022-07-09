import { Link as ReactLink } from 'react-router-dom'
import Link from '@mui/material/Link'
import { setActivePage } from '../utils/actions'
import { useDispatch } from 'react-redux'


export const LinkBase = ({ to, children, variant, sx }) => {
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

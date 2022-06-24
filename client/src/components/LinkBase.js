import { Link as ReactLink } from 'react-router-dom'
import Link from '@mui/material/Link'
import { setActivePage } from '../utils/actions'
import store from '../utils/store'


export const LinkBase = ({ to, children }) => {

    const handleClick = (e) => {
        console.log(to.split('/')[1])
        let pageUrl = to.split('/')[1]

        store.dispatch(setActivePage(pageUrl))
    }
    return (
        <Link to={to} component={ReactLink} onClick={handleClick} underline='none'>
            {children}
        </Link>
    )

}

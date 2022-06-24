import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { Link as ReactLink } from 'react-router-dom'




const Footer = () => {
    return (
        <>
            <Box component='nav' sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                paddingX: '20px',
                backgroundColor: 'peachpuff',
                padding: '20px',
                '> div > ul > li': {
                    paddingLeft: '0'
                }
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Typography textAlign='left' variant='h6'>
                        Shop
                    </Typography>
                    <List>
                        <ListItem>
                            <Link sx={{ ':hover': { textDecoration: 'underline' } }} component={ReactLink} to='/gift-cards' underline='none' color='black'>

                                Gift Cards
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link sx={{ ':hover': { textDecoration: 'underline' } }} component={ReactLink} to='/categories' underline='none' color='black'>
                                Site Map
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link sx={{ ':hover': { textDecoration: 'underline' } }} component={ReactLink} to='/resources' underline='none' color='black'>
                                Our Blog
                            </Link>
                        </ListItem>
                        <ListItem>

                        </ListItem>
                    </List>

                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Typography textAlign='left' variant='h6'>
                        Sell
                    </Typography>
                    <List>
                        <ListItem>
                            <Link sx={{ ':hover': { textDecoration: 'underline' } }} component={ReactLink} to='/myfarm' underline='none' color='black'>
                                Sell on Local Farmers
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link sx={{ ':hover': { textDecoration: 'underline' } }} component={ReactLink} to='/teams' underline='none' color='black'>
                                Teams
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link sx={{ ':hover': { textDecoration: 'underline' } }} component={ReactLink} to='/forums' underline='none' color='black'>
                                Community Forums
                            </Link>
                        </ListItem>
                    </List>

                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Typography textAlign='left' variant='h6'>
                        About
                    </Typography>
                    <List>
                        <ListItem>
                            <Link sx={{ ':hover': { textDecoration: 'underline' } }} component={ReactLink} to='/gift-cards' underline='none' color='black'>

                                Local Farmers, Inc
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link sx={{ ':hover': { textDecoration: 'underline' } }} component={ReactLink} to='/categories' underline='none' color='black'>
                                Policies
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link sx={{ ':hover': { textDecoration: 'underline' } }} component={ReactLink} to='/resources' underline='none' color='black'>
                                Investors
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link sx={{ ':hover': { textDecoration: 'underline' } }} component={ReactLink} to='/resources' underline='none' color='black'>
                                Careers
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link sx={{ ':hover': { textDecoration: 'underline' } }} component={ReactLink} to='/resources' underline='none' color='black'>
                                Press
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link sx={{ ':hover': { textDecoration: 'underline' } }} component={ReactLink} to='/resources' underline='none' color='black'>
                                Impact
                            </Link>
                        </ListItem>
                    </List>

                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <Typography textAlign='left' variant='h6'>
                        Help
                    </Typography>
                    <List>
                        <ListItem>
                            <Link sx={{ ':hover': { textDecoration: 'underline' } }} component={ReactLink} to='/gift-cards' underline='none' color='black'>

                               Help Center
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link sx={{ ':hover': { textDecoration: 'underline' } }} component={ReactLink} to='/categories' underline='none' color='black'>
                                Trust and Safety
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link sx={{ ':hover': { textDecoration: 'underline' } }} component={ReactLink} to='/resources' underline='none' color='black'>
                                Privacy Settings
                            </Link>
                        </ListItem>
                    </List>

                </Box>
                



                <Box sx={{
                    width: '100%',
                    marginTop: '20px'
                }}>
                    <Typography textAlign='center'>
                        Made by Tevis, Alex, Linh and Quentin
                    </Typography>

                </Box>
            </Box>


        </>
    )
}

export default Footer

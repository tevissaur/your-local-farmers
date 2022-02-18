import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import Icon from '@mui/material/Icon'
import Menu from '@mui/material/Menu'
import Typography from '@mui/material/Typography'
import store from '../utils/store'


function NavItem({ title, icon, active, pageUrl}) {
    const { ui: { drawerOpen } } = store.getState()


    return (
        <Box
            flexDirection="column"
            w="100%"
            alignItems="center"
        >
            {/* <Menu placement='right' open={true}>
                <Link
                    as={ReactLink}
                    to={pageUrl}
                    w='100%'
                    marginX={2}
                    borderRadius={4}
                    _hover={{texDecor: 'none', backgroundColor: 'white'}}
                >
                    <Button w='100%' 
                    backgroundColor={active && "AEC8CA"}>
                        <Box alignItems='center'>
                            <Icon as={icon} fontSize='35px' color={active ? "primary.emeraldGreen" : "primary.darkGreen"} margin='5px auto' />
                            <Typography align='left'ml={5} display={drawerOpen ? "flex" : "none"} fontWeight='600'>{title}</Typography>
                        </Box>
                    </Button>
                </Link>
            </Menu> */}
        </Box>
    )
}

export default NavItem

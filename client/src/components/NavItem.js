import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import { Flex, Menu, MenuButton, Link, Text , Icon, Center } from '@chakra-ui/react'
import customTheme from '../extendedTheme'
import store from '../utils/store'


function NavItem({navSize, title, icon, active, pageUrl}) {
    const { ui: { drawerOpen } } = store.getState()


    return (
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={drawerOpen ? 'center' : "flex-start"}
        >
            <Menu placement='right'>
                <Link
                    as={ReactLink}
                    to={pageUrl}
                    backgroundColor={active && "AEC8CA"}
                    w='100%'
                    p={3}
                    borderRadius={8}
                    _hover={{texDecor: 'none', backgroundColor: customTheme.colors.primary.lightGreen}}
                >
                    <MenuButton w='100%'>
                        <Flex alignItems='center'>
                            <Icon as={icon} fontSize='35px' color={active ? "primary.emeraldGreen" : "primary.darkGreen"} />
                            <Text align='left'ml={5} display={drawerOpen ? "none" : "flex"} fontWeight='600'>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
    
            </Menu>
        </Flex>
    )
}

export default NavItem

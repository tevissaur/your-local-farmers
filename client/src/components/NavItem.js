import React from 'react'
import { Flex, Menu, MenuButton, Link, Text , Icon, Center } from '@chakra-ui/react'
import customTheme from '../extendedTheme'
function NavItem({navSize, title, icon, active}) {
    return (
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={navSize == 'small' ? 'center' : "flex-start"}
        >
            <Menu placement='right'>
                <Link
                    backgroundColor={active && "AEC8CA"}
                    p={3}
                    borderRadius={8}
                    _hover={{texDecor: 'none', backgroundColor: customTheme.colors.primary.lightGreen}}
                    w={navSize == "large" && "100%" }
                >
                    <MenuButton w='100%'>
                        <Flex alignItems="center">
                            <Icon as={icon} fontSize="35px" color={active ? "black" : "black"} />
                            <Text ml={3} display={navSize == "small" ? "none" : "flex"} fontWeight="bold">{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
    
            </Menu>
        </Flex>
    )
}

export default NavItem

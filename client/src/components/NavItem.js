import React from 'react'
import { Flex, Menu, MenuButton, Link, Text , Icon } from '@chakra-ui/react';
import customTheme from '../extendedTheme';

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
                    _hover={{texDecor: 'none', backgroundColor: '#AEC8CA'}}
                    w={navSize == "large" && "100%" }
                >
                    <MenuButton w='100%'>
                        <Flex>
                            <Icon as={icon} fontSize='xl' color={active ? "primary.darkGreen" : "primary.yellowGreen"} />
                            <Text ml={5} display={navSize == "small" ? "none" : "flex"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
    
            </Menu>
        </Flex>
    )
}

export default NavItem

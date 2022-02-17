import React, { useState } from 'react'
import { Avatar, Flex, Heading, Divider, Text, Image, IconButton } from '@chakra-ui/react';
import lightLogo from '../assets/lightmode-logo.png'
import { FiMenu } from 'react-icons/fi'
import NavItem from './NavItem'
import { GiBarn, GiFarmer, GiFarmTractor } from 'react-icons/gi'
import { CgProfile } from 'react-icons/cg'
import { extendTheme } from '@chakra-ui/react'
import auth from '../utils/auth';
import store from '../utils/store';
import { setDrawerOpen } from '../utils/actions';

function SideNavBar({ theme }) {
    const { ui: { drawerOpen }, profile: { loggedIn } } = store.getState()

    const profile = loggedIn ? auth.getProfile() : []
    
    const userName = profile.data?.username

    return (
        <Flex
            pos='sticky'
            bg="white"
            marginLeft="1"
            marginTop="1"
            boxShadow="0 4px 12px 0 rgb(0, 0, 0, 0.05)"
            w={drawerOpen ? "75px" : "270px"}
            border='1px solid black'
            borderRadius='lg'
            flexDir="column"
            height="100%"
            justifyContent="space-between"
        >
            <Flex
                p='2%'
                flexDir="column"
                w='100%'
                alignItems={drawerOpen ? "center" : "flex-start"}
            >
                <IconButton
                    background="none"
                    mt={5}
                    fontSize="20px"
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    onClick={() => { store.dispatch(setDrawerOpen(!drawerOpen)) }}
                />
                <NavItem pageUrl="/" icon={GiBarn} title="Home" active description="Home" />
                <NavItem pageUrl="/farms" icon={GiFarmer} title="Find A Local Farmer Near You" />

                {auth.loggedIn() ? (
                    <>
                        <NavItem pageUrl="/myfarm" icon={GiFarmTractor} title="Your Farm" />
                        <NavItem pageUrl="/profile" icon={CgProfile} title="Profile" />
                    </>
                ) : (
                    <>

                    </>
                )}
            </Flex>
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={drawerOpen ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={drawerOpen ? "none" : "flex"} />
                <Flex mt={4} align='center'>
                    <Avatar size="sm" p='0' src={lightLogo} />
                    <Flex flexDir="column" ml={4} display={drawerOpen ? "none" : "flex"}>
                        <Heading as='h3' size="sm">{loggedIn ? userName : 'Sign In'}</Heading>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default SideNavBar
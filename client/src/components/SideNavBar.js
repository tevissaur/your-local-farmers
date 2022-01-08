import React, {useState} from 'react'
import { Avatar, Flex, Heading, Divider, Text, Image, IconButton } from '@chakra-ui/react'
import lightLogo  from '../assets/lightmode-logo.png'
import { FiMenu } from 'react-icons/fi'
import NavItem from './NavItem'
import { GiBarn, GiFarmer, GiFarmTractor } from 'react-icons/gi'
import { CgProfile } from 'react-icons/cg'
import { extendTheme } from '@chakra-ui/react'

function SideNavBar() {
    const [navSize, changeNavSize] = useState("large")
    return (
       <Flex
            pos='sticky'
            colorScheme="primary.lightGreen"
            marginLeft="5"
            h="95vh"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgb(0, 0, 0, 0.05)"
            borderRadius={navSize == "small" ? "15px" : "30px" }
            w={navSize == "small" ? "75px" : "280px"}
            flexDir="column"
            justifyContent="space-between"
        >
        <Flex
            p='5%'
            flexDir="column"
            w='100%'
            alignItems={navSize == "small" ? "center" : "flex-start"}    
            >
            <IconButton 
                background="none"
                mt={5}
                fontSize="20px"
                _hover={{background: 'none'}}
                icon={<FiMenu />}
                onClick={() => {
                    navSize == "small" ? changeNavSize("large")
                    : changeNavSize("small")
                }}
            />
                <NavItem navSize={navSize} icon={GiBarn} title="Home" active description="Home"/>
                <NavItem navSize={navSize} icon={GiFarmer} title="Find A Local Farmer Near You"/>
                <NavItem navSize={navSize} icon={GiFarmTractor} title="Your Farm"/>
                <NavItem navSize={navSize} icon={CgProfile} title="Profile"/>
            </Flex>

                <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == 'small' ? "center" : "flex-start"}
                mb={4}
                >
                    <Divider display={navSize == 'small' ? "none" : "flex"}/>
                    <Flex mt={4} align='center'>
                        <Avatar size="sm" p='0' src={lightLogo} />
                        <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
                            <Heading as='h3' size="sm">Alexander Leino</Heading>
                            <Text>UI Designer</Text>
                        </Flex>
                    </Flex>
                </Flex>
       </Flex>
    )
}

export default SideNavBar

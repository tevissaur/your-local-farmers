import { useMutation, useQuery, useLazyQuery } from '@apollo/client'
import { Box, Flex, Container, Button, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GET_ME } from '../utils/queries'
import SideNavBar from '../components/SideNavBar'
import UserMain from '../components/UserMain.js'
import Header from '../components/Header'

import MyFarmForm from '../components/MyFarmForm'
import MyFarmTabs from '../components/MyFarmTabs'
import Auth from '../utils/auth';
import Footer from '../components/Footer'

const Profile = () => {
    const [userData, setUserData] = useState({})
    const { data: { _id } } = Auth.getProfile()

    console.log(_id)
    const { data, loading, error } = useQuery(GET_ME, {
        variables: { id: _id }
    })
    useEffect(() => {
        try {
            loading ? console.log(loading) : setUserData(data.me)
            console.log(data, loading, error)
            console.log(userData)

        } catch (err) {
            console.log(err)
        }

        // setUserData(data)

    }, [loading, data, error, userData])

    return (
        <>
            <Flex>
                <SideNavBar />
                <Box m={4} flex="1">
                    <Header />
                    <Flex justifyContent='center' w="100%" borderRadius='10px' border='1px grey solid'>
                        <Tabs isFitted variant='enclosed' colorScheme='green' w='100%' p={3}>
                            <TabList >
                                <Tab>Home</Tab>
                                <Tab>My Farm</Tab>
                                <Tab>My Orders</Tab>
                            </TabList>

                            <TabPanels>
                                {/* Tab for the main profile page */}
                                <TabPanel>
                                    <UserMain userData={userData} />
                                </TabPanel>
                                <TabPanel p={1}>
                                    <MyFarmTabs userData={userData.isFarmer} />
                                </TabPanel>
                                <TabPanel>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Flex>
                </Box>
            </Flex>

            <Footer />
        </>
    )
}

export default Profile
import { useMutation, useQuery, useLazyQuery } from '@apollo/client'
import { Box, Flex, Container, Button, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GET_ME } from '../utils/queries'
import SideNavBar from '../components/SideNavBar'
import Header from '../components/Header'
import Auth from '../utils/auth';

const Profile = () => {
    const [userData, setUserData] = useState({})
    const { data: { _id } } = Auth.getProfile()
    const { data, loading, error } = useQuery(GET_ME, {
        variables: { id: _id }
    })


    useEffect(() => {

        try {
            loading ? console.log(loading) : setUserData(data.me)

            console.log(data, loading, error)
            // console.log(userData)

        } catch (err) {
            console.log(err)
        }

        // setUserData(data)
    })
    return (
        <>
            <Flex>

                <SideNavBar />
                <Box m={4} flex="1">
                    <Header />
                    <Flex w="100%">
                        <Flex justifyContent='center' w="100%">
                            <Tabs isFitted variant='soft-rounded' colorScheme='green'>
                                <TabList>
                                    <Tab>Home</Tab>
                                    <Tab>My Farm</Tab>
                                    <Tab>My Orders</Tab>
                                </TabList>

                                <TabPanels>
                                    {/* Tab for the main profile page */}
                                    <TabPanel>
                                        <p>one!</p>
                                    </TabPanel>
                                    <TabPanel>
                                        <p>two!</p>
                                    </TabPanel>
                                    <TabPanel>
                                        <p>three!</p>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
        </>
    )
}

export default Profile
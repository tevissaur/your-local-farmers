import { Box, Flex, Container, Button, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import UserMain from '../components/UserMain.js'

import MyFarmForm from '../components/MyFarmForm'
import { useEffect, useState } from 'react'


const MyFarmTabs = ({ isFarmer }) => {
    // console.log(isFarmer)
    const [farmer, setFarmer] = useState(isFarmer)

    useEffect(() => {
        setFarmer(isFarmer)
        console.log(farmer)
    })


    return (
        <Tabs isFitted variant='soft-rounded' colorScheme='green' w='100%' p={0}>
            <TabList >
                <Tab>Farm Profile</Tab>
                {
                    isFarmer ? (<>
                    <Tab>Add Product</Tab>
                    <Tab>Orders</Tab>

                </>) : (<>
                    <Tab isDisabled>Add Product</Tab>
                    <Tab isDisabled>Orders</Tab>

                </>)}
            </TabList>

            <TabPanels>
                {/* Tab for the main profile page */}
                <TabPanel>
                    {/* <UserMain userData={userData} /> */}
                    {isFarmer ? (<>
                        <h1>We are farmers</h1>
                    </>) : (<>
                        <MyFarmForm />
                    </>)}
                </TabPanel>
                <TabPanel>
                </TabPanel>
                <TabPanel>
                    <p>three!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}


export default MyFarmTabs
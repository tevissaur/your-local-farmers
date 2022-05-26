import UserMain from '../components/UserMain.js'

import MyFarmForm from './MyFarmForm'
import { useEffect, useState } from 'react'
import AddProductForm from './AddProductForm.js'


const MyFarmTabs = ({ isFarmer, setIsFarmer }) => {


    return (
        <>
            {/* <Tabs isFitted variant='soft-rounded' colorScheme='green' w='100%' p={1}>
                <TabList >
                    <Tab>Farm Profile</Tab>
                    {
                        isFarmer ? (<>
                            <Tab>Add Product</Tab>
                            <Tab>My Products</Tab>
                            <Tab>Farm Orders</Tab>

                        </>) : (<>
                            <Tab isDisabled>Add Product</Tab>
                            <Tab isDisabled>My Products</Tab>
                            <Tab isDisabled>Farm Orders</Tab>

                        </>)}
                </TabList>

                <TabPanels>
                    Tab for the main profile page
                    <TabPanel>
                        <UserMain userData={userData} />
                        {isFarmer ? (<>
                            <h1>We are farmers</h1>
                        </>) : (<>
                            <MyFarmForm isFarmer={isFarmer} setIsFarmer={setIsFarmer} />
                        </>)}
                    </TabPanel>
                    <TabPanel>
                        <AddProductForm />
                    </TabPanel>
                    <TabPanel>
                        My Products
                    </TabPanel>
                    <TabPanel>

                        <FarmOrders />
                    </TabPanel>
                </TabPanels>
            </Tabs> */}

        </>
    )
}


export default MyFarmTabs
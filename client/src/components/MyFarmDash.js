import {
    Box,
    Container,
    Tab,
    Flex,
    Tabs,
    TabList,
    TabPanel,
    TabPanels
} from '@chakra-ui/react'
import AddProductForm from './AddProductForm';
import { GET_MY_FARM } from '../utils/queries'
import { useQuery } from '@apollo/client'
import MyOrders from './FarmOrders';
import EditFarm from './EditFarm'
import MyFarmProducts from './MyFarmProducts';
import { useEffect, useState } from 'react';

function MyFarmDash({ userId }) {
    console.log(userId)
    const [farm, setFarm] = useState({})

    const { data, loading, error } = useQuery(GET_MY_FARM, {
        variables: {
            id: userId
        }
    })
    useEffect(() => {
        loading ? console.log('loading') : setFarm(data?.farmDashboard)
        // setFarm(data?.farmDashboard)
        console.log(data, loading, error)
    }, [data, loading, error])
    useEffect(() => {
        console.log(farm)
    }, [farm])

    return (
        <Container maxW='100%'>
            <Flex>
                <Box m={4} flex="1">
                    <Flex justifyContent='center' w="100%" borderRadius='10px' border='1px grey solid'>
                        {loading ? (
                            <Tabs isFitted variant='enclosed' colorScheme='green' w='100%' p={3}>
                                {console.log(farm)}
                                <TabList >
                                    <Tab>Orders</Tab>
                                    <Tab>View Products</Tab>
                                    <Tab>Add Product</Tab>
                                    <Tab>Edit Farm</Tab>
                                </TabList>
                                </Tabs>
                        ) : (

                            <Tabs isFitted variant='enclosed' colorScheme='green' w='100%' p={3}>
                                {console.log(farm)}
                                <TabList >
                                    <Tab>Orders</Tab>
                                    <Tab>View Products</Tab>
                                    <Tab>Add Product</Tab>
                                    <Tab>Edit Farm</Tab>
                                </TabList>

                                <TabPanels>
                                    {/* Tab for the main farm page */}
                                    <TabPanel>
                                        <MyOrders />
                                    </TabPanel>

                                    <TabPanel p={1}>
                                        <MyFarmProducts products={farm.products} />
                                    </TabPanel>

                                    <TabPanel>
                                        <AddProductForm farmId={farm._id} setFarm={setFarm} />

                                    </TabPanel>

                                    <TabPanel>
                                        <EditFarm thisFarm={farm} />
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        )}

                    </Flex>
                </Box>
            </Flex>
        </Container>
    )
}

export default MyFarmDash;
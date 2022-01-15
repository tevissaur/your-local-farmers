import {
    Box,
    Container,
    Tab,
    Flex,
    Tabs,
    TabList,
    TabPanel,
    TabPanels,
    useQuery
} from '@chakra-ui/react'
import AddProductForm from './AddProductForm';
import {GET_MY_FARM} from '../utils/queries'
import MyOrders from './FarmOrders';
import EditFarm from './EditFarm'
import MyFarmProducts from './MyFarmProducts';

function MyFarmDash({ farmData }) {
    // console.log(farmData)

    return (
        <Container maxW='100%'>
            <Flex>
                <Box m={4} flex="1">
                    <Flex justifyContent='center' w="100%" borderRadius='10px' border='1px grey solid'>
                        <Tabs isFitted variant='enclosed' colorScheme='green' w='100%' p={3}>
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
                                    <MyFarmProducts products={farmData}/>
                                </TabPanel>

                                <TabPanel>
                                    <AddProductForm />

                                </TabPanel>

                                <TabPanel>
                                    <EditFarm thisFarm={farmData}/>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Flex>
                </Box>
            </Flex>
        </Container>
    )
}

export default MyFarmDash;
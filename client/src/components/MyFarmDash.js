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
import { useState, useEffect } from 'react'

function MyFarmDash({userData}) {
    const [farmData, setFarmData] = useState({})

    const {data, loading, error} = useQuery(GET_MY_FARM,{
        variables: {id: userData.me._id}
    })
    useEffect(() => {
        try {
            loading? console.log(loading) : console.log(data)
        }
        catch (err){
            console.log(err)
        }
    }, [loading, data, error, farmData])

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

                                </TabPanel>

                                <TabPanel>
                                    <EditFarm farmData={farmData}/>
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
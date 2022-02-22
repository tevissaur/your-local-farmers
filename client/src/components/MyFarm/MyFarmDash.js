
import AddProductForm from './AddProductForm';
import { GET_MY_FARM } from '../../utils/queries'
import { useQuery } from '@apollo/client'
import MyOrders from './FarmOrders';
import EditFarm from './EditFarm'
import MyFarmProducts from './MyFarmProducts';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

function MyFarmDash({ userId }) {
    console.log(userId)
    const [farm, setFarm] = useState({})
    const [purchasedOrder, setPurchasedOrder] = useState([]);
    const [itemNameArr, setItemNameArr] = useState([]);
    const [sumTotal, setSumTotal] = useState("");

    const { data, loading, error } = useQuery(GET_MY_FARM, {
        variables: {
            id: userId
        }
    })
    useEffect(() => {
        loading ? console.log('loading') : setFarm(data?.farmDashboard)
        // setFarm(data?.farmDashboard)
        console.log(data, loading, error)

        if (!loading && farm && farm.purchaseOrders){
            // const purchasedOrder = farm.purchaseOrders.map((order) => order);
            // setPurchasedOrder(purchasedOrder);
    
            // const orderTotalArr = farm.purchaseOrders.map(
            //   (order) => order.orderTotal
            // );
            // console.log(orderTotalArr);
            // let sumOrderTotal = orderTotalArr.reduce(function (
            //   previousValue,
            //   currentValue
            // ) {
            //   return previousValue + currentValue;
            // });
            // setSumTotal(sumOrderTotal);
    
            // const items = farm.purchaseOrders.map((order) => order.items);
            // console.log(items);
            // const seller = farm.purchaseOrders.map(
            //   (order) => order.seller.name
            // );
            // console.log(seller);
            // const itemName = items.map((item) => item[0].name);
            // setItemNameArr(itemName);

            
          
        }
    }, [data, loading, error])
    useEffect(() => {
        console.log(farm)
    }, [farm])

    
    


    return (
        <Box maxW='100%'>
            <Box>
                <Box m={4} flex="1">
                    {/* <Box justifyContent='center' w="100%" borderRadius='10px' border='1px grey solid'>
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
                                    Tab for the main farm page
                                    <TabPanel>
                                         <MyOrders thisFarm={farm}/>
                                    </TabPanel>

                                    <TabPanel p={1}>
                                        <MyFarmProducts products={farm?.products} />
                                    </TabPanel>

                                    <TabPanel>
                                        <AddProductForm farmId={farm?._id} setFarm={setFarm} />

                                    </TabPanel>

                                    <TabPanel>
                                        <EditFarm thisFarm={farm} />
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        )}

                    </Box> */}
                </Box>
            </Box>
        </Box>
    )
}

export default MyFarmDash;
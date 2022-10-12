import AddProductForm from './AddProductForm';
import { useQuery } from '@apollo/client'
import FarmOrders from './FarmOrders';
import EditFarm from './EditFarm'
import MyFarmProducts from './MyFarmProducts';
import { useEffect } from 'react';
import { TabPanel, a11yProps } from '../../../components/TabPanel/TabPanel'
import { Box, Tab, Tabs } from '@mui/material';
import AuthService from '../../../services/authentication.service';
import StoreService from '../../../services/store.service'
import store from '../../../utils/store';
import { setMyFarm, setOpenTab } from '../../../resources/farm-dashboard/dashboard.actions';
import { GET_MY_FARM } from '../../../resources/farm-dashboard/dashboard.controller';





const MyFarmDash = () => {
    const { dashboard: { ui: { openTab } } } = store.getState()
    const { data: { _id } } = AuthService.getProfile()
    const { data, loading, error } = useQuery(StoreService.queryBuilder(GET_MY_FARM), {
        variables: {
            id: _id
        }
    })


    useEffect(() => {
        loading ? console.log('loading') : store.dispatch(setMyFarm(data?.farmDashboard))
    }, [data, loading, error])

    const handleChange = (e, newOpenTab) => {
        store.dispatch(setOpenTab(newOpenTab))
    }



    return (
        <Box sx={{
            margin: '10px 30px',

        }} justifyContent='center' w="100%" borderRadius='10px' border='1px grey solid'>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

                <Tabs
                    centered
                    value={openTab}
                    onChange={handleChange}
                    p={3}
                    sx={{ color: 'white', width: '100%' }}
                >
                    <Tab sx={{ flexGrow: 1 }} label="Orders" {...a11yProps(0)} />
                    <Tab sx={{ flexGrow: 1 }} label="View Products" {...a11yProps(1)} />
                    <Tab sx={{ flexGrow: 1 }} label="Add Product" {...a11yProps(2)} />
                    <Tab sx={{ flexGrow: 1 }} label="Edit Farm" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <TabPanel value={openTab} index={0}>
                <FarmOrders />
            </TabPanel>

            <TabPanel value={openTab} index={1}>
                <MyFarmProducts />
            </TabPanel>

            <TabPanel value={openTab} index={2}>
                <AddProductForm />
            </TabPanel>

            <TabPanel value={openTab} index={3}>
                <EditFarm />
            </TabPanel>

        </Box >
    )
}

export default MyFarmDash;
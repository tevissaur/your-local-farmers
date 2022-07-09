import { useMutation, useQuery, useLazyQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { GET_ME } from "../../utils/queries";
import UserMain from "./components/UserMain";
import AuthService from '../../services/authentication.service'
import { Box, Tab, Tabs } from "@mui/material";
import { TabPanel, a11yProps } from '../../components/TabPanel/TabPanel'
import store from "../../utils/store";
import { } from 'redux'
import { setOpenTabProfile, setProfileData } from "../../resources/profile/profile.actions";
import UserOrders from "./components/UserOrders";


const Profile = () => {
  const {
    profile: {
      loggedIn,
      ui: {
        openTab
      },
      userData
    }
  } = store.getState()


  const { data: { _id } } = AuthService.getProfile();

  const { data, loading, error } = useQuery(GET_ME, {
    variables: { id: _id }
  });
  
  useEffect(() => {
  }, [])

  useEffect(async () => {
    try {
      loading ? console.log(loading) : await store.dispatch(setProfileData(data?.me));
    } catch (err) {
      console.log(err);
    }



  }, [loading, data, error]);

  const handleChange = (e, newOpenTab) => {
    store.dispatch(setOpenTabProfile(newOpenTab))
  }

  if (loading) return "loading";
  return (
    <>
      <Box m={4} flex="1">
        <Box
          justifyContent="center"
          w="100%"
          borderRadius="10px"
          border="1px grey solid"
          backgroundColor="lightYellow"
        >
          {AuthService.loggedIn() && loggedIn ? (
            <>
              <Tabs
                centered
                value={openTab}
                onChange={handleChange}
                p={3}
                sx={{ color: 'white', width: '100%' }}
              >
                <Tab sx={{ flexGrow: 1 }} label="My Orders" {...a11yProps(0)} />
                <Tab sx={{ flexGrow: 1 }} label="Edit Profile" {...a11yProps(1)} />
              </Tabs>
              <TabPanel>
                <UserMain userData={userData} />
              </TabPanel>

              <TabPanel>
                <UserOrders />

                {/* Order Total : ${sumTotal} */}
              </TabPanel>
            </>
          ) : (
            <>

            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Profile;

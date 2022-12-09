import { useMutation, useQuery, useLazyQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { GET_ME } from "../../utils/queries";
import UserMain from "./components/UserMain";
import AuthService from "../../services/authentication.service";
import { Box, Tab, Tabs } from "@mui/material";
import { TabPanel, a11yProps } from "../../components/TabPanel/TabPanel";
import store, { RootState } from "../../utils/store";
import UserOrders from "./components/UserOrders";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../utils/slices/profile-slice";
import { useGetMeQuery } from "../../services/api.service";
import { setOpenTab } from "../../utils/slices/ui-slice";

const Profile = () => {
	const {
		user: {
			loggedIn,
			userData: { _id },
		},
		ui: { openTab },
	} = useSelector((state: RootState) => state);

	const dispatch = useDispatch();

	// const { data: { _id } } = AuthService.getProfile();

	const { data, isLoading, error } = useGetMeQuery(_id)

	useEffect(() => {}, []);

	useEffect(() => {
		try {
			isLoading ? console.log(isLoading) : dispatch(setUserData(data?.me));
		} catch (err) {
			console.log(err);
		}
	}, [isLoading, data, error]);

	const handleChange = (e, newOpenTab) => {
		dispatch(setOpenTab(newOpenTab));
	};

	if (isLoading) return null;
	return (
		<>
			<Box m={4} flex="1">
				{/* <Box
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
              </TabPanel>
            </>
          ) : (
            <>

            </>
          )}
        </Box> */}
			</Box>
		</>
	);
};

export default Profile;

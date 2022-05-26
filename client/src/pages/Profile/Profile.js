import { useMutation, useQuery, useLazyQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import { GET_ME } from "../../utils/queries";
import UserMain from "./components/UserMain";
import Auth from "../../utils/auth";
import { Box, Tab, Tabs, Typography } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [purchasedOrder, setPurchasedOrder] = useState([]);
  const [itemNameArr, setItemNameArr] = useState([]);
  const {
    data: { _id },
  } = Auth.getProfile();

  console.log(_id);
  const { data, loading, error } = useQuery(GET_ME, {
    variables: { id: _id },
  });
  useEffect(() => {
    try {
      loading ? console.log(loading) : setUserData(data.me);

      console.log(data, loading, error);
      console.log(userData);
      if (userData) {
        const purchasedOrder = userData.purchasedOrders.map((order) => order);
        setPurchasedOrder(purchasedOrder);

        const orderTotalArr = userData.purchasedOrders.map(
          (order) => order.orderTotal
        );
        console.log(orderTotalArr);
        let sumOrderTotal = orderTotalArr.reduce(function (
          previousValue,
          currentValue
        ) {
          return previousValue + currentValue;
        });
        // setSumTotal(sumOrderTotal);

        const items = userData.purchasedOrders.map((order) => order.items);
        console.log(items);
        const seller = userData.purchasedOrders.map(
          (order) => order.seller.name
        );
        console.log(seller);
        const itemName = items.map((item) => item[0].name);
        setItemNameArr(itemName);
      }
    } catch (err) {
      console.log(err);
    }


  }, [loading, data, error, userData]);
  console.log(purchasedOrder.map((order) => order.dateCreated))


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
          {Auth.loggedIn() ? (
            <>
              <Tabs value>
                <Tab color="black">Home</Tab>
                <Tab color="black">My Orders</Tab>

              </Tabs>
              <TabPanel>
                <UserMain userData={userData} />
              </TabPanel>

              <TabPanel>
                {purchasedOrder.map((order, idx) => (
                  <Box key={idx} m="10px" border="green 2px solid" borderRadius="25px"
                    boxShadow="2px 2px green" p="10px" px="15px">
                    <Box >
                      <Typography>Order Date : {new Date(parseInt(order.dateCreated)).toISOString().slice(0, 10).split('-').reverse().join('/')}</Typography>
                      <Typography> Order Total : ${order.orderTotal}.00</Typography>
                    </Box>
                    <Box>
                      <Typography>
                        {order.items.map((item, idx) => (
                          <Typography
                            key={idx}
                            style={{ fontWeight: "bolder" }}
                          >
                            {item.name}
                          </Typography>
                        ))}
                      </Typography>
                    </Box>

                    <Typography color="green"> from {order.seller.name}</Typography>
                  </Box>
                ))}

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

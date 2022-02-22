import { useMutation, useQuery, useLazyQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { GET_ME } from "../utils/queries";
import UserMain from "../components/MyProfile/UserMain.js";
import Auth from "../utils/auth";
import { Box, Tab, Tabs } from "@mui/material";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [purchasedOrder, setPurchasedOrder] = useState([]);
  const [itemNameArr, setItemNameArr] = useState([]);
  const [sumTotal, setSumTotal] = useState("");
  const [isFarmer, setIsFarmer] = useState(userData.isFarmer);
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
        setSumTotal(sumOrderTotal);

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
              {/* <Tabs isFitted variant="enclosed" color="black" w="100%" p={3}>
                    <Tab color="black">Home</Tab>
                    <Tab color="black">My Orders</Tab>

                  <TabPanels>
                    Tab for the main profile page
                    <TabPanel>
                      <UserMain userData={userData} />
                    </TabPanel>

                    <TabPanel>
                      {purchasedOrder.map((order, idx) => (
                        <Box key={idx} m="10px" border="green 2px solid"  borderRadius="25px"
                        boxShadow="2px 2px green" p="10px" px="15px">
                          <Box >
                            <Text>Order Date : {new Date(parseInt(order.dateCreated)).toISOString().slice(0, 10).split('-').reverse().join('/')}</Text>
                            <Text> Order Total : ${order.orderTotal}.00</Text>
                          </Box>
                          <Flex>
                            <Text>
                              {order.items.map((item, idx) => (
                                <Text
                                  key={idx}
                                  style={{ fontWeight: "bolder" }}
                                >
                                  {item.name}
                                </Text>
                              ))}
                            </Text>
                          </Flex>

                          <Text color="green"> from {order.seller.name}</Text>
                        </Box>
                      ))}

                      Order Total : ${sumTotal}
                    </TabPanel>
                  </TabPanels>
                </Tabs> */}
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

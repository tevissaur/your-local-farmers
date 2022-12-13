import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import store, { RootState } from "../../../utils/store";


const UserOrders = () => {
    const { 
        user: { 
            userData: {
                orders
            }
        } 
    } = useSelector((state: RootState) => state);

    return (
        <>
            {orders?.map((order, idx) => (
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
        </>
    )
}

export default UserOrders
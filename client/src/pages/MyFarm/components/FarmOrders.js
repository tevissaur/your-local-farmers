import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import store from '../../../utils/store';

function MyOrders() {
  const { dashboard: { myFarm } } = store.getState()


  useEffect(() => {

  }, [myFarm])

  return (
    <>{myFarm?.purchaseOrders  ? (
      <Box>
        <Box>
          {myFarm.purchaseOrders.map((order, idx) => (
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

              <Typography color="green"> from {order.buyer.firstName}</Typography>
            </Box>
          ))}

          {/* Order Total : ${sumTotal} */}

        </Box>
      </Box>) :
      (<>No Purchase Orders yet!</>)}
    </>
  )

}

export default MyOrders
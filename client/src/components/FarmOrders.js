import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    useDisclosure,
    Box,
    Button,
    Container,
    Textarea,
    Tab,
    Flex,
    Tabs,
    TabList,
    TabPanel,
    TabPanels,
    Text
    
} from '@chakra-ui/react'
import { GET_PO} from '../utils/queries'
import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react';

function MyOrders({thisFarm}){
    const [farm, setFarm] = useState(thisFarm)
    console.log(thisFarm)
    
    
    useEffect(() => {
        setFarm(thisFarm)
        console.log(farm)
    }, [thisFarm])

    return(
        <>{farm?.purchaseOrders ? ( 
            <Container>
            <Box>
            {farm.purchaseOrders.map((order, idx) => (
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

                          <Text color="green"> from {order.buyer.firstName}</Text>
                        </Box>
                      ))} 

                       {/* Order Total : ${sumTotal} */}

            </Box>
        </Container>) :
        (<Container></Container>)}
        </>
    )
    
}

export default MyOrders
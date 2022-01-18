import { useEffect, useState, useRef } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PO } from "../utils/mutations";
import PlaceOrderBtn from "./PlaceOrderBtn";
import {
  useDisclosure,
  Box,

  Stack,
  Select,
  Flex,
  FormLabel,
  Text,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import auth from "../utils/auth";

const CheckOutBtn = ({ cartItems, totalPrice }) => {
 
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [pickUpDate, setPickUpDate] = useState("");
  const [pickUpTime, setPickUpTime] = useState("");
 
  const firstField = useRef();
  const profile = auth.getProfile();

  return (
    <>
      <Button
        fontSize="25px"
        border="1px solid grey"
        boxShadow="1px 1px black"
        backgroundColor="primary.lightGreen"
        onClick={onOpen}
      >
        Checkout
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Checkout{" "}
            {cartItems.reduce((total, item) => (total += item.quantity), 0)}{" "}
            items
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Text>Pickup Name: <span style={{color:"green", fontWeight:"bolder"}}>{profile.data.firstName}</span></Text>

              <Box>
                <FormLabel htmlFor="owner">Select Pickup Date</FormLabel>
                <Select
                  id="date"
                  placeholder="Select Pickup Date"
                  backgroundColor="primary.yellowGreen"
                  onChange={(e) => {
                    const today = new Date();
                    const selectedPickUpDate = new Date();

                    selectedPickUpDate.setDate(
                      today.getDate() + parseInt(e.target.value)
                    );
                    console.log(selectedPickUpDate);

                    setPickUpDate(selectedPickUpDate.toLocaleDateString());
                  }}
                >
                  <option value="1">Tomorrow</option>
                  <option value="2">2 days from now</option>
                  <option value="3">3 days from now</option>
                </Select>
              </Box>
              <Box>
                <FormLabel htmlFor="time">Select Pickup Time</FormLabel>
                <Select
                  id="time"
                  placeholder="Select Pickup Time"
                  backgroundColor="primary.yellowGreen"
                  onChange={(e) => setPickUpTime(e.target.value)}
                >
                  <option>8AM</option>
                  <option>9AM</option>
                  <option>10AM</option>
                  <option>11AM</option>
                  <option>12PM</option>
                  <option>1PM</option>
                  <option>2PM</option>
                  <option>3PM</option>
                  <option>4PM</option>
                  <option>5PM</option>
                  <option>6PM</option>
                </Select>
              </Box>
              <Box>
                <Text color="green" fontSize="2xl" style={{fontWeight:"bolder"}}>Order Summary</Text>
                <Text>
                  Total Items :{" "}
                  {cartItems.reduce(
                    (total, item) => (total += item.quantity),
                    0
                  )}
                </Text>
                <Text>
                  Pickup on <span  style={{fontWeight:"bolder"}}>{pickUpDate} </span>at <span  style={{fontWeight:"bolder"}}>{pickUpTime}</span>
                </Text>
           
                <Text>Order Total : <span style={{fontWeight:"bolder", color:"green"}} > ${totalPrice}.00</span></Text>
               
              
              
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <PlaceOrderBtn cartItems={cartItems} pickUpDate={pickUpDate} pickUpTime={pickUpTime} totalPrice={totalPrice} buyer={profile.data._id}/>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CheckOutBtn;

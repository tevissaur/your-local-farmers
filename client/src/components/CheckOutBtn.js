import { useEffect, useState, useRef } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PO } from "../utils/mutations";
import PlaceOrderBtn from "./PlaceOrderBtn";
import {
  useDisclosure,
  Box,
  Input,
  Stack,
  Select,
  Textarea,
  InputLeftAddon,
  InputRightAddon,
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

const CheckoutBtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();
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
          <DrawerHeader borderBottomWidth="1px">Checkout 10 items</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Text>Pickup Name: Name</Text>

              <Box>
                <FormLabel htmlFor="owner">Select Pickup Date</FormLabel>
                <Select
                  id="date"
                  placeholder="Tomorrow"
                  backgroundColor="primary.yellowGreen"
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
                  placeholder="8AM"
                  backgroundColor="primary.yellowGreen"
                >
                  <option value="1">8AM</option>
                  <option value="2">9AM</option>
                  <option value="3">10AM</option>
                  <option value="4">11AM</option>
                  <option value="5">12PM</option>
                  <option value="6">1PM</option>
                  <option value="7">2PM</option>
                  <option value="8">3PM</option>
                  <option value="9">4PM</option>
                  <option value="10">5PM</option>
                  <option value="11">6PM</option>
                </Select>
              </Box>
              <Box>
                <Text>Order Summary</Text>
                <Text>Total Items : ()</Text>
                <Text>Pickup on (date) at (time)</Text>
                <Text>Order Total :()</Text>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
          <PlaceOrderBtn />
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
           
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CheckoutBtn;

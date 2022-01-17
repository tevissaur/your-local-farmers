import {
  useDisclosure,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import customTheme from "../extendedTheme";
import { QUERY_PRODUCTS, QUERY_FARM } from "../utils/queries";
import { useQuery, useMutation } from "@apollo/client";

const PlaceOrderBtn = ({cartItems}) => {
 
  const { isOpen, onOpen, onClose } = useDisclosure();
  
 

  const redirectHome = () => {
    onClose();
    // window.location.href="/"
    // localStorage.removeItem("cartItems")
  };
  const handlePlaceOrder = () => {
  
    console.log(cartItems);
    console.log(localStorage.getItem("purchasedOrders"))
    const purchasedOrders = JSON.parse(localStorage.getItem("purchasedOrders")) || []
   
    purchasedOrders.push(cartItems)
    localStorage.setItem("purchasedOrders", JSON.stringify(purchasedOrders) )

 
    onOpen();
      
  };

  return (
    <div>
      <Button backgroundColor="primary.yellowGreen" onClick={handlePlaceOrder}>
        Place Your Order
      </Button>
      <Modal isOpen={isOpen} onClose={redirectHome}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Your Local Farmer</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Your order has been submitted.Thank you for shopping with us! See
              you soon!
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              backgroundColor="primary.yellowGreen"
              mr={3}
              onClick={redirectHome}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default PlaceOrderBtn;

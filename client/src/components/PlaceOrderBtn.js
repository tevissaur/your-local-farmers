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


const PlaceOrderBtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const redirectHome =() =>{
    onClose()
    window.location.href="/"
  }
  return (
    <div>
      <Button backgroundColor="primary.yellowGreen"  onClick={onOpen}>Place Your Order</Button>
      <Modal isOpen={isOpen} onClose={redirectHome}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Your Local Farmer</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Your order has been submitted.Thank you for shopping with us! See you soon!</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={redirectHome}>
              Close
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default PlaceOrderBtn

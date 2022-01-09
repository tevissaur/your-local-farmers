import {useState, useRef} from "react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    useDisclosure,
    Box,
    Flex
  } from '@chakra-ui/react'

function Signup() {
const { isOpen, onOpen, onClose } = useDisclosure()

const initialRef = useRef()
const finalRef = useRef()

return (
    <>

    <Box>
        <Flex wrap='wrap'>
            <Button onClick={onOpen} bg="primary.lightGreen" mr="4">Sign Up</Button>
            <Button bg="primary.lightGreen">Log in</Button>
        </Flex>
    </Box>

    <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
    >
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>Create your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
            <FormControl>
            <FormLabel>First name</FormLabel>
            <Input ref={initialRef} placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
            <FormLabel>Last name</FormLabel>
            <Input placeholder='Last name' />
            </FormControl>
        </ModalBody>

        <ModalFooter>
            <Button colorScheme='blue' mr={3}>
            Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
        </ModalContent>
    </Modal>
    </>
)
}

export default Signup;
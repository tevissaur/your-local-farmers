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
    Box
  } from '@chakra-ui/react'

function LoginForm() {
const { isOpen, onOpen, onClose } = useDisclosure()

const initialRef = useRef()
const finalRef = useRef()

return (
    <>

    <Box>
        <Button onClick={onOpen} bg="primary.lightGreen" mr="4">
        Login
        </Button>
    </Box>

    <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
    >
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>Login</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
            <FormControl>
            <FormLabel>Email</FormLabel>
            <Input ref={initialRef} placeholder='Email' />
            </FormControl>

            <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input placeholder='Password' />
            </FormControl>
        </ModalBody>

        <ModalFooter>
            <Button colorScheme='blue' mr={3}>
            Login
            </Button>
            <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
        </ModalContent>
    </Modal>
    </>
)
}

export default LoginForm;
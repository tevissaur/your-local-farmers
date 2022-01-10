import { useState, useRef } from "react";
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
    const [input, setInput] = useState('')
    const initialRef = useRef()
    const finalRef = useRef()
    const isError = input === ''

    const handleInputChange = (e) => {
        console.log(e.target)
        setInput(e.target.value)
    }

    const handleFormSubmit = async (e) => {
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        const email = document.getElementById('email').value
        //const passcheck = document.getElementById('passcheck').value

        // if (password != passcheck){
        //     return
        // }

        if (email === null) {
            email.isError = true
        }
    }



    return (
        <>

            <Box>
                <Button onClick={onOpen} bg="primary.lightGreen" mr="4">
                    Sign Up
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
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Username</FormLabel>
                            <Input ref={initialRef}
                                placeholder='Username'
                                type='text'
                                id='username'
                                onChange={handleInputChange}
                            />
                            {!isError ? (
                                <FormHelperText>
                                    Enter a unique username
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>username is required.</FormErrorMessage>
                            )}
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Email</FormLabel>
                            <Input
                                placeholder='Email'
                                type='email'
                                id='email'

                                onChange={handleInputChange}
                            />
                            {!isError ? (
                                <FormHelperText>
                                    Enter your email address
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>Email is required.</FormErrorMessage>
                            )}
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Password</FormLabel>
                            <Input
                                placeholder='Password'
                                type='password'
                                id='password'
                                onChange={handleInputChange}
                            />
                            {!isError ? (
                                <FormHelperText>
                                    Enter a unique password
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>Password is required.</FormErrorMessage>
                            )}
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Confirm Password</FormLabel>
                            <Input placeholder='Password'
                                onChange={handleInputChange}
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>

                        <Button onClick={handleFormSubmit} colorScheme='blue' mr={3}>
                            Submit
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Signup;
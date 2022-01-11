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
    Box
} from '@chakra-ui/react';
import customTheme from "../extendedTheme";

import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';
import Auth from '../utils/auth';


function Signup() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [input, setInput] = useState('')
    const initialRef = useRef()
    const finalRef = useRef()
    const [emailAddress, setEmailAdress] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const isInvalid = password === '' || emailAddress === '' || userName === '';

    const [createUser] = useMutation(CREATE_USER);


    const handleFormSubmit = async (e) => {
        e.preventDefault();

        //Check if username is taken or not
        //Check password strength later
        
        const userData = {
            username: userName,
            email: emailAddress,
            password: password
        }

        try {
            const { data: { createUser: { token } } } = await createUser({
                variables: {
                    ...userData
                }
            })
            Auth.login(token)

        }
        catch (err) {
            console.log(err)
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
                <form onSubmit={handleFormSubmit}>
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
                                    onChange={({ target }) => setUserName(target.value)}
                                />
                                {isInvalid ? (
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
                                    value={emailAddress}
                                    onChange={({ target }) => setEmailAdress(target.value)}
                                />
                                {isInvalid ? (
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
                                    value={password}
                                    onChange={({ target }) => setPassword(target.value)}
                                />
                                {isInvalid ? (
                                    <FormHelperText>
                                        Enter a unique password
                                    </FormHelperText>
                                ) : (
                                    <FormErrorMessage>Password is required.</FormErrorMessage>
                                )}
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>

                            <Button type="submit" colorScheme='blue' mr={3} disabled={isInvalid}>
                                Submit
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>

                        </ModalFooter>

                    </ModalContent>
                </form>
            </Modal>

        </>
    )
}

export default Signup;
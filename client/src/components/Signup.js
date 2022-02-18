import { useState, useRef } from "react";

import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Box, Button, Modal, FormLabel, FormControl, Input, FormHelperText, Typography } from "@mui/material";


function Signup() {
    const initialRef = useRef()
    const finalRef = useRef()
    const [emailAddress, setEmailAdress] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [firstName, setFirstName] = useState('');
    const isInvalid = password === '' || emailAddress === '' || userName === '';

    const [createUser] = useMutation(CREATE_USER);


    const handleFormSubmit = async (e) => {
        e.preventDefault();

        //Check if username is taken or not
        //Check password strength later
        
        const userData = {
            username: userName,
            email: emailAddress,
            password: password,
            firstName: firstName
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
                <Button  bg="primary.lightGreen" mr="4">
                    Sign Up
                </Button>

            </Box>

            {/* <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                open={false}
            >
                <ModalOverlay />
                <form onSubmit={handleFormSubmit}>
                    <Box>

                        <Typography>Create your account</Typography>
                        <ModalCloseButton />
                        <Box pb={6}>
                            <FormControl>
                                <FormLabel>Username</FormLabel>
                                <Input ref={initialRef}
                                    placeholder='Username'
                                    type='text'
                                    id='username'
                                    onChange={({ target }) => setUserName(target.value)}
                                />
                                {isInvalid ? (
                                    <Typography>
                                        Enter a unique username
                                    </Typography>
                                ) : (
                                    <Typography>username is required.</Typography>
                                )}
                            </FormControl>
                            
                            <FormControl>
                                <FormLabel>First Name</FormLabel>
                                <Input ref={initialRef}
                                    placeholder='First name'
                                    type='text'
                                    id='firstName'
                                    onChange={({ target }) => setFirstName(target.value)}
                                />
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
                                    <Typography>
                                        Enter your email address
                                    </Typography>
                                ) : (
                                    <Typography>Email is required.</Typography>
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
                                    <Typography>
                                        Enter a unique password
                                    </Typography>
                                ) : (
                                    <Typography>Password is required.</Typography>
                                )}
                            </FormControl>
                        </Box>

                        <Box>

                            <Button type="submit" colorScheme='blue' mr={3} disabled={isInvalid}>
                                Submit
                            </Button>
                            <Button>Cancel</Button>

                        </Box>

                    </Box>
                </form>
            </Modal> */}

        </>
    )
}

export default Signup;
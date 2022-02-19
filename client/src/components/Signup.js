import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Box, Button, Modal, FormLabel, FormControl, Input, FormHelperText, Typography, Fade } from "@mui/material";
import store from "../utils/store";
import { setSignupEmail, setSignupFirstName, setSignupModal, setSignupPass, setSignupUsername } from "../utils/actions";


function Signup() {
    const { ui: { signup: { modal, email, password, firstName, username } } } = store.getState()
    const isInvalid = password === "" || email === "";

    const [createUser] = useMutation(CREATE_USER);

    const handleModal = async (e) => {
        store.dispatch(setSignupModal(!modal))
        console.log(modal, email, password)
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        //Check if username is taken or not
        //Check password strength later

        const userData = {
            username,
            email,
            password,
            firstName
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
            <Button
                sx={{
                    backgroundColor: 'green',
                    marginRight: 4,
                    color: 'black',
                    ':hover': {
                        backgroundColor: 'darkgreen'
                    }
                }} onClick={handleModal}>
                Sign Up
            </Button>
            <Modal
                open={modal}
                onClose={handleModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'fixed',
                    width: 600,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    border: '1px solid',
                    p: 1,
                    bgcolor: 'background.paper',
                }}>

                    <FormControl>
                        <FormLabel>Username</FormLabel>
                        <Input
                            type='text'
                            id='username'
                            value={username}
                            onChange={({ target }) => store.dispatch(setSignupUsername(target.value))}
                        />



                        <FormLabel>First Name</FormLabel>
                        <Input
                            type='text'
                            id='firstName'
                            value={firstName}
                            onChange={({ target }) => store.dispatch(setSignupFirstName(target.value))}
                        />



                        <FormLabel>Email</FormLabel>
                        <Input
                            type='email'
                            id='email'
                            value={email}
                            onChange={({ target }) => store.dispatch(setSignupEmail(target.value))}
                        />


                        <FormLabel>Password</FormLabel>
                        <Input
                            type='password'
                            id='password'
                            value={password}
                            onChange={({ target }) => store.dispatch(setSignupPass(target.value))}
                        />
                    </FormControl>


                    <Button onClick={handleFormSubmit} disabled={isInvalid}>
                        Signup
                    </Button>
                    <Button onClick={handleModal}>Cancel</Button>
                </Box>
            </Modal >


        </>

    )
}

export default Signup;
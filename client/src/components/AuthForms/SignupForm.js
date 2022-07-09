import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../utils/mutations';
import AuthService from '../../services/authentication.service';
import { Box, Modal, FormLabel, FormControl, Input } from "@mui/material";
import { BaseButton as Button } from "../Buttons/BaseButton";
import store from "../../utils/store";
import { setSignupEmail, setSignupFirstName, setSignupModal, setSignupPass, setSignupUsername } from "../../utils/actions";


function SignupForm() {
    const { ui: { signup: { modal, email, password, firstName, username } } } = store.getState()
    const isInvalid = password === "" || email === "";

    const [createUser] = useMutation(CREATE_USER);

    const handleModal = async (e) => {
        store.dispatch(setSignupModal(!modal))
    }
    const clearForm = async () => {

    }


    const handleFormSubmit = async (e) => {
        e.preventDefault();

        /* 
        TODO: Check if username is taken or not
        TODO: Check password strength
        */ 

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
            AuthService.login(token)
            window.location.reload()
        }
        catch (err) {
            console.log(err)
        }


    }



    return (
        <>
            <Button onClick={handleModal}>
                Sign Up
            </Button>




            <Modal
                open={modal}
                onClose={handleModal}
                sx={{
                    borderRadius: '10px'
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'fixed',
                    width: 600,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    border: '1px solid black',
                    borderRadius: '10px',
                    bgcolor: 'background.paper',
                    padding: '20px'
                }}>

                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        margin: '1'
                    }}>
                        <FormControl fullWidth>

                            <FormLabel sx={{
                                margin: '10px 0 0 0'
                            }}>Username</FormLabel>
                            <Input
                                type='text'
                                id='username'
                                value={username}
                                onChange={({ target }) => store.dispatch(setSignupUsername(target.value))}
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <FormLabel sx={{
                                margin: '10px 0 0 0'
                            }}>First Name</FormLabel>
                            <Input
                                type='text'
                                id='firstName'
                                value={firstName}
                                onChange={({ target }) => store.dispatch(setSignupFirstName(target.value))}
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <FormLabel sx={{
                                margin: '10px 0 0 0'
                            }}>Email</FormLabel>
                            <Input
                                type='email'
                                id='email-signup'
                                value={email}
                                onChange={({ target }) => store.dispatch(setSignupEmail(target.value))}
                            />

                        </FormControl>
                        <FormControl fullWidth>
                            <FormLabel sx={{
                                margin: '10px 0 0 0'
                            }}>Password</FormLabel>
                            <Input

                                type='password'
                                id='password-signup'
                                value={password}
                                onChange={({ target }) => store.dispatch(setSignupPass(target.value))}
                            />
                        </FormControl>
                    </Box>


                    <Button onClick={handleFormSubmit} disabled={isInvalid}>
                        Signup
                    </Button>
                    <Button onClick={handleModal}>Cancel</Button>
                </Box>
            </Modal >


        </>

    )
}

export default SignupForm;
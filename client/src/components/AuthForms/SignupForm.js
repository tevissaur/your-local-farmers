import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { Box, Button, Modal, FormLabel, FormControl, Input, FormHelperText, Typography, Fade } from "@mui/material";
import store from "../../utils/store";
import { setSignupEmail, setSignupFirstName, setSignupModal, setSignupPass, setSignupUsername } from "../../utils/actions";


function SignupForm() {
    const { ui: { signup: { modal, email, password, firstName, username } } } = store.getState()
    const isInvalid = password === "" || email === "";

    const [createUser] = useMutation(CREATE_USER);

    const handleModal = async (e) => {
        store.dispatch(setSignupModal(!modal))
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
            <Button sx={{
                borderRadius: '25px',
                paddingX: 1.5,
                color: 'black',
                backgroundColor: 'lightgray',
                border: '1px solid black',
                marginRight: 2,
                ':hover': {
                    backgroundColor: 'white',
                    boxShadow: '1px 1px 0 black'
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
                    border: '1px solid black',
                    borderRadius: '2px',
                    bgcolor: 'background.paper',
                    padding: '20px'
                }}>

                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
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
                                id='email'
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
                                id='password'
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
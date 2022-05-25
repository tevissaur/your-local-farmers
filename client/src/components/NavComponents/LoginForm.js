import { useState, useRef } from "react";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";
import { LOG_IN } from '../../utils/mutations';
import { Box, Button, Backdrop, Modal, FormControl, FormLabel, Input, Typography, Portal, ClickAwayListener } from "@mui/material";
import store from "../../utils/store";
import { setLoginEmail, setLoginModal, setLoginPass } from "../../utils/actions";
import { useDispatch } from 'react-redux'

function LoginForm() {
  const dispatch = useDispatch()
  const { ui: { login: { modal, email, password } } } = store.getState()
  const isInvalid = password === "" || email === "";

  const [LoginUser] = useMutation(LOG_IN);

  const handleModal = async (e) => {
    dispatch(setLoginModal(!modal))
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };

    try {
      const {
        data: {
          login: { token },
        },
      } = await LoginUser({
        variables: {
          ...userData,
        },
      });

      Auth.login(token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Button
        sx={{
          borderRadius: '25px',
          paddingX: 1.5,
                color: 'black',
          backgroundColor: 'lightgray',
          border: '1px solid black',
          ':hover': {
            backgroundColor: 'white',
            boxShadow: '1px 1px 0 black'
          }
        }} onClick={handleModal}>
        Login
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
          height: 400,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          border: '1px solid',
          padding: 'auto 1',
          bgcolor: 'background.paper',
        }}>
          <FormControl width='100%'>
            <Typography variant='h6' textAlign='center'>Login</Typography>
            <FormControl sx={{
              width: '50%',
              margin: 'auto'
            }}>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="Email"
                type="email"
                id="email"
                value={email}
                onChange={({ target }) => dispatch(setLoginEmail(target.value))}
              />
            </FormControl>

            <FormControl sx={{
              width: '50%',
              margin: 'auto'
            }}>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="Password"
                type="password"
                id="password"
                value={password}
                onChange={({ target }) => dispatch(setLoginPass(target.value))}
              />
            </FormControl>

            <Button onClick={handleFormSubmit} disabled={isInvalid} sx={{
              borderRadius: '25px',
              paddingX: 1.5,
              backgroundColor: 'lightgray',
              border: '1px solid black',
              ':hover': {
                backgroundColor: 'white',
                boxShadow: '1px 1px 0 black'
              }
            }}>
              Login
            </Button>
            <Button onClick={handleModal} sx={{
              borderRadius: '25px',
              paddingX: 1.5,
                color: 'black',
              backgroundColor: 'lightgray',
              border: '1px solid black',
              ':hover': {
                backgroundColor: 'white',
                boxShadow: '1px 1px 0 black'
              }
            }}>Cancel</Button>
          </FormControl>
        </Box>
      </Modal>
    </>
  );
}

export default LoginForm;

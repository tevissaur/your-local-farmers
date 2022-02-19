import { useState, useRef } from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { LOG_IN } from "../utils/mutations";
import { Box, Button, Backdrop, Modal, FormControl, FormLabel, Input, Typography, Portal, ClickAwayListener } from "@mui/material";
import store from "../utils/store";
import { setLoginEmail, setLoginModal, setLoginPass } from "../utils/actions";

function LoginForm() {

  const { ui: { login: { modal, email, password } } } = store.getState()
  const { ui } = store.getState()
  const isInvalid = password === "" || email === "";

  const [LoginUser] = useMutation(LOG_IN);

  const handleModal = async (e) => {
    store.dispatch(setLoginModal(!modal))
    console.log(modal, email, password)
    console.log(ui)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    console.log(userData)

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
      <div>
        <Button
          sx={{
            backgroundColor: 'green',
            marginRight: 4,
            color: 'black',
            ':hover': {
              backgroundColor: 'darkgreen'
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
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            border: '1px solid',
            p: 1,
            bgcolor: 'background.paper',
          }}>
            <FormControl>
              <FormLabel>Login</FormLabel>
              <Box>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    placeholder="Email"
                    type="email"
                    id="email"
                    value={email}
                    onChange={({ target }) => store.dispatch(setLoginEmail(target.value))}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Password</FormLabel>
                  <Input
                    placeholder="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={({ target }) => store.dispatch(setLoginPass(target.value))}
                  />
                </FormControl>
              </Box>

              <Button onClick={handleFormSubmit} disabled={isInvalid}>
                Login
              </Button>
              <Button onClick={handleModal}>Cancel</Button>
            </FormControl>
          </Box>
        </Modal>
      </div>


    </>
  );
}

export default LoginForm;

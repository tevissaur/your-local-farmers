import { useState, useRef } from "react";
import AuthService from "../../services/authentication.service";
import { useMutation } from "@apollo/client";
import { LOG_IN } from '../../utils/mutations';
import { Box, Modal, FormControl, FormLabel, Input, Typography } from "@mui/material";
import { BaseButton as Button } from "../Buttons/BaseButton";
import store from "../../utils/store";
import { showLoginModal, updateLoginForm } from "../../resources/auth-forms/auth.actions";

function LoginForm() {
  const { auth: { login: { email, password, modal: loginModal }, authFailed } } = store.getState()
  const isInvalid = password === "" || email === "";
  let payload

  const [LoginUser, { error, loading, data }] = useMutation(LOG_IN);

  const handleModal = async (e) => {
    store.dispatch(showLoginModal(!loginModal))
  }

  const handleChange = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    payload = {
      payload: e.target.value,
      param: e.target.id
    }
    store.dispatch(updateLoginForm(payload))
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
          login: {
            token
          },
        },
      } = await LoginUser({
        variables: {
          ...userData,
        },
      });

      AuthService.login(token);
      window.location.reload()
    } catch (err) {
      console.log(err);

    }
  };

  return (
    <>
      <Button onClick={handleModal}>
        Login
      </Button>

      <Modal
        open={loginModal}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component={'form'}
          onChange={handleChange}
          sx={{
            position: 'fixed',
            width: 600,
            height: 400,
            top: '50%',
            left: '50%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            transform: 'translate(-50%, -50%)',
            border: '1px solid',
            borderRadius: '10px',
            padding: 'auto 1',
            bgcolor: 'ivory',
          }}>
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
            />
          </FormControl>
          <Button
            onClick={handleFormSubmit}
            disabled={isInvalid}
          >
            Login
          </Button>
          <Button onClick={handleModal}>
            Cancel
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default LoginForm;

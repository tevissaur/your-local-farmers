import { useState, useRef } from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { LOG_IN } from "../utils/mutations";
import { Box, Button, Modal, FormControl, FormLabel, Input } from "@mui/material";

function LoginForm() {

  const initialRef = useRef();
  const finalRef = useRef();
  const [emailAddress, setEmailAdress] = useState("");
  const [password, setPassword] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const [LoginUser] = useMutation(LOG_IN);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("bruh");
    const userData = {
      email: emailAddress,
      password: password,
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
      <Box>
        <Button bg="primary.lightGreen" mr="4">
          Login
        </Button>
      </Box>

      {/* <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <ModalOverlay />
        <form onSubmit={handleFormSubmit}>
          <ModalContent>
            <ModalHeader>Login</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Email"
                  type="email"
                  id="email"
                  value={emailAddress}
                  onChange={({ target }) => setEmailAdress(target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input
                  placeholder="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                type="submit"
                colorScheme="blue"
                mr={3}
                disabled={isInvalid}
              >
                Login
              </Button>
              <Button>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal> */}
    </>
  );
}

export default LoginForm;

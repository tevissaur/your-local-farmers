import { Flex, Center, Heading, Box, Button } from "@chakra-ui/react";
import Signup from "./Signup";
import farmerLogo from "../assets/farmerLogo.png";
import LoginForm from "./LoginForm";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import store from '../utils/store'
import { useEffect, useState } from "react";

const Header = () => {
  const state = store.getState()
  console.log(state)
  const [isLoggedIn, setIsLoggedIn] = useState(Auth.loggedIn());
  const handleLogOut = () => {
    Auth.logout();
  };
  useEffect(() => {
    console.log(isLoggedIn);
  });
  return (
    <>
      <Flex alignItems="center">
        {Auth.loggedIn() ? (
          <>
            <Center flex="1">
              <Heading as="h1" fontSize="55px" color="black">
                Your Local Farmers
              </Heading>
            </Center>
            <Flex>
              <Flex>
                <Link to={"/cart"}>
                  <CgShoppingCart fontSize="40px" />
                </Link>
                <span>{store.cartItems === undefined ? (<></>) : store.cartItems.reduce((total, item) => total += item.quantity, 0)}</span>
              </Flex>

              <Button onClick={handleLogOut} m="1">
                Log Out
              </Button>
            </Flex>
          </>
        ) : (
          <>
            <Center flex="1">
              <Heading as="h1" fontSize="55px" color="black">
                Your Local Farmers
              </Heading>
            </Center>
            <Signup></Signup>
            <LoginForm></LoginForm>
            <Link to={"/cart"}>
              <CgShoppingCart fontSize="40px" />
            </Link>
          </>
        )}
      </Flex>

    </>
  );
};
export default Header;

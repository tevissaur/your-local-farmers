import { Flex, Center, Heading, Box, Button } from "@chakra-ui/react";
import Signup from "./Signup";
import farmerLogo from "../assets/farmerLogo.png";
import LoginForm from "./LoginForm";
import SearchBar from "./SearchBar";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import { useEffect, useState } from "react";

const Header = ({ cartItems }) => {
  // console.log(cartItems.length)
  console.log(cartItems.length)
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
        <SearchBar />
        {Auth.loggedIn() ? (
          <>
            <Flex>
              <Flex>
                <Link to={"/cart"}>
                  <CgShoppingCart fontSize="40px" />
                </Link>
                <span>{cartItems.reduce((total,item) =>  total+=item.quantity,0)}</span>
              </Flex>

              <Button onClick={handleLogOut} m="1">
                Log Out
              </Button>
            </Flex>
          </>
        ) : (
          <>
            <Signup></Signup>
            <LoginForm></LoginForm>
            <Link to={"/cart"}>
              <CgShoppingCart fontSize="40px" />
            </Link>
          </>
        )}
      </Flex>
      <Center flex="1">
        <Heading as="h1" fontSize="55px" color="black">
          Your Local Farmers
        </Heading>
      </Center>
    </>
  );
};
export default Header;
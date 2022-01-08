import { Flex, Center, Heading, Box } from "@chakra-ui/react";
import Signup from "../components/Signup";
import LoginForm from "../components/LoginForm";
import customTheme from "../extendedTheme";

const Header = () => {
  return (
    <>
      <Flex bg="primary.lightGreen" borderRadius="15px" p={5} alignItems="center">
        <Box  flex="1">
          <Center>
            <Heading size="md" color="black">
              Your Local Farmers
            </Heading>
          </Center>
        </Box>
        <Signup />
      </Flex>
    </>
  );
};

export default Header;

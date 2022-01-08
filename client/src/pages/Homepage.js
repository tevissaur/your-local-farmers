import SideNavBar from "../components/SideNavBar";
import { Button, Box, Flex, Heading, Spacer, Center } from "@chakra-ui/react";
import CategoryCards from "../components/CategoryCards";
import SearchBar from '../components/SearchBar'
const Homepage = () => {
  return (
    <>
      <Flex>
        <SideNavBar />
        <Box m={4} flex="1">
          <Flex >
            <Center flex="1">
              <Heading size="md" color="black">Your Local Farmers</Heading>
            </Center>
         
            <Box>
              <Button bg="primary.lightGreen" mr="4">
                Sign Up
              </Button>
              <Button bg="primary.lightGreen">Log in</Button>
            </Box>
          </Flex>
        <SearchBar />
          <Box>
            <CategoryCards />
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Homepage;

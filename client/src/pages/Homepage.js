import SideNavBar from "../components/SideNavBar";
import { Button, Box, Flex, Heading, Spacer, Center } from "@chakra-ui/react";
import CategoryCards from "../components/CategoryCards";
import Header from '../components/header'



const Homepage = () => {
  return (
    <>
      <Flex>
        <SideNavBar />
        <Box m={4} flex="1">
          <Header></Header>
          <Box>
            <CategoryCards />
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Homepage;

import SideNavBar from "../components/SideNavBar";
import {
  Button,
  Box,
  Flex,
  Heading,
  Spacer,
  Center,
  Text,
  Container,
} from "@chakra-ui/react";
import CategoryCards from "../components/CategoryCards";
import Header from "../components/header";
import SearchBar from "../components/SearchBar";
import wheat from "../assets/wheat.jpg";
import customTheme from "../extendedTheme";
import SmallCategoryIcon from "../components/SmallCategoryIcon";
import Footer from '../components/Footer'
import SmartSmallIcon from "../components/SmartSmallIcon";

const Homepage = () => {
  return (
    <>
      <Flex>
        <SideNavBar />
        <Box m={1} flex="1">
          <Header />

          <SearchBar />
          <Box mt={1} flex="1">
            <Box
              backgroundColor={customTheme.colors.primary.lightGreen}
              borderRadius="15px"
              height="100%"
              p="15px"
              pb="30px"
            >
              <Flex justifyContent="center">
                <Text
                  fontSize="30px"
                  fontWeight="bold"
                  color="#D0DB97"
                  textAlign="center"
                >
                  Welcome to the online farmers market where you can get locally
                  grown and baked goods!
                </Text>
              </Flex>
              <Flex justifyContent="Center"></Flex>
              <Flex justifyContent="space-evenly" mt={3}>
                <SmartSmallIcon />
              </Flex>
            </Box>
          </Box>
          <Flex>
            <CategoryCards />
          </Flex>
          <Footer />
        </Box>
      </Flex>
    </>
  );
};

export default Homepage;

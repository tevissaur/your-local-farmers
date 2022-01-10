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
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import wheat from "../assets/wheat.jpg";
import customTheme from "../extendedTheme";
import SmallCategoryIcon from "../components/SmallCategoryIcon";
import Footer from '../components/Footer'
import SmartSmallIcon from "../components/SmartSmallIcon";
import css from './Homepage.css'
// import HomePageBody from "../components/HomePageBody";
// import UploadImage from '../components/UploadImage'

const Homepage = () => {
  return (
    <>
      <Flex>
        <SideNavBar />
        <Box m={4} flex="1">

          <Header />
          <SearchBar />

          <Container maxW='98%' mt={2}>
            <Box
              borderRadius='25px'
              height='100%'>
              <Flex justifyContent='center'>
                <Text
                  fontSize='30px'
                  fontWeight='bold'
                  color='#3A7D44'
                  textAlign='center'>
                  Welcome to the online farmers market where you can get locally grown and baked goods!
                </Text>
              </Flex>
              <Flex justifyContent='center' mt={3}>
                <SmartSmallIcon />
              </Flex>
            </Box>
            {/* <UploadImage /> */}
            {/* <HomePageBody /> */}
          </Container>
          <Footer />
        </Box>
      </Flex>
    </>
  );
};

export default Homepage;

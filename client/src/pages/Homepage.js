import SideNavBar from "../components/SideNavBar";
import {Button, Box, Flex, Heading, Spacer} from "@chakra-ui/react";
import CategoryCards from "../components/CategoryCards";
 
const Homepage = () => {
  
  return (
    <>
      <Flex p='2' m={5}>
        <Box >
          <Heading size='md'>Your Local Farmers</Heading>
        </Box>
        <Spacer />
        <Box>
          <Button bg='primary.lightGreen' mr='4'>
            Sign Up
          </Button>
          <Button bg='primary.lightGreen'>Log in</Button>
        </Box>
      </Flex>
      <SideNavBar />
      <CategoryCards />
    
    </>
      
    
  )
}

export default Homepage

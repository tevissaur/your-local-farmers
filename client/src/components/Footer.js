import { Flex, Box, Center, Text } from "@chakra-ui/react";
import customTheme from "../extendedTheme";

const Footer = () => {
  return (
    <>
    <Center bg="white" h="100px" color="primary.darkGreen">
       <Text fontSize='5xl'>Your Local Farmers</Text>
    </Center>
    <Box bg="primary.lightGreen" h="50px" borderRadius="15px">
      
    </Box>
    </>
  );
};

export default Footer;

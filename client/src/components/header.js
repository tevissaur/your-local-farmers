import { Flex, Center, Heading, Box } from "@chakra-ui/react";
import Signup from "../components/Signup";
import farmerLogo from "../assets/farmerLogo.png";


const Header = () => {
  return (
    <>
      <Flex
        bg="primary.lightGreen"
        borderRadius="15px"
        p={3}
        alignItems="center"
        justifyContent="space-between"
      >
       
          <Flex flexDirection="column" alignItems="center">
            <img src={farmerLogo} style={{ width: "80px", height: "80px" }} />
            <Heading size="md" color="black" borderRadius="20px">
              Your Local Farmers
            </Heading>
          </Flex>
        
        <Flex flexDirection="column" alignItems="center">
          <Signup />
          
        </Flex>
      </Flex>
    </>
  );
};

export default Header;

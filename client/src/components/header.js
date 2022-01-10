import { Flex, Center, Heading, Box } from "@chakra-ui/react";
import Signup from "./Signup";
import farmerLogo from "../assets/farmerLogo.png";
import LoginForm from './LoginForm'

const Header = () => {
    return (
        <>
            <Flex >
                <Center flex="1">
                    <Heading as='h1' fontSize='55px' color="black">Your Local Farmers</Heading>
                </Center>

                <Signup></Signup>
                <LoginForm></LoginForm>

            </Flex>

        </>
    )
}
export default Header;

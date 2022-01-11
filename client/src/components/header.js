import { Flex, Center, Heading, Box } from "@chakra-ui/react";
import Signup from "./Signup";
import farmerLogo from "../assets/farmerLogo.png";
import LoginForm from './LoginForm'
import SearchBar from './SearchBar'
import { CgShoppingCart } from 'react-icons/cg'
const Header = () => {
    return (
        <>
            <Flex alignItems='center'>
                <SearchBar />
                <Signup></Signup>
                <LoginForm></LoginForm>
                <CgShoppingCart fontSize='40px'/>

            </Flex>
                <Center flex="1">
                    <Heading as='h1' fontSize='55px' color="black">Your Local Farmers</Heading>
                </Center>

        </>
    )
}
export default Header;


import{Flex, Center, Heading} from '@chakra-ui/react'
import Signup from '../components/Signup';
import LoginForm from '../components/LoginForm';

const Header = () => {
    return (
        <>
            <Flex >
                <Center flex="1">
                    <Heading size="md" color="black">Your Local Farmers</Heading>
                </Center>
                <Signup></Signup>
                <LoginForm></LoginForm>
            </Flex>

        </>
    )
}

export default Header

import{Flex, Center, Heading, Image} from '@chakra-ui/react'
import Signup from './Signup';

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

export default Header
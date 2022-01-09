
import{Flex, Center, Heading, Image} from '@chakra-ui/react'
import Signup from './Signup';

const Header = () => {
    return (
        <>
            <Flex >
                <Center flex="1">
                    <Heading as='h1' fontSize='55px' color="black">Your Local Farmers</Heading>
                </Center>
<<<<<<< HEAD
                <Signup />
=======
                <Signup></Signup>
                <LoginForm></LoginForm>
>>>>>>> 3b0b6914b29af5ec0af42727260a973d5c1aeeb6
            </Flex>

        </>
    )
}

export default Header
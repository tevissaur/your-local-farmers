
import{Flex, Text, Box, Link} from '@chakra-ui/react'
import { BsGithub } from 'react-icons/bs'


const Footer = () => {
    return (
        <>
            <Flex justifyContent='center' alignItems='center'>
                <Text>Made by Tevis, Alex, Linh and Quentin</Text>
                <Box ms={3}>
                    <Link href='https://github.com/tevissaur/your-local-farmers' target='_blank'>
                        <BsGithub/>
                    </Link>
                </Box>
            </Flex>


        </>
    )
}

export default Footer
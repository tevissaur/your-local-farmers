import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    useDisclosure,
    Box,
    Button,
    Container,
    Textarea,
    Flex
} from '@chakra-ui/react'

function FarmDashNav(){
    return(
        <Container maxW = '100%'>
            <Flex justifyContent='space-evenly'>
                <Button minW='20%' colorScheme='green'></Button>
                <Button minW='20%' colorScheme='blue'></Button>
                <Button minW='20%' colorScheme='blue'></Button>

            </Flex>
        </Container>
    )
}

export default FarmDashNav;
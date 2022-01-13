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
    Tab,
    Flex,
    Tabs,
    TabList,
    TabPanel,
    TabPanels
    
} from '@chakra-ui/react'

function MyOrders(){

    return(
        <Container>
            <Box>
                <Button  bg="primary.lightGreen" mr="4">
                    Sign Up
                </Button>

            </Box>
        </Container>
    )
}

export default MyOrders
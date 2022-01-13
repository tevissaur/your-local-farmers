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
    Textarea
} from '@chakra-ui/react'
import FarmDashNav from './FarmDashNav';

function MyFarmDash() {


    return(
        <Container maxW='100%'>
            <FarmDashNav />
        </Container>
    )
}

export default MyFarmDash;
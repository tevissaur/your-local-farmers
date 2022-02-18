import { Box, Button } from "@mui/material";


function FarmDashNav(){
    return(
        <Box maxW = '100%'>
            <Box justifyContent='space-evenly'>
                <Button minW='20%' colorScheme='green'></Button>
                <Button minW='20%' colorScheme='blue'></Button>
                <Button minW='20%' colorScheme='blue'></Button>

            </Box>
        </Box>
    )
}

export default FarmDashNav;
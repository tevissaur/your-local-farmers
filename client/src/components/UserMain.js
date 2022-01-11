import { Flex, Center, Heading, Box, Button, Link, Avatar, Badge, Text } from "@chakra-ui/react";



const UserMain = ({ userData }) => {

    return (
        <>
            <Flex>
                <Avatar src='https://bit.ly/sage-adebayo' w='250px' h='250px' />
                <Box ml='3'>
                    <Text fontWeight='bold'>
                        {userData.username}
                        <Badge ml='1' colorScheme='green'>
                            New
                        </Badge>
                    </Text>
                    <Text fontSize='sm'>{
                        userData.isFarmer ? (<>
                            Farmer
                        </>) : (<>
                            Not Farmer
                        </>)
                    }</Text>
                </Box>
            </Flex>
        </>
    )
}

export default UserMain
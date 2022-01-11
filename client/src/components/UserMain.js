import { Flex, Center, Heading, Box, Button, Link, Avatar, Badge, Text, FormControl, Input, FormLabel, Divider } from "@chakra-ui/react";
import { EditIcon } from '@chakra-ui/icons'
import { Link as ReactLink } from 'react-router-dom'


const UserMain = ({ userData }) => {
    console.log(userData)

    return (
        <>
            <Flex>
                <Avatar src='https://bit.ly/sage-adebayo' w='250px' h='250px' />
                <Flex ml='3' flexWrap='wrap'>
                    <Text fontWeight='bold' w="100%" marginBottom={3}>
                        <Heading>
                            Hello, {userData.username}
                        </Heading>
                        <Divider />
                    </Text>
                    <FormControl fontSize='sm' display='flex' flexWrap="wrap" justifyContent='start' >
                        
                        {userData.firstName ? (
                            <Flex>
                                <FormLabel width='145px' fontSize={22}>
                                    First Name:
                                </FormLabel>
                                {userData.firstName}
                            </Flex>) : (
                            <Flex w="100%" justifyContent='start' alignItems='center'>
                                <FormLabel width='145px' fontSize={22}>
                                    Add First Name:
                                </FormLabel>
                                <Input w="50%" />
                                <Button m={3} >
                                    Add Name
                                </Button>
                            </Flex>)}
                        {userData.lastName ? (
                            <Flex>
                                <FormLabel width='125px' fontSize={22}>
                                    Last Name:
                                </FormLabel>
                                {userData.lastName}
                                <Button>
                                    <EditIcon />
                                </Button>
                            </Flex>) : (
                            <Flex w="100%" justifyContent='start' alignItems='center'>
                                <FormLabel width='145px' fontSize={22}>
                                    Add Last Name:
                                </FormLabel>
                                <Input w="50%" />
                                <Button m={3}>
                                    Add Name
                                </Button>
                            </Flex>)}
                        <Flex w="100%" justifyContent='start' alignItems='center'>
                            <FormLabel width='145px' fontSize={22}>
                                Email:
                            </FormLabel>
                            <Text marginEnd={4} fontSize={20}>
                                {userData.email}

                            </Text>
                            <Button size='sm'>
                                <EditIcon />
                            </Button>
                        </Flex>
                        {userData.address ? (
                            <Flex w="100%" justifyContent='start' alignItems='center'>
                                <FormLabel width='145px' fontSize={22}>
                                    Address:
                                </FormLabel>
                                {userData.address}
                            </Flex>) : (
                            <Flex w="100%" justifyContent='start' alignItems='center'>
                                <FormLabel width='145px' fontSize={22}>
                                    Add Address:
                                </FormLabel>
                                <Input w="50%" />
                                <Button m={3}>
                                    Add Address
                                </Button>
                            </Flex>)}
                        {userData.reviews ? (<>{userData.reviews.length === 0 ? (
                            <Flex w="100%">
                                No Reviews
                            </Flex>
                        ) : (
                            <>
                                Reviews
                            </>)}</>) : (<></>)}

                    </FormControl>
                </Flex>
            </Flex>
        </>
    )
}

export default UserMain
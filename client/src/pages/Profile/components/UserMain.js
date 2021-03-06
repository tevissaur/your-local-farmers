import { Link as ReactLink } from 'react-router-dom'
import { useEffect, useState } from "react";
import { useMutation } from '@apollo/client'
import { UPDATE_USER } from '../../../utils/mutations'


const UserMain = ({ userData }) => {
    const [user, setUser] = useState(userData)
    const [editingFirstName, setEditingFirstName] = useState(false)
    const [editingLastName, setEditingLastName] = useState(false)
    const [editingEmail, setEditingEmail] = useState(false)
    const [editingAddress, setEditingAddress] = useState(false)
    const [updateUser] = useMutation(UPDATE_USER)


    useEffect(() => {
        setUser(userData)
    }, [userData])
    useEffect(() => {
        console.log(editingLastName)
    }, [editingLastName])

    const handleSubmit = async (e) => {
        e.preventDefault()

        // switch (e.target.id) {
        //     case 'first-name':

        //         break;

        //     default:
        //         break;
        // }
        console.log(user)
        const { data: updatedUser } = await updateUser({
            variables: {
                user: {
                    _id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    address: user.address,
                    email: user.email,
                    username: user.username
                }
            }
        })
        // setEditingFirstName(true)
        console.log(updatedUser)
        userData = updatedUser

    }


    return (
        <>
            {/* <Flex h="60vh">
                <Avatar src='https://bit.ly/sage-adebayo' w='250px' h='250px' />
                <Flex ml='3' flexWrap='wrap' flexDirection='column' justifyContent='flex-start'>
                    <Heading fontWeight='bold' w="100%" h="min-content" marginBottom={3}>
                        Hello, {user.username}
                        <Divider />
                    </Heading>
                    <FormControl fontSize='sm' display='flex' flexDirection='column' flexWrap="wrap" justifyContent='space-around' h="50%"  onSubmit={handleSubmit}>
                        <FormControl fontSize='sm' display='flex' flexWrap="wrap" justifyContent='start' onSubmit={handleSubmit}>

                            {editingFirstName ? (
                                <Flex w="100%" justifyContent='start' alignItems='center'>
                                    <FormLabel width='145px' fontSize={22}>
                                        Add First Name:
                                    </FormLabel>
                                    <Input w="50%" value={user.firstName} onChange={({ target }) => setUser({
                                        ...user,
                                        firstName: target.value,
                                    })} />
                                    <Button type="submit" m={3} id="first-name" onClick={(e) => {
                                        setEditingFirstName(false)
                                        handleSubmit(e)
                                    }}>
                                        Add Name
                                    </Button>
                                </Flex>) : (
                                <Flex>
                                    <FormLabel width='145px' fontSize={22}>
                                        First Name:
                                    </FormLabel>
                                    <Text marginEnd={4} fontSize={20}>

                                        {user.firstName}
                                    </Text>
                                    <Button size='sm' onClick={() => setEditingFirstName(true)}>
                                        <EditIcon />
                                    </Button>
                                </Flex>)}
                        </FormControl>
                        <FormControl fontSize='sm' display='flex' flexWrap="wrap" justifyContent='start' onSubmit={handleSubmit}>

                            {editingLastName ? (
                                <Flex w="100%" justifyContent='start' alignItems='center'>
                                    <FormLabel width='145px' fontSize={22}>
                                        Add Last Name:
                                    </FormLabel>
                                    <Input w="50%" value={user.lastName} onChange={({ target }) => setUser({
                                        ...user,
                                        lastName: target.value,
                                    })} />
                                    <Button type="submit" m={3} onClick={(e) => {
                                        setEditingLastName(false)
                                        handleSubmit(e)
                                    }}>
                                        Add Name
                                    </Button>
                                </Flex>) : (
                                <Flex>
                                    <FormLabel width='125px' fontSize={22}>
                                        Last Name:
                                    </FormLabel>
                                    <Text marginEnd={4} fontSize={20}>

                                        {user.lastName}
                                    </Text>
                                    <Button type="submit" size='sm' onClick={() => setEditingLastName(true)}>
                                        <EditIcon />
                                    </Button>
                                </Flex>)}
                        </FormControl>


                        <FormControl fontSize='sm' display='flex' flexWrap="wrap" justifyContent='start' onSubmit={handleSubmit}>
                            {editingEmail ? (
                                <Flex w="100%" justifyContent='start' alignItems='center'>
                                    <FormLabel width='145px' fontSize={22}>
                                        Change Email:
                                    </FormLabel>
                                    <Input w="50%" value={user.email} onChange={({ target }) => setUser({
                                        ...user,
                                        email: target.value,
                                    })} />
                                    <Button type="submit" m={3} onClick={(e) => {
                                        setEditingEmail(false)
                                        handleSubmit(e)
                                    }}>
                                        Change Email
                                    </Button>
                                </Flex>
                            ) : (
                                <Flex>
                                    <FormLabel width='145px' fontSize={22}>
                                        Email:
                                    </FormLabel>
                                    <Text marginEnd={4} fontSize={20}>
                                        {user.email}

                                    </Text>
                                    <Button type="submit" size='sm' onClick={() => setEditingEmail(true)}>
                                        <EditIcon />
                                    </Button>

                                </Flex>
                            )}
                        </FormControl>
                        <FormControl fontSize='sm' display='flex' flexWrap="wrap" justifyContent='start' onSubmit={handleSubmit}>

                            {editingAddress ? (
                                <Flex w="100%" justifyContent='start' alignItems='center'>
                                    <FormLabel width='145px' fontSize={22}>
                                        Add Address:
                                    </FormLabel>
                                    <Input w="50%" value={user.address || ''} onChange={({ target }) => setUser({
                                        ...user,
                                        address: target.value,
                                    })} />
                                    <Button type="submit" m={3} onClick={(e) => {

                                        setEditingAddress(false)
                                        handleSubmit(e)

                                    }}>
                                        Add Address
                                    </Button>
                                </Flex>) : (
                                <Flex w="100%" justifyContent='start' alignItems='center'>
                                    <FormLabel width='145px' fontSize={22}>
                                        Address:
                                    </FormLabel>
                                    <Text marginEnd={4} fontSize={20}>

                                        {user.address}
                                    </Text>
                                    <Button type="submit" size='sm' onClick={() => setEditingAddress(true)}>
                                        <EditIcon />
                                    </Button>
                                </Flex>)}
                        </FormControl>
                        <FormControl fontSize='sm' display='flex' flexWrap="wrap" justifyContent='start' onSubmit={handleSubmit}>

                            {user.reviews ? (
                                <>
                                    {user.reviews.length === 0 ? (
                                        <Flex w="100%">
                                            No Reviews
                                        </Flex>
                                    ) : (
                                        <>
                                            Reviews
                                        </>
                                    )}</>) : (
                                <>

                                </>
                            )}
                        </FormControl>

                    </FormControl>
                </Flex>
            </Flex> */}
        </>
    )
}

export default UserMain
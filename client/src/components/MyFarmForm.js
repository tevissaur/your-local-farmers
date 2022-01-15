import { useState, useRef } from "react";
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Container,
    Textarea
} from '@chakra-ui/react'
import { CREATE_FARM } from '../utils/mutations'
import { UPDATE_USER } from '../utils/mutations'
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";


function MyFarm({ setIsFarmer, setFarmId }) {
    const initialRef = useRef()
    const finalRef = useRef()
    const { data: { _id }} = Auth.getProfile()
    const [farmName, setFarmName] = useState('');
    const [address, setAddress] = useState('');
    const [story, setStory] = useState('');
    const isInvalid = farmName === '' || address === '' || story === '';
    const [createFarm] = useMutation(CREATE_FARM)
    const [updateUser] = useMutation(UPDATE_USER)
    const user = Auth.getProfile()
    

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const newFarm = await createFarm({
            variables: {
                farm: {
                    name: farmName,
                    address,
                    owners: [_id],
                    story
                }
            }
        })
<<<<<<< HEAD
        console.log(newFarm)
        const { data: updatedUser } = await updateUser({
            variables: {
                user: {
                    _id: user.data._id,
                    isFarmer: true
                }
            }
        })
=======

        // const { data: updatedUser } = await updateUser({
        //     variables: {
        //         user: {
        //             _id: user.data._id,
        //             isFarmer: true
        //         }
        //     }
        // })
>>>>>>> 4434b67920c3926376b87a3da73f6a59909b2a83

        setFarmName('')
        setAddress('')
        setStory('')
        setIsFarmer(true)
        //document.reload()

        
    }


    return (
        <>
            <Container maxW='100%'>
                <form onSubmit={handleFormSubmit}>
                <FormControl onSubmit={handleFormSubmit}>
                    <FormLabel>Enter your farm name</FormLabel>
                    <Input
                        ref={initialRef}
                        placeholder='Farm Name'
                        type='text'
                        id='name'
                        value={farmName}
                        onChange={({ target }) => setFarmName(target.value)}
                    />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Enter your farms address</FormLabel>
                    <Input
                        placeholder='Enter address'
                        type='text'
                        id='address'
                        value={address}
                        onChange={({ target }) => setAddress(target.value)}
                    />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Your Farms Story</FormLabel>
                    <Textarea
                        placeholder='Tell us about your farm'
                        type='text'
                        id='story'
                        value={story}
                        onChange={({ target }) => setStory(target.value)}
                    />
                </FormControl>
                <FormControl mt={4}>
                    <Button type="submit" colorScheme='blue' mr={3} disabled={isInvalid} onClick={handleFormSubmit}>
                        Add Farm
                    </Button>
                </FormControl>
                </form>
            </Container>
        </>
    )
}

export default MyFarm;
import { useState, useRef } from "react";
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
import { CREATE_FARM } from '../utils/mutations'
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";


function MyFarm({ isFarmer, setIsFarmer }) {
    const initialRef = useRef()
    const finalRef = useRef()
    const { data: { _id }} = Auth.getProfile()
    const [farmName, setFarmName] = useState('');
    const [address, setAddress] = useState('');
    const [story, setStory] = useState('');
    const isInvalid = farmName === '' || address === '' || story === '';
    const [createFarm] = useMutation(CREATE_FARM)

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const newFarm = await createFarm({
            variables: {
                farm: {
                    name: farmName,
                    address,
                    owners: [_id]
                }
            }
        })
        setFarmName('')
        setAddress('')
        setStory('')
        setIsFarmer(true)
        console.log(newFarm)
    }


    return (
        <>
            <Container maxW='100%'>
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
            </Container>
        </>
    )
}

export default MyFarm;
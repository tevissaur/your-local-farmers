import { useState, useRef } from "react";
import { CREATE_FARM } from '../../utils/mutations'
import { UPDATE_USER } from '../../utils/mutations'
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { Box, FormControl, Input, TextField, Button, FormLabel } from "@mui/material";
import store from "../../utils/store";


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

        setFarmName('')
        setAddress('')
        setStory('')
        // store.dispatch(setIsFarmer(true))
        window.location.reload()

        
    }


    return (
        <>
            <Box>
                <form onSubmit={handleFormSubmit} >
                <FormControl onSubmit={handleFormSubmit}  >
                    <FormLabel fontSize='20px' fontWeight='600'>Enter your farm name</FormLabel>
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
                    <FormLabel fontSize='20px' fontWeight='600'>Enter your farms address</FormLabel>
                    <Input
                        placeholder='Enter address'
                        type='text'
                        id='address'
                        value={address}
                        onChange={({ target }) => setAddress(target.value)}
                    />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel fontSize='20px' fontWeight='600'>Your Farms Story</FormLabel>
                    <TextField
                        placeholder='Tell us about your farm'
                        type='text'
                        id='story'
                        value={story}
                        onChange={({ target }) => setStory(target.value)}
                    />
                </FormControl>
                <FormControl mt={4} >
                    <Button >
                    Add Farm
                    </Button>
                </FormControl>
                </form>
            </Box>
        </>
    )
}

export default MyFarm;
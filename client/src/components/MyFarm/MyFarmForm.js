import { useState, useRef } from "react";
import { CREATE_FARM } from '../../utils/mutations'
import { UPDATE_USER } from '../../utils/mutations'
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { Box, FormControl, Input, TextField, Button, FormLabel } from "@mui/material";


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
        setIsFarmer(true)
        window.location.reload()

        
    }


    return (
        <>
            <Box 
                maxW='container.md'
                border='lightgrey 2px solid'  
                padding={2} boxShadow='1px 1px black'
                borderRadius='25px'
                mt={3}
            >
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
                    <Button 
                        type="submit" 
                        mr={3}  
                        onClick={handleFormSubmit}
                        border="1px solid grey"
                        boxShadow="1px 1px black"
                        backgroundColor="primary.lightGreen">
                    Add Farm
                    </Button>
                </FormControl>
                </form>
            </Box>
        </>
    )
}

export default MyFarm;
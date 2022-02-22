import { useEffect, useState } from "react";
import { useMutation } from '@apollo/client'
import { UPDATE_FARM } from '../../utils/mutations'
import { Box, FormControl, FormLabel, Input, Button, Typography } from "@mui/material";


function EditFarm({ thisFarm }) {
    const [farm, setFarm] = useState(thisFarm)
    const [editingFarmName, setEditFarmName] = useState(false)
    const [editingFarmAddress, setEditFarmAddress] = useState(false)
    const [editingFarmStory, setEditFarmStory] = useState(false)
    const [updateFarm] = useMutation(UPDATE_FARM)
    console.log(thisFarm)
    useEffect(() => {
        setFarm(thisFarm)
        console.log(farm)
        }, [thisFarm])
    const handleSubmit = async (e) => {
        const { data: UpdatedFarm } = await updateFarm({
            variables: {
                farm: {
                    _id: farm._id,
                    name: farm.name,
                    address: farm.address,
                    story: farm.story
                }
            }
        })
        console.log(UpdatedFarm)
        thisFarm = UpdatedFarm
    }



    return (
        <Box>
            <Box ml='3' flexWrap='wrap'>
                <FormControl fontSize='sm' display='flex' flexWrap="wrap" justifyContent='start' onSubmit={handleSubmit}>
                    <FormControl fontSize='sm' display='flex' flexWrap="wrap" justifyContent='start' onSubmit={handleSubmit}>

                        {editingFarmName ? (
                            <Box w="100%" justifyContent='start' alignItems='center'>
                                <FormLabel width='145px' fontSize={22}>
                                    New Farm Name:
                                </FormLabel>
                                {console.log(farm)}
                                <Input w="50%" value={farm.name} onChange={({ target }) => setFarm({
                                    ...farm,
                                    name: target.value,
                                })} />
                                <Button type="submit" m={3} id="first-name" onClick={(e) => {
                                    setEditFarmName(false)
                                    handleSubmit(e)
                                }}>
                                    Edit Name
                                </Button>
                            </Box>) : (
                            <Box>
                                <FormLabel width='145px' fontSize={22}>
                                    Farm Name:
                                </FormLabel>
                                <Typography marginEnd={4} fontSize={20}>


                                    {farm ? farm.name : '...'}
                                </Typography>
                                <Button size='sm' onClick={() => setEditFarmName(true)}>
                                    
                                </Button>
                            </Box>)}
                    </FormControl>
                </FormControl>

                <FormControl fontSize='sm' display='flex' flexWrap="wrap" justifyContent='start' onSubmit={handleSubmit}>
                    <FormControl fontSize='sm' display='flex' flexWrap="wrap" justifyContent='start' onSubmit={handleSubmit}>

                        {editingFarmAddress ? (
                            <Box w="100%" justifyContent='start' alignItems='center'>
                                <FormLabel width='145px' fontSize={22}>
                                    New Address:
                                </FormLabel>
                                <Input w="50%" value={farm.address} onChange={({ target }) => setFarm({
                                    ...farm,
                                    address: target.value,
                                })} />
                                <Button type="submit" m={3} id="first-name" onClick={(e) => {
                                    setEditFarmAddress(false)
                                    handleSubmit(e)
                                }}>
                                    Edit Address
                                </Button>
                            </Box>) : (
                            <Box>
                                <FormLabel width='145px' fontSize={22}>
                                    Farm Address:
                                </FormLabel>
                                <Typography marginEnd={4} fontSize={20}>


                                    {farm ? farm.address : '...'}
                                </Typography>
                                <Button size='sm' onClick={() => setEditFarmAddress(true)}>
                                    
                                </Button>
                            </Box>)}
                    </FormControl>
                </FormControl>



                <FormControl fontSize='sm' display='flex' flexWrap="wrap" justifyContent='start' onSubmit={handleSubmit}>
                    <FormControl fontSize='sm' display='flex' flexWrap="wrap" justifyContent='start' onSubmit={handleSubmit}>

                        {editingFarmStory ? (
                            <Box w="100%" justifyContent='start' alignItems='center'>
                                <FormLabel width='145px' fontSize={22}>
                                    New Farm Story:
                                </FormLabel>
                                <Input w="50%" value={farm.story} onChange={({ target }) => setFarm({
                                    ...farm,
                                    story: target.value,
                                })} />
                                <Button type="submit" m={3} id="first-name" onClick={(e) => {
                                    setEditFarmStory(false)
                                    handleSubmit(e)
                                }}>
                                    Edit Story
                                </Button>
                            </Box>) : (
                            <Box>
                                <FormLabel width='145px' fontSize={22}>
                                    Farm Story:
                                </FormLabel>
                                <Typography marginEnd={4} fontSize={20}>


                                    {farm ? farm.story : '...'}
                                </Typography>
                                <Button size='sm' onClick={() => setEditFarmStory(true)}>
                                    
                                </Button>
                            </Box>)}
                    </FormControl>
                </FormControl>
            </Box>
        </Box>
    )
}

export default EditFarm
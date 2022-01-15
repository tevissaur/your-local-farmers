import { Flex, Center, Heading, Box, Button, Link, Avatar, Badge, Text, FormControl, Input, FormLabel, Divider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { EditIcon } from '@chakra-ui/icons'
import { useMutation } from '@apollo/client'
import { UPDATE_FARM } from '../utils/mutations'


function EditFarm({farmData}){
    const [farm, setFarm] = useState(farmData)
    const [editingFarmName, setEditFarmName] = useState(false)
    const [editingFarmAddress, setEditFarmAddress] = useState(false)
    const [editingFarmStory, setEditFarmStory] = useState(false)
    const [updateFarm] = useMutation(UPDATE_FARM)

    console.log(farmData)
    const handleSubmit = async (e) => {


    }



    return(
        <Box>
            <Flex ml='3' flexWrap='wrap'>
            <FormControl fontSize='sm' display='flex' flexWrap="wrap" justifyContent='start' onSubmit={handleSubmit}>
                <FormControl fontSize='sm' display='flex' flexWrap="wrap" justifyContent='start' onSubmit={handleSubmit}>

                    {editingFarmName ? (
                        <Flex w="100%" justifyContent='start' alignItems='center'>
                            <FormLabel width='145px' fontSize={22}>
                                Add First Name:
                            </FormLabel>
                            <Input w="50%" value={farm.firstName} onChange={({ target }) => setFarm({
                                ...farm,
                                firstName: target.value,
                            })} />
                            <Button type="submit" m={3} id="first-name" onClick={(e) => {
                                setEditFarmName(false)
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

                                {farm.firstName}
                            </Text>
                            <Button size='sm' onClick={() => setEditFarmName(true)}>
                                <EditIcon />
                            </Button>
                        </Flex>)}
                </FormControl>
            </FormControl>
            </Flex>
        </Box>
    )
}

export default EditFarm
import { Flex, Center, Heading, Box, Button, Link, Avatar, Badge, Text, FormControl, Input, FormLabel, Divider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useMutation } from '@apollo/client'
import { UPDATE_Farm } from '../utils/mutations'


function EditFarm({farmData}){
    const [farm, setFarm] = useState(farmData)
    const [editingFarmName, setEditFarmName] = useState(false)
    const [editingFarmAddress, setEditFarmAddress] = useState(false)
    const [editingFarmStory, setEditFarmStory] = useState(false)
    const [updateFarm] = useMutation(UPDATE_FARM)



    return(
        <Box>

        </Box>
    )
}

export default EditFarm
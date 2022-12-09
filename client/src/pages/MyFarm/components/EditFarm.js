import { useEffect, useState } from "react";
import { useMutation } from '@apollo/client'
import { UPDATE_FARM } from '../../../utils/mutations'
import { Box, FormControl, FormLabel, Input, Typography } from "@mui/material";
import { BaseButton as Button } from "../../../components/Buttons/BaseButton";
import store from "../../../utils/store";


function EditFarm() {
    const { dashboard: { myFarm: farm } } = useSelector((state: RootState) => state);
    const [editingFarmName, setEditFarmName] = useState(false)
    const [editingFarmAddress, setEditFarmAddress] = useState(false)
    const [editingFarmStory, setEditFarmStory] = useState(false)
    const [updateFarm] = useMutation(UPDATE_FARM)
    const style = {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',

    }

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
    }

    const handleChange = () => {

    }

    return (
        <Box component='form' onSubmit={handleSubmit} sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            margin: 'auto'
        }}>
            <FormControl sx={style}>
                {editingFarmName ? (
                    <>
                        <FormLabel width='145px' fontSize={22}>
                            New Farm Name:
                        </FormLabel>
                        <Input w="50%" value={farm.name} />
                        <Button type="submit" m={3} id="name">
                            Edit Name
                        </Button>
                    </>) : (
                    <>
                        <FormLabel width='145px' fontSize={22}>
                            Farm Name:
                        </FormLabel>
                        <Typography marginEnd={4} fontSize={20}>


                            {farm ? farm.name : '...'}
                        </Typography>
                        <Button size='sm'>
                            Edit Name
                        </Button>
                    </>)}
            </FormControl>

            <FormControl sx={style}>
                {editingFarmAddress ? (
                    <>
                        <FormLabel width='145px' fontSize={22}>
                            New Address:
                        </FormLabel>
                        <Input w="50%" value={farm.address} />
                        <Button type="submit" m={3} id="first-name">
                            Edit Address
                        </Button>
                    </>) : (
                    <>
                        <FormLabel width='145px' fontSize={22}>
                            Farm Address:
                        </FormLabel>
                        <Typography marginEnd={4} fontSize={20}>


                            {farm ? farm.address : '...'}
                        </Typography>
                        <Button size='sm'>
                            Edit Address
                        </Button>
                    </>)}
            </FormControl>



            <FormControl sx={style}>

                {editingFarmStory ? (
                    <>
                        <FormLabel width='145px' fontSize={22}>
                            New Farm Story:
                        </FormLabel>
                        <Input w="50%" value={farm.story} />
                        <Button type="submit" m={3} id="first-name" >
                            Edit Story
                        </Button>
                    </>) : (
                    <>
                        <FormLabel width='145px' fontSize={22}>
                            Farm Story:
                        </FormLabel>
                        <Typography marginEnd={4} fontSize={20}>


                            {farm ? farm.story : '...'}
                        </Typography>
                        <Button size='sm' >
                            Edit Story
                        </Button>
                    </>)}
            </FormControl>
        </Box>
    )
}

export default EditFarm
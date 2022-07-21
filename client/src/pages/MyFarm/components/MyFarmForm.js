import { useState, useRef, useEffect } from "react";
import { CREATE_FARM, UPDATE_USER } from '../../../utils/mutations'
import { useMutation } from "@apollo/client";
import Auth from "../../../utils/auth";
import { Box, FormControl, Input, TextField, Button, FormLabel } from "@mui/material";
import store from "../../../utils/store";
import { setNewFarmAddress, setNewFarmName, setNewFarmStory } from "../../../utils/actions";
import { updateNewFarmForm } from "../../../resources/farm-dashboard/dashboard.actions";


function MyFarm() {
    const {
        profile: {
            loggedIn
        },
        dashboard: {
            ui: {
                newFarm: {
                    name,
                    address,
                    story
                }
            }
        }
    } = store.getState()
    let payload

    const isInvalid = name === '' || address === '' || story === '';
    const [createFarm] = useMutation(CREATE_FARM)

    const handleChange = async (e) => {
        e.preventDefault()
        e.stopPropagation()
        payload = {
            payload: e.target.value,
            param: e.target.id
        }
        store.dispatch(updateNewFarmForm(payload))
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        if (loggedIn) {
            const { data: { _id } } = Auth.getProfile()
            console.log(name, address, _id, story)

            await createFarm({
                variables: {
                    farm: {
                        name,
                        address,
                        owners: [_id],
                        story
                    }
                }
            })
            window.location.reload()
        }


    }
    useEffect(() => {
        console.log(name, address)
    }, [name, address])


    return (
        <>
            <Box
                onSubmit={handleFormSubmit}
                onChange={handleChange}
                component='form'
                sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    margin: 'auto'
                }}>
                    <FormControl onSubmit={handleFormSubmit}>
                        <FormLabel sx={{
                            fontSize: '20px',
                            fontWeight: '600',
                            margin: '20px 0 10px 0'
                        }}>Enter your farm name</FormLabel>
                        <TextField
                            placeholder='Farm Name'
                            type='text'
                            id='name'
                            value={name}
                            onChange={({ target }) => store.dispatch(setNewFarmName(target.value))}
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel sx={{
                            fontSize: '20px',
                            fontWeight: '600',
                            margin: '20px 0 10px 0'
                        }}>Enter your farms address</FormLabel>
                        <TextField
                            placeholder='Enter address'
                            type='text'
                            id='address'
                            value={address}
                            onChange={({ target }) => store.dispatch(setNewFarmAddress(target.value))}
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel sx={{
                            fontSize: '20px',
                            fontWeight: '600',
                            margin: '20px 0 10px 0'
                        }}>Your Farms Story</FormLabel>
                        <TextField
                            placeholder='Tell us about your farm'
                            type='text'
                            id='story'
                            value={story}
                            onChange={({ target }) => store.dispatch(setNewFarmStory(target.value))}
                        />
                    </FormControl>
                    <FormControl>
                        <Button type="submit" disabled={isInvalid} sx={{
                            marginY: '25px',
                            borderRadius: '25px',
                            paddingX: 1.5,
                            color: 'black',
                            backgroundColor: 'lightgray',
                            border: '1px solid black',
                            ':hover': {
                                backgroundColor: 'white',
                                boxShadow: '1px 1px 0 black'
                            }
                        }}>
                            Add Farm
                        </Button>
                    </FormControl>
                </Box>
            </Box>
        </>
    )
}

export default MyFarm;
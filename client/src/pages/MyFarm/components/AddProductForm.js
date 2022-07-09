import { useState, useEffect } from "react"
import { useMutation, useQuery } from '@apollo/client'
import { Box, Button, Checkbox, FormControl, FormGroup, FormLabel, Input, TextField } from '@mui/material'
import { CREATE_PRODUCT } from '../../../utils/mutations'
import store from "../../../utils/store"
import { setMyFarm, updateNewProductForm } from "../../../resources/farm-dashboard/dashboard.actions"





const AddProductForm = () => {
    const { categories: { categories }, dashboard: { ui: { newProduct }, myFarm } } = store.getState()
    let payload
    const [createProduct] = useMutation(CREATE_PRODUCT)


    const handleSubmit = async () => {
        if (newProduct.categories !== [] && newProduct.name !== '' && newProduct.price !== 0) {
            const data = await createProduct({
                variables: {
                    product: {
                        ...newProduct
                    },
                    farmId: myFarm._id
                }
            })
            store.dispatch(setMyFarm(data?.farmDashboard))
            store.dispatch(updateNewProductForm())
        } else {
            alert('Add all necessary fields')
        }
    }

    const removeCategory = (e) => {

        const newArr = newProduct.categories.filter(cat => {
            return cat !== e.target.id
        })
        payload = {
            payload: newArr,
            param: 'categories'
        }
        store.dispatch(updateNewProductForm(payload))

    }
    const addCategory = (e) => {
        const newArr = newProduct.categories
        newArr.push(e.target.id)
        payload = {
            payload: newArr,
            param: 'categories'
        }
        store.dispatch(updateNewProductForm(payload))

    }

    const handleChange = async (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.target.type === 'checkbox') {

            if (e.target.checked && !newProduct.categories.includes(e.target.id)) {
                addCategory(e)
            } else {
                removeCategory(e)
            }
            store.dispatch(updateNewProductForm(payload))
        } else if (e.target.type === 'text') {

            payload = {
                payload: e.target.value,
                param: e.target.id
            }

            store.dispatch(updateNewProductForm(payload))
        } else if (e.target.type === 'number') {

            payload = {
                payload: e.target.valueAsNumber,
                param: e.target.id
            }

            store.dispatch(updateNewProductForm(payload))
        }

    }

    useEffect(() => {
        console.log(newProduct)
        console.log(myFarm)
    }, [newProduct, myFarm])


    return (
        <Box component='form' onChange={handleChange}>
            <FormControl>
                <FormLabel>
                    Product Name
                </FormLabel>
                <Input
                    id="name"
                    value={newProduct.name}
                />
            </FormControl>

            <FormControl>
                <FormLabel>
                    Price
                </FormLabel>
                <TextField
                    id="price"
                    label="Number"
                    type="number"
                    value={newProduct.price}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="standard"
                />
            </FormControl>

            <FormControl>
                <FormLabel>
                    Quantity
                </FormLabel>
                <TextField
                    id="quantity"
                    label="Number"
                    type="number"
                    value={newProduct.quantity}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="standard"
                />
            </FormControl>

            <FormControl>
                <FormLabel>
                    Categories
                </FormLabel>
                <FormGroup>

                    {categories.map((category, index) => {
                        return (
                            <Box key={category._id} >
                                <FormLabel key={index + 40}>{category.name}</FormLabel>
                                <Checkbox margin={3} checked={newProduct.categories.includes(category._id)} id={category._id} />

                            </Box>

                        )
                    })}

                </FormGroup>
            </FormControl>

            <FormControl>
                <FormLabel>
                    Description
                </FormLabel>
                <TextField id="description" value={newProduct.description} />
            </FormControl>
            <Button margin={3} onClick={handleSubmit}>
                Add Product
            </Button>
        </Box>
    )
}

export default AddProductForm
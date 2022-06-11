import { useState, useEffect } from "react"
import { useMutation, useQuery } from '@apollo/client'
import { Box, Button, Checkbox, FormControl, FormGroup, FormLabel, Input, TextField } from '@mui/material'
import Auth from "../../../utils/auth"
import { QUERY_CATEGORIES } from "../../../utils/queries"
import { CREATE_PRODUCT } from '../../../utils/mutations'
import store from "../../../utils/store"
import { setMyFarm, updateNewProductForm } from "../../../resources/farm-dashboard/dashboard.actions"





// I am syncing local state to redux, unable to figure out better solution rn

const AddProductForm = ({ farmId, setFarm }) => {
    const { categories: { categories }, farm: { myFarm }, dashboard: { ui: { newProduct } } } = store.getState()
    const [productCategories, setProductCategories] = useState([])
    const [createProduct] = useMutation(CREATE_PRODUCT)


    const handleSubmit = async (e) => {
        // if (productCategories !== []) {
        //     const data = await createProduct({
        //         variables: {
        //             product: {
        //                 name: productName,
        //                 price: parseInt(productPrice),
        //                 quantity: parseInt(productQuant),
        //                 categories: productCategories,
        //                 description: productDescription,
        //             },
        //             farmId: farmId
        //         }
        //     })
        //     console.log(data)
        //     setProductName('')
        //     setProductCategories([])
        //     setProductDescription('')
        //     setProductPrice(0)
        //     setProductQuant(0)
        // } else {
        //     alert('Add all necessary fields')
        // }
    }

    const handleChange = (e) => {
        console.log(e)
        console.log(categories)
        let payload
        if (e.target.type === 'checkbox') {
            const removeCategory = (e) => {
                setProductCategories(productCategories => {
                    return productCategories.filter((category) => {
                        return category !== e.target.id
                    })
                })
            }
            const addCategory = (e) => {
                setProductCategories(productCategories => {
                    productCategories.push(e.target.id)
                    return productCategories
                })
            }
    
            e.target.value ? addCategory(e) : removeCategory(e)

            payload = {
                payload: productCategories,
                param: 'categories'
            }

        } else {

            payload = {
                payload: e.target.value,
                param: e.target.id
            }
        }
        store.dispatch(updateNewProductForm(payload))
        console.log(store.getState())
    }


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
                            <Checkbox margin={3} key={category._id} checked={categories[index].isChecked} id={category._id}>
                                {category.name}
                            </Checkbox>

                        )
                    })}

                </FormGroup>
            </FormControl>

            <FormControl>
                <FormLabel>
                    Description
                </FormLabel>
                <TextField value={newProduct.description} />
            </FormControl>
            <Button margin={3} onClick={handleSubmit}>
                Add Product
            </Button>
        </Box>
    )
}

export default AddProductForm
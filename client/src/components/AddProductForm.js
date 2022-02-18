import { useState, useEffect } from "react"
import { useMutation, useQuery } from '@apollo/client'
import { Box, Button, Checkbox, FormControl, FormGroup, FormLabel, Input, TextField } from '@mui/material'
import Auth from "../utils/auth"
import { QUERY_CATEGORIES } from "../utils/queries"
import { CREATE_PRODUCT } from '../utils/mutations'







const AddProductForm = ({ farmId, setFarm }) => {
    const { data: { _id } } = Auth.getProfile()
    const [productName, setProductName] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productPrice, setProductPrice] = useState(0)
    const [productQuant, setProductQuant] = useState(0)
    const [productCategories, setProductCategories] = useState([])
    const { data, loading, error } = useQuery(QUERY_CATEGORIES)
    const [createProduct] = useMutation(CREATE_PRODUCT)

    const handleChecked = (e) => {

        const removeCategory = (e) => {
            setProductCategories(productCategories => {

                return productCategories.filter((category) => {

                    return category !== e.target.id
                })
            })
        }
        const addCategory = (e) => {
            console.log(e.target.id)
            setProductCategories(productCategories => {

                productCategories.push(e.target.id)
                return productCategories
            })
        }

        e.target.checked ? addCategory(e) : removeCategory(e)
    }

    const handleSubmit = async (e) => {
        if (productCategories !== []) {
            const data = await createProduct({
                variables: {
                    product: {
                        name: productName,
                        price: parseInt(productPrice),
                        quantity: parseInt(productQuant),
                        categories: productCategories,
                        description: productDescription,
                    },
                    farmId: farmId
                }
            })
            console.log(data)
            setProductName('')
            setProductCategories([])
            setProductDescription('')
            setProductPrice(0)
            setProductQuant(0)
        } else {
            alert('Add all necessary fields')
        }
    }

    return (
        <Box>
            <FormControl>
                <FormLabel>
                    Product Name
                </FormLabel>
                <Input value={productName} onChange={({ target }) => setProductName(target.value)} />
            </FormControl>

            <FormControl>
                <FormLabel>
                    Price
                </FormLabel>
                <TextField
                    id="standard-number"
                    label="Number"
                    type="number"
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
                    id="standard-number"
                    label="Number"
                    type="number"
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
                <FormGroup onClick={(event) => console.log(event)} >
                    {loading ? (
                        <>

                        </>
                    ) : (
                        data.categories.map((category) => {
                            return (
                                <Checkbox onChange={(e) => handleChecked(e)} margin={3} key={category._id} checked={false} id={category._id}>
                                    {category.name}
                                </Checkbox>

                            )
                        })
                    )}

                </FormGroup>
            </FormControl>

            <FormControl>
                <FormLabel>
                    Description
                </FormLabel>
                <TextField value={productDescription} onChange={({ target }) => setProductDescription(target.value)} />
            </FormControl>
            <Button margin={3} onClick={(e) => handleSubmit(e)}>
                Add Product
            </Button>
        </Box>
    )
}

export default AddProductForm
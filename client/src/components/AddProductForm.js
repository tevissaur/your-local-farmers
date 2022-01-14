import {
    Container, 
    FormControl, 
    FormLabel, 
    Input, 
    CheckboxGroup, 
    Checkbox, NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Textarea,
    Button
} from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { useMutation, useQuery } from '@apollo/client'
import Auth from "../utils/auth"
import { QUERY_CATEGORIES } from "../utils/queries"
import { CREATE_PRODUCT } from '../utils/mutations'







const AddProductForm = (props) => {
    const { data: { _id } } = Auth.getProfile()
    const [productName, setProductName] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productPrice, setProductPrice] = useState(0)
    const [productQuant, setProductQuant] = useState(0)
    const [productCategories, setProductCategories] = useState([])
    const { data, loading, error } = useQuery(QUERY_CATEGORIES)
    const [createProduct] = useMutation(CREATE_PRODUCT)

    useEffect(() => {
        console.log(productCategories)
    }, [data, loading, error, productCategories])



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

        const data = await createProduct({
            variables: {
                product: {
                    name: productName,
                    price: parseInt(productPrice),
                    quantity: parseInt(productQuant),
                    categories: productCategories,
                    description: productDescription
                }
            }
        })
        console.log(data)
    }

    return (
        <Container>
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
                <NumberInput defaultValue={0} min={0} max={99} value={productPrice} onChange={(price) => setProductPrice(price)}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </FormControl>

            <FormControl>
                <FormLabel>
                    Quantity
                </FormLabel>
                <NumberInput defaultValue={0} min={0} max={99} value={productQuant} onChange={(quantity) => setProductQuant(quantity)}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </FormControl>

            <FormControl>
                <FormLabel>
                    Categories
                </FormLabel>
                <CheckboxGroup onClick={(event) => console.log(event)} >
                    {loading ? (
                        console.log(data)
                    ) : (
                        data.categories.map((category) => {
                            return (
                                <Checkbox onChange={(e) => handleChecked(e)} margin={3} key={category._id} id={category._id}>
                                    {category.name}
                                </Checkbox>

                            )
                        })
                    )}

                </CheckboxGroup>
            </FormControl>

            <FormControl>
                <FormLabel>
                    Description
                </FormLabel>
                <Textarea value={productDescription} onChange={({ target }) => setProductDescription(target.value)} />
            </FormControl>
            <Button margin={3} onClick={(e) => handleSubmit(e)}>
                Add Product
            </Button>
        </Container>
    )
}

export default AddProductForm
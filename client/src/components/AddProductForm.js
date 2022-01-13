import {
    Container, FormControl, FormLabel, Input, CheckboxGroup, Checkbox, NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Textarea,
    Button
} from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { useQuery } from '@apollo/client'
import Auth from "../utils/auth"
import { QUERY_CATEGORIES } from "../utils/queries"
// import { CREATE}







const AddProductForm = (props) => {
    const { data: { _id } } = Auth.getProfile()
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState(0)
    const [productQuant, setProductQuant] = useState(0)
    const [productCategories, setProductCategories] = useState([])
    const { data, loading, error } = useQuery(QUERY_CATEGORIES)

    useEffect(() => {

    }, [data, loading, error])

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
                <CheckboxGroup onChange={( event ) => console.log(event)} >
                    {loading ? (
                        console.log(data)
                    ) : (
                        data.categories.map((category) => {
                            return (
                                <Checkbox onChange={(e) => console.log(e)} margin={3}>
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
                <Textarea />
            </FormControl>
            <Button margin={3}>
                Add Product
            </Button>
        </Container>
    )
}

export default AddProductForm
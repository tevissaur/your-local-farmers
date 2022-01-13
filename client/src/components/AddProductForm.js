import {
    Container, FormControl, FormLabel, Input, CheckboxGroup, Checkbox, NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Textarea,
    Button
} from "@chakra-ui/react"
import { useState } from "react"
import  { useQuery } from '@apollo/client'
import Auth from "../utils/auth"
// import { CREATE}







const AddProductForm = (props) => {
    const { data: { _id }} = Auth.getProfile()
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState(0)
    const [productQuant, setProductQuant] = useState(0)
    const [productCategories, setProductCategories] = useState([])
    const { data, loading, error }= useState([])

    // useEffect(() => {

    // }, [])

    return (
        <Container>
            <FormControl>
                <FormLabel>
                    Product Name
                </FormLabel>
                <Input />
            </FormControl>

            <FormControl>
                <FormLabel>
                    Price
                </FormLabel>
                <NumberInput defaultValue={0} min={0} max={99}>
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
                <NumberInput defaultValue={0} min={0} max={99}>
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
                <CheckboxGroup>
                    <Checkbox margin={3}>
                        Cat2
                    </Checkbox>
                    <Checkbox margin={3}>
                        Cat2
                    </Checkbox>
                    <Checkbox margin={3}>
                        Cat2
                    </Checkbox>
                    <Checkbox margin={3}>
                        Cat2
                    </Checkbox>
                    <Checkbox margin={3}>
                        Cat2
                    </Checkbox>
                    <Checkbox margin={3}>
                        Cat2
                    </Checkbox>
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
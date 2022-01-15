import { Text } from '@chakra-ui/react'


const MyFarmProducts = ({ products }) => {
    return (
        <>
            {products.length === 0 ? (
                <Text>
                    No products
                </Text>

            ) : (
                <>
                    Some products
                </>
            )}

        </>
    )
}

export default MyFarmProducts
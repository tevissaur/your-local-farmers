import { Text, Flex } from '@chakra-ui/react'
import FarmProductCard from './FarmProductCard'
import { useEffect, useState } from 'react'


const MyFarmProducts = ({ products }) => {
    
    console.log(products)

    return (
        <Flex h="60vh" flexWrap="wrap" overflow="scroll" >
            {(products?.length === 0) || (!products) ? (
                <Text>
                    No products
                </Text>

            ) : (
                <>
                    
                    {products.map((product) => {
                        return <FarmProductCard product={product} key={product._id} />
                    })}
                </>
            )}

        </Flex>
    )
}

export default MyFarmProducts
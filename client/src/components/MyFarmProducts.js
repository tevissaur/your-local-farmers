import { Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'


const MyFarmProducts = ({ farmData }) => {
    const [products, setProducts] = useState(farmData?.farmDashboard?.products)
    useEffect(() => {
        setProducts(farmData?.farmDashboard?.products)
    }, [farmData])
    console.log(products)
    return (
        <>
            {products?.length === 0 ? (
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
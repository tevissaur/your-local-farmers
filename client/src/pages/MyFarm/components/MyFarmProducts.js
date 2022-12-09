import FarmProductCard from './FarmProductCard'
import { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import store from '../../../utils/store'


const MyFarmProducts = () => {
    const { dashboard: { myFarm: { products } } } = useSelector((state: RootState) => state);

    useEffect(() => {
        console.log(products)
    }, [])

    return (
        <Box h="60vh" flexWrap="wrap" overflow="scroll" >
            {(products?.length === 0) || (!products) ? (
                <Typography>
                    No products
                </Typography>

            ) : (
                <>
                    
                    {products?.map((product) => {
                        return <FarmProductCard product={product} key={product._id} />
                    })}
                </>
            )}

        </Box>
    )
}

export default MyFarmProducts
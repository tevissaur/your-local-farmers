import React from 'react'
import { Flex } from '@chakra-ui/react'
import  {categoryData}   from '../categoryData'
import SmallCategoryIcon from './SmallCategoryIcon'

function SmartSmallIcon() {
    return (
        <Flex templateColumns='repeat(3, 1fr)' gap={6} mt={6}>
        {categoryData.map((card,index) => (
          <SmallCategoryIcon key={index} card={card}/>
        ))
        }   
       </Flex>
    )
    
}

export default SmartSmallIcon

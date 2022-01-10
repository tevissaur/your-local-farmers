import React from 'react'
import { Flex } from '@chakra-ui/react'
import  {categoryData}   from '../categoryData'
import SmallCategoryIcon from './SmallCategoryIcon'
import css from '../pages/Homepage.css'

function SmartSmallIcon() {
    return (
        <Flex flexWrap='wrap' >
        {categoryData.map((card,index) => (
          <SmallCategoryIcon key={index} card={card}/>
        ))
        }   
       </Flex>
    )
    
}

export default SmartSmallIcon

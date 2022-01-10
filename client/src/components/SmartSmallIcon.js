import React from 'react'
import { Flex } from '@chakra-ui/react'
import { categoryData } from '../categoryData'
import SmallCategoryIcon from './SmallCategoryIcon'
import css from '../pages/Homepage.css'

function SmartSmallIcon() {
  return (
    <>
      {
        categoryData.map((card, index) => {
          console.log(card)
          return (<SmallCategoryIcon key={index} card={card} />)

        })
      }

    </>
  )

}

export default SmartSmallIcon

import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Text } from '@chakra-ui/react'
import customTheme from '../extendedTheme'

function StarsRender({numericReview}) {
    return (
        <>
        <Text ms={2} fontWeight='600'>Reviews:</Text>
        <AiFillStar fontSize='25px' color='green'/>
        <AiFillStar fontSize='25px' color='green'/>
        <AiFillStar fontSize='25px' color='green'/>
        <AiFillStar fontSize='25px' color='green'/>
        <AiOutlineStar fontSize='25px' color='green'/>
        <Text fontWeight='600'>({numericReview})</Text>
        </>
    )
}

export default StarsRender

import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Text } from '@chakra-ui/react'
import customTheme from '../extendedTheme'

function StarsRender({ reviews ,numericReview, averageReview}) {
    let total = 0
    for (let i = 0; i < reviews.length; i++){
        total += reviews[i].rating
    }
    let newaverageReview = Math.round(total / reviews.length)
    let averageReviewArray = [newaverageReview]
    
    
    return (
        <>
        <Text ms={2} fontWeight='600'>Reviews:</Text>
        {averageReviewArray.map( review => {
            switch(review){
                case 5:
                    return <>
                            <AiFillStar fontSize='25px' color='green'/>
                            <AiFillStar fontSize='25px' color='green'/>
                            <AiFillStar fontSize='25px' color='green'/>
                            <AiFillStar fontSize='25px' color='green'/>
                            <AiFillStar fontSize='25px' color='green'/>
                    </>
                case 4: 
                    return <>
                            <AiFillStar fontSize='25px' color='green'/>
                            <AiFillStar fontSize='25px' color='green'/>
                            <AiFillStar fontSize='25px' color='green'/>
                            <AiFillStar fontSize='25px' color='green'/>
                            <AiOutlineStar fontSize='25px' color='green'/>
                    </>
                case 3: 
                return <>
                        <AiFillStar fontSize='25px' color='green'/>
                        <AiFillStar fontSize='25px' color='green'/>
                        <AiFillStar fontSize='25px' color='green'/>
                        <AiOutlineStar fontSize='25px' color='green'/>
                        <AiOutlineStar fontSize='25px' color='green'/>
                </>
                case 2: 
                return <>
                        <AiFillStar fontSize='25px' color='green'/>
                        <AiFillStar fontSize='25px' color='green'/>
                        <AiFillStar fontSize='25px' color='green'/>
                        <AiOutlineStar fontSize='25px' color='green'/>
                        <AiOutlineStar fontSize='25px' color='green'/>
                </>
                case 1: 
                return <>
                        <AiFillStar fontSize='25px' color='green'/>
                        <AiOutlineStar fontSize='25px' color='green'/>
                        <AiOutlineStar fontSize='25px' color='green'/>
                        <AiOutlineStar fontSize='25px' color='green'/>
                        <AiOutlineStar fontSize='25px' color='green'/>
                </>
            }
        })}
        
        <Text fontWeight='600'>({numericReview})</Text>
        </>
    )
}

export default StarsRender

import { Typography } from '@mui/material'
import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

function StarsRender({ reviews ,numericReview, averageReview}) {
    let total = 0
    for (let i = 0; i < reviews.length; i++){
        total += reviews[i].rating
    }
    let newaverageReview = Math.round(total / reviews.length)
    let averageReviewArray = [newaverageReview]
    
    
    return (
        <>
        <Typography ms={2} fontWeight='600'>Reviews:</Typography>
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
        
        <Typography fontWeight='600'>({numericReview})</Typography>
        </>
    )
}

export default StarsRender

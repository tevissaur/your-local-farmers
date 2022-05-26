import { Box, Typography, Link, Button } from '@mui/material'
import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import localFarm from '../../../assets/localFarm.jpg'
import FarmCardAvailableGoods from './FarmCardAvailableGoods'
import StarsRender from '../../../components/StarsRender'

function FarmCard({ id, title, reviews, numericReview, categories }) {

    let filteredCategories = new Set([...categories])

    return (

        <Box
            border='1px solid black'
            borderRadius='15px'
            backgroundColor='lightyellow'
            maxWidth='275px'
            margin={2}
            boxShadow='1px 1px black'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography
                variant='h6'
                sx={{ fontSize: 24 }}
            >{title}
            </Typography>
            <Box component={'img'} src={localFarm} borderRadius='5px' border='1px solid black' width='90%' margin='auto'></Box>
            <Box>
                <Typography fontWeight='600' mt={1}>
                    Goods Most Likely Available
                </Typography>

            </Box>
            <Box mt={2} justifyContent='space-around' w='100%'>
                {/* //for each project I want to run it through a swtich statement and if a product has x category append it if it hasnt already been appeneded */}

                <FarmCardAvailableGoods categories={[...filteredCategories].sort()} />

            </Box>
            <Box mt={2} alignItems='center'>

                <StarsRender reviews={reviews} numericReview={numericReview} averageReview={[5]} />

            </Box>
            <Link as={ReactLink} to={`/farm/${id}`} underline='none' color='black'>
                <Button sx={{
                    borderRadius: '25px',
                    paddingX: 1.5,
                    marginY: 1.5,
                    color: 'black',
                    backgroundColor: 'lightgray',
                    border: '1px solid black',
                    marginRight: 2,
                    ':hover': {
                        backgroundColor: 'white',
                        boxShadow: '1px 1px 0 black'
                    }
                }}>
                    Visit Farm
                </Button>
            </Link>
        </Box>

    )
}

export default FarmCard
import React, { useState, useEffect } from 'react'
import { useLazyQuery, useQuery } from '@apollo/client'
import { QUERY_FARMS } from '../../utils/queries';
import { Link } from 'react-router-dom'
import FarmCard from './components/FarmCard'
import { Box, Button, Checkbox, FormControl, FormLabel, List, ListItem, Typography } from '@mui/material';
import store, { RootState } from '../../utils/store';
import { client } from '../../App';
import { useSelector } from 'react-redux';




const FarmsPage = () => {

    const state = useSelector((state: RootState) => state);

    // const [getFarms, { loading, data, error }] = useLazyQuery(QUERY_FARMS)


    // // CORS ANYWHERE: https://intense-reef-62305.herokuapp.com/
    // useEffect(async () => {
    //     const baseUrl = 'https://intense-reef-62305.herokuapp.com/'
    //     store.dispatch(setSelectedCategories(categories))

    //     // const response = await fetch(`https://www.usdalocalfoodportal.com/api/csa/?apikey=zBKAMQhIEC&x=-84&y=42&radius=30`, {
    //     //     'mode': 'no-cors'
    //     // })
    //     // const x = await response.json();
    //     // console.log(x)
    // }, [])

    // useEffect(async () => {
    //     const cachedFarms = client.readQuery({
    //         query: QUERY_FARMS,
    //     })
    //     if (cachedFarms && !data) {
    //         store.dispatch(setFarms(cachedFarms.farms))
    //         store.dispatch(setVisibleFarms(cachedFarms.farms))

    //     } else {
    //         await getFarms()
    //         store.dispatch(setFarms(data?.farms))
    //         store.dispatch(setVisibleFarms(data?.farms))
    //     }
    // }, [loading, data])

    // useEffect(() => {
    //     console.log(visibleFarms)
    // }, [visibleFarms])

    // const handleCheckBoxChange = async (e) => {
    //     const name = e.target.value

    //     const category = categories.filter(cat => cat.name === name)

    //     const updatedSelectedCategoriesNames =
    //         selectedCategories.includes(category[0])
    //             ? selectedCategories.filter(cat => cat.name !== name)
    //             : [...selectedCategories, category[0]]

    //     await store.dispatch(setSelectedCategories(updatedSelectedCategoriesNames))


    //     let catNames = updatedSelectedCategoriesNames.map(cat => cat.name)

    //     const updatedVisibleFarms = farms.filter(farm => {
    //         console.log(catNames)
    //         catNames.forEach(cat => {
    //             if (farm.categoriesOffered.includes(cat)) {
    //                 console.log(cat, farm)
    //             }
    //         })
    //     })

    //     await store.dispatch(setVisibleFarms(updatedVisibleFarms))
    // }

    return (
        <>
            {/* <Box sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                margin: 2
            }}>
                <Box sx={{
                    margin: 4,
                    backgroundColor: 'white',
                    border: 'black 1px solid',
                    borderRadius: '25px',
                    boxShadow: '2px 2px black'
                }}>
                    <Box display='flex' justifyContent='space-evenly'
                        alignItems='center' flexWrap='wrap'>
                        {categories.map(category => {
                            const checked = selectedCategories.includes(category)
                            return (
                                <FormControl>
                                    <Checkbox
                                        fontWeight='600'
                                        onChange={handleCheckBoxChange}
                                        value={category.name}
                                        key={category._id}
                                        checked={checked}
                                    />
                                    <FormLabel>{category.name}</FormLabel>
                                </FormControl>
                            )
                        })}
                    </Box>
                </Box>
                <Box display='flex' flexDirection='column'>
                    <Box display='flex' justifyContent='space-evenly' margin={3} flexWrap='wrap'>
                        {visibleFarms?.map(farm => {
                            return <FarmCard
                                key={farm._id}
                                id={farm._id}
                                title={farm.name}
                                reviews={farm.reviews}
                                numericReview={farm.reviews.length}
                                categories={farm.products.map(product => {
                                    return product.categories[0]?.name
                                })} />
                        })}
                    </Box>
                    <Box sx={{
                        borderRadius: '25px',
                        backgroundColor: 'green',
                        boxShadow: '3px 3px black'
                    }}>
                        <Box justifyContent='center' flexDir='column' flexWrap='wrap'>
                            <Typography as='h2'
                                color='primary.yellowGreen' fontSize='35px'>
                                Are You A Farmer or Want To Be One?
                            </Typography>
                            <Typography
                                color='White'
                                fontSize='30px'>
                                FAQs
                            </Typography>
                            <Box maxW='100%'>
                                <Box
                                    flexDir='column'
                                    justifyContent='space-between'
                                    alignItems='center'
                                    mt={1}
                                    maxH='min-content'
                                    flexWrap='wrap'
                                >
                                    <List
                                        fontWeight='bolder'
                                        color='white'
                                        fontSize='25px'
                                    >
                                        <ListItem >
                                            What if I am are not tech savy?
                                        </ListItem>
                                        <ListItem ms={8} fontSize='22px'
                                            color='primary.yellowGreen'>
                                            Dont worry we make it as stress
                                            free as possible with an accessible managment system.
                                        </ListItem>
                                        <ListItem>
                                            Dont you need a lot of land to
                                            be a farmer?
                                        </ListItem>
                                        <ListItem ms={8} fontSize='22px'
                                            color='primary.yellowGreen'>
                                            Absolutely not! It certainly
                                            helps if you are looking to make a living off of the goods you are selling but
                                            if you are looking for that next side hustle or as a hobbyist there is no better
                                            way to get involved in your community!
                                        </ListItem>
                                        <ListItem>
                                            Is there a monthly quota you
                                            need to meet to continue being a farmer?
                                        </ListItem>
                                        <ListItem ms={8} fontSize='22px' color='primary.yellowGreen'>
                                            There are no monthly quotas. We
                                            just ensure customers are getting what they order and as long as that continues
                                            you can continue being a farmer as long as you desire!
                                        </ListItem>
                                    </List>
                                </Box>
                                <Link to='/myFarm'>
                                    <Box justifyContent='center'>
                                        <Button mb={3} mt={3}>Register to become a farmer
                                            today!</Button>
                                    </Box>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box> */}
        </>
    )
}
export default FarmsPage

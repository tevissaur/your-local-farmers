import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { QUERY_FARM } from '../utils/queries';
import { Container, Flex, Box, Checkbox, CheckboxGroup, useCheckboxGroup, Button, Heading, Image, Text, List, ListItem, ListIcon } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import SideNavBar from '../components/SideNavBar'
import FarmCard from '../components/FarmCard'
import customTheme from '../extendedTheme';
import Footer from '../components/Footer'
import farmerPic from '../assets/farmerkid.png'
import { BsQuestionLg } from 'react-icons/bs'




function FarmsPage() {

    const { loading, data, error } = useQuery(QUERY_FARM)

    const farmList = data ? data.farms : []
    
    const [checkedItems, setCheckedItems] = useState([true, true])


    return (
        <>
            <Flex>
                <SideNavBar />
                <Box m={4} flex='1'>
                 

                    <Flex justifyContent='center'>
                        <Container
                            maxW='container.xl'
                            m={4}
                            backgroundColor='white'
                            border='black 1px solid'
                            borderRadius='25px'
                            boxShadow='2px 2px black'
                        >

                            <CheckboxGroup
                                colorScheme='green'
                                defaultValue={['baked', 'dairy', 'fruits', 'flowers', 'beverages', 'seasonal']}
                            >
                                <Flex mt={3} justifyContent='space-evenly' alignItems='center' flexWrap='wrap'>
                                    <Checkbox fontWeight='600' value="baked">Baked Goods</Checkbox>
                                    <Checkbox fontWeight='600' value="dairy">Dairy, Meat & Eggs</Checkbox>
                                    <Checkbox fontWeight='600' value="fruits">Fruits & Vegetables</Checkbox>
                                    <Checkbox fontWeight='600' value="flowers">Flowers & Plants</Checkbox>
                                    <Checkbox fontWeight='600' value="beverages">Beverages</Checkbox>
                                    <Checkbox fontWeight='600' value="seasonal">Seasonal Products</Checkbox>
                                </Flex>
                            </CheckboxGroup>

                            <Flex justifyContent='center' mb={3}>
                                <Button
                                    mt={2}
                                    size='sm'
                                    backgroundColor={customTheme.colors.primary.lightGreen}
                                >
                                    Submit Filtered Selection
                                </Button>
                            </Flex>
                        </Container>
                    </Flex>

                    <Container maxW='100%'>
                        <Flex justifyContent='space-evenly' flexWrap='wrap'>
                            {farmList.map(farm => {
                                return <FarmCard key={farm._id} title={farm.name} reviews={farm.reviews} numericReview={farm.reviews.length} categories={farm.products.map(product => {
                                    return product.categories[0].name
                                    // return product.categories

                                })} />
                            })}
                        </Flex>
                        <Container
                            maxW='container.xl'
                            borderRadius='25px'
                            mt={10}
                            backgroundColor='primary.emeraldGreen'
                            boxShadow='3px 3px black'
                        >
                            <Flex justifyContent='center' flexDir='column' >

                                <Heading as='h2' color='primary.yellowGreen' textAlign='center' fontSize='35px'>Are You A Farmer or Want To Be One?</Heading>
                                <Heading textAlign='center' color='White' fontSize='30px'>FAQs</Heading>

                                <Container maxW='100%'>
                                    <Flex
                                        flexDir='row'
                                        justifyContent='space-between'
                                        alignItems='flex-start'
                                        mt={1}
                                        maxH='min-content'
                                    >
                                        <List
                                            textAlign='Left'
                                            fontWeight='bolder'
                                            color='white'
                                            fontSize='25px'
                                        >
                                            <ListItem > <ListIcon as={BsQuestionLg} color='red' />
                                                What if I am are not tech savy?
                                            </ListItem>
                                            <ListItem ms={8} fontSize='22px' color='primary.yellowGreen'>
                                                Dont worry we make it as stress free as possible with an accessible managment system.
                                            </ListItem>

                                            <ListItem> <ListIcon as={BsQuestionLg} color='red' />
                                                Dont you need a lot of land to be a farmer?
                                            </ListItem>

                                            <ListItem ms={8} fontSize='22px' color='primary.yellowGreen'>
                                                Absolutely not! It certainly helps if you are looking to make a living off of the goods you are selling but if you are looking for that next side hustle or as a hobbyist there is no better way to get involved in your community!
                                            </ListItem>

                                            <ListItem> <ListIcon color='red' as={BsQuestionLg} />
                                                Is there a monthly quota you need to meet to continue being a farmer?
                                            </ListItem>

                                            <ListItem ms={8} fontSize='22px' color='primary.yellowGreen'>
                                                There are no monthly quotas. We just ensure customers are getting what they order and as long as that continues you can continue being a farmer as long as you desire!
                                            </ListItem>

                                        </List>
                                        <Image src={farmerPic}></Image>
                                    </Flex>
                                    <Link to='/myFarm'>
                                        <Flex justifyContent='center'>
                                            <Button mb={3} mt={3} textAlign='center' backgroundColor='white'>Register to become a farmer today!</Button>

                                        </Flex>
                                    </Link>
                                </Container>
                            </Flex>
                        </Container>
                        <Flex justifyContent='center' mt={4}>
                            <Footer />
                        </Flex>
                    </Container>
                </Box>
            </Flex>





        </>
    )
}

export default FarmsPage
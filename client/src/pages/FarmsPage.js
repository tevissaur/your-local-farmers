import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { QUERY_FARM, QUERY_CATEGORIES } from '../utils/queries';
import { Container, Flex, Box, Checkbox, CheckboxGroup, useCheckboxGroup, 
Button, Heading, Image, Text, List, ListItem, ListIcon, filter } from '@chakra-ui/react'
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
    console.log(farmList)
    
    const [visibleFarms, setVisibleFarms] = useState(farmList)
    const categoryList = data ? data.categories : []
   
    const [selectedCategoryNames, setSelectedCategoryNames] = useState([])
    
    
    useEffect(() => {
        setSelectedCategoryNames(categoryList.map( category => category.name))
    },[loading])
    
    
    useEffect(()=> {
        setVisibleFarms(farmList)
    },[categoryList])


    const handleCheckBoxChange = (e) => {
        const name = e.target.value
        const updatedSelectedCategoriesNames = 
selectedCategoryNames.includes(name)
            ? selectedCategoryNames.filter( categoryId => categoryId !== name)
            : [...selectedCategoryNames, name] 
        setSelectedCategoryNames(updatedSelectedCategoriesNames)

    let displayFarms = []
        for (let i = 0; i < farmList.length; i++) {
            for (let p = 0; p < farmList[i].products.length; p++){
                for(let c = 0; c < farmList[i].products[p].categories.length; c++){
                    for (let f = 0; f < selectedCategoryNames.length; f++){
                        console.log('F Quienten')
                        // if(farmList[i].products[p].categories[c].includes(selectedCategoryNames[f])){
                        //     displayFarms.push(farmList[i])
                        // } else {
                        //   if(displayFarms.length > 0 ) {
                        //    displayFarms = displayFarms.slice(farmList[i], farmList[i])
                        //    return 
                        //   } else {
                        //       return 
                        //   }
                        // }
                    }
                }
        }
        }
        setVisibleFarms(displayFarms)
    }
    return (
        <>
            <Flex>
                <SideNavBar />
                <Box m={4} flex='1'>
                    <Header />
                    <Flex justifyContent='center'>
                        <Container
                            maxW='container.xl'
                            m={4}
                            backgroundColor='white'
                            border='black 1px solid'
                            borderRadius='25px'
                            boxShadow='2px 2px black'
                        >
                        <Flex mt={3} justifyContent='space-evenly' 
alignItems='center' flexWrap='wrap'>
                            {categoryList.map(category => {
                                const checked = 
                                  selectedCategoryNames.includes(category.name)
                                return <Checkbox
                                        colorScheme="green"
                                        fontWeight='600' 
                                        onChange={handleCheckBoxChange} 
                                        value={category.name}
                                        key={category.name}
                                        isChecked={checked}
                                        >
                                            {category.name}
                                        </Checkbox>
                            })}     
                                </Flex>
                        </Container>
                    </Flex>
                    <Container maxW='100%'>
                        <Flex justifyContent='space-evenly' flexWrap='wrap'>
                            {farmList.map(farm => {
                                return <FarmCard key={farm._id} 
                                                  title={farm.name} reviews={farm.reviews} numericReview={farm.reviews.length} 
                                                  categories={farm.products.map(product => {
                                    return product.categories[0].name
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
                                <Heading as='h2'
                                        color='primary.yellowGreen' 
                                        textAlign='center' fontSize='35px'>
                                  Are You A Farmer or Want To Be One?    
                                </Heading>
                                <Heading 
                                  textAlign='center' 
                                  color='White' 
                                  fontSize='30px'>FAQs</Heading>
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
                                            <ListItem > <ListIcon 
                                              as={BsQuestionLg} color='red' />
                                                What if I am are not tech savy?
                                            </ListItem>
                                            <ListItem ms={8} fontSize='22px' 
                                              color='primary.yellowGreen'>
                                                Dont worry we make it as stress 
                                                free as possible with an accessible managment system.
                                            </ListItem>
                                            <ListItem> <ListIcon 
as={BsQuestionLg} color='red' />
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
                                            <ListItem> <ListIcon color='red' 
                                                as={BsQuestionLg} />
                                                Is there a monthly quota you 
                                                need to meet to continue being a farmer?
                                            </ListItem>
                                            <ListItem ms={8} fontSize='22px' 
color='primary.yellowGreen'>
                                                There are no monthly quotas. We 
just ensure customers are getting what they order and as long as that continues 
you can continue being a farmer as long as you desire!
                                            </ListItem>
                                        </List>
                                        <Image src={farmerPic}></Image>
                                    </Flex>
                                    <Link to='/myFarm'>
                                        <Flex justifyContent='center'>
                                            <Button mb={3} mt={3} 
textAlign='center' backgroundColor='white'>Register to become a farmer 
today!</Button>
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

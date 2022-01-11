import React from 'react'
import { Flex } from '@chakra-ui/react'
import { BiCookie } from 'react-icons/bi'
import { ImMug } from 'react-icons/im'
import { GiGrainBundle, GiFruitBowl, GiMeatCleaver, GiFlowerPot } from 'react-icons/gi'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { BsFillCloudSunFill } from 'react-icons/bs'

function FarmCardAvailableGoods({categories}) {
    return (
        <Flex  mt={1} justifyContent='space-around' w='100%' id='work'>
            {categories.map(category => {
                switch(category){
                    case 'Baked Goods':
                        return <BiCookie fontSize='25px'/>
                        
                    case 'Dairy, Meat & Eggs':
                        return  <GiMeatCleaver fontSize='25px'/>
                        
                            
                    case 'Flowers & Plants':
                        return <GiFlowerPot fontSize='25px' />
                        
                    case 'Fruits & Vegetables':
                        return <GiFruitBowl fontSize='25px'/>
                                    
                    case 'Seasonal Stuffs':
                        return <BsFillCloudSunFill fontSize='25px'/>
                                        
                    case 'Beverages':
                            return <ImMug fontSize='25px'/>
                        }   
                    }
                )
            }
        </Flex>
    )
}

export default FarmCardAvailableGoods

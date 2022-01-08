import { categoryData } from '../categoryData';
import CategoryCard from './CategoryCard';
import { Grid, GridItem } from '@chakra-ui/react'



const CategoryCards = () => {
  
  return (
   <Grid templateColumns='repeat(3, 1fr)' gap={6} mt={6}>
    {categoryData.map((card,index) => (
      <CategoryCard key={index} card={card}/>
    ))
    }   
   </Grid>
  )
}
  


export default CategoryCards

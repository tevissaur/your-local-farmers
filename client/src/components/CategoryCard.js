import {Link} from 'react-router-dom';
import {Box} from '@chakra-ui/react'

const CategoryCard = ({card}) => {
  return (
    <Box borderRadius='50%'>
      <h1> {card.title}</h1>
      <img src={card.image} style={{width:"300px", height:"250px"}} />
      <Link to={`/products/${card.title.toLowerCase()}`}>View More </Link>
     
    </Box>
        
  )
}

export default CategoryCard

import {Link} from 'react-router-dom';
import { categoryData } from '../categoryData';

const CategoryCards = () => {

  return (
   <>
    {categoryData.map((card,index) =>(
      <div key ={index}>
        <h1> {card.title}</h1>
        <Link to={`/products/${card.title.toLowerCase()}`}>View More </Link>
      </div>
    ))}
   </>
  )
}

export default CategoryCards

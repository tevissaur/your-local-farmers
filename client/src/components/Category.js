import {useParams} from "react-router-dom";

const Category= ({data}) => {
 const {title} = useParams()
 const foundCategory = data.find(category => category.title.toLowerCase() === title)


  return (
    <div>
      <h1>{foundCategory.title}</h1>
     
    </div>
  )
}

export default Category

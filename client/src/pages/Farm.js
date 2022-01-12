import { useQuery } from "@apollo/client";
import { QUERY_FARM } from "../utils/queries";
import { useParams } from "react-router-dom";
import '@chakra-ui/icons'

const Farm = () => {
  const { name } = useParams();
  const { loading, data, error } = useQuery(QUERY_FARM);

  if (loading) {
    return "<h2>Loading</h2>";
  }


  const farmList = data ? data.farms : [];
  const foundFarm = farmList.find((farm) => farm.name.toLowerCase() === name);
  console.log(foundFarm);

  return (
    <div>
      hello from farm {name}
      {  <h1>{foundFarm.name} ---{foundFarm.address} </h1>}
      {foundFarm.owners.map((owner,idx) => (
        <h1 key={idx}>{owner.fullName}</h1>
      ))}
      
      
      {foundFarm.products.map((product, idx) => (
        <div key={idx}>
          <span>{product.name} </span>
          <span>Price: {product.price}</span>
          <span>Quantity:{product.quantity}</span>
          <span>
            Reviews:
            {product.reviews.map((review, idx) => (
              <p key={idx}>
                {review.content} {review.rating}
              </p>
            ))}
          </span>
        </div>
      ))} 
      <h1>Farm's review
        {foundFarm.reviews.map((review, idx) => (
          <p key={idx}>{review.rating}</p>
        ))}

      </h1>



    </div>

  );
};

export default Farm;

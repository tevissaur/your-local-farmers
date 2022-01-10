import { useQuery } from "@apollo/client";
import { QUERY_FARM } from "../utils/queries";
import { useParams } from "react-router-dom";

const Farm = () => {
  const { name } = useParams();
  const { loading, data, error } = useQuery(QUERY_FARM);

  if (loading) {
    return "<h2>Loading</h2>";
  }

  console.log(data);
  const farmList = data ? data.farms : [];
  const foundFarm = farmList.find((farm) => farm.name === name);
  console.log(foundFarm);

  return (
    <div>
      <h1>{foundFarm.name}</h1>
      <h1>{foundFarm.address}</h1>
      {foundFarm.owners.map((owner, idx) => (
        <h1 key={idx}>
          {owner.firstName} {owner.lastName}
        </h1>
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
      {foundFarm.reviews.map((review,idx) => (
        <p key ={idx}>{review.rating} {review.author.firstName} {review.content}</p>
      ))}

      </h1>
      


    </div>

  );
};

export default Farm;

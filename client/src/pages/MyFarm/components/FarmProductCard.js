import { Box, Typography, Link } from "@mui/material";
import { Link as ReactLink } from "react-router-dom";
import { imageSeeds } from "../../../imageSeeds";
import store from "../../../utils/store";

const FarmProduct = ({ product }) => {
  const { dashboard: { myFarm } } = store.getState()


  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'space-between',
      paddingX: 3 
    }}>
      <Box
        component='img'
        sx={{
          maxWidth: '200px'
        }}
        objectFit="cover"
        // src={`${foundProductImage}`}
        alt="Delish food photo"
      />

      <Link component={ReactLink} to={`/farm/${myFarm._id}/products/${product._id}`}>
        <Box flexDirection="column" alignItems="center">
          <Typography fontSize="2xl">{product.name}</Typography>

          <Typography fontSize="2xl">${product.price}</Typography>
        </Box>
      </Link>

      <Typography>
        Available:{" "}
        <span style={{ fontWeight: "bolder" }}>{product.quantity}</span>
      </Typography>
    </Box>
  );
};

export default FarmProduct;

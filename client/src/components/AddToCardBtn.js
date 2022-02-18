
import { Button } from "@mui/material";
import { CgShoppingCart } from "react-icons/cg";


const AddToCardBtn = () => {
  return (
      <Button
        leftIcon={<CgShoppingCart fontSize="20px" />}
        backgroundColor="primary.lightGreen"
        variant="solid"
        fontSize="sm"
      >
        Add To Cart
      </Button>
  )
}

export default AddToCardBtn

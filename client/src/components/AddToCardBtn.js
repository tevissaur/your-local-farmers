import {
  Button,
  Box,
  Flex,
  Text,
  FormControl,
  Select,
  Input,
} from "@chakra-ui/react";
import { CgShoppingCart } from "react-icons/cg";


const AddToCardBtn = () => {
  return (
    <div>
      <Button
                    leftIcon={<CgShoppingCart fontSize="20px" />}
                    backgroundColor="primary.lightGreen"
                    variant="solid"
                    fontSize="sm"
                  >
                    Add To Cart
                  </Button>
    </div>
  )
}

export default AddToCardBtn

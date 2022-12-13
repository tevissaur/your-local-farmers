import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../utils/store";

const ProductSearch = () => {
  
  const { search } = useSelector((state: RootState)=> state)
  
  return (
    <>
      
    </>
  );
};

export default ProductSearch;
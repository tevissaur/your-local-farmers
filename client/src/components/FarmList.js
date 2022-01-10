import {Flex, Box} from '@chakra-ui/react';
import {useQuery} from '@apollo/client';
import {QUERY_FARM} from '../utils/queries';
import Farm from "../pages/Farm";


const FarmList = () => {
 const {loading, data, error} = useQuery(QUERY_FARM)
 const farmList = data ? data.farms : []

  return (
    
    <div>
      {farmList.map((farm,index) =>(
       <Farm key ={index} farm={farm}/>
      ))}
    </div>
  )
}

export default FarmList

import React, {useState} from 'react'
import {Input, Text, Container, Flex, Center, InputLeftElement, InputGroup} from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'


function SearchBar() {
    let [searchTerm, setSearchTerm] =useState('')

  let handleInputChange = (e) => {
    let inputValue = e.target.value
    setSearchTerm(inputValue)
  }
  return (
<>
    <Container mt={5} maxW="100%">
        <Flex alignItems="center" fontSize="25px">
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<BsSearch/>}
                    ml='.5rem'
                    />
                <Input
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder='Search for products here!'
                    w='100%'
                    ml={3}
                />     
            </InputGroup>
        </Flex>
    </Container>
</>
  )
}

export default SearchBar

import { useEffect, useState, useRef } from "react";
import {useMutation } from "@apollo/client";
import {POST_REVIEW } from "../utils/mutations"
import {
  Button,
  Box,
  Flex,
  Text,
  FormControl,
  Select,
  Input,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import auth from '../utils/auth'

const ReviewButton = ({inputText, setInputText,reviews,setReviews,product}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const [postReview, {data,loading,error}] = useMutation(POST_REVIEW)
 

  const initialRef = useRef();
  const finalRef = useRef();
  const handleSubmit = async (e) =>{
    e.preventDefault()
    if(!inputText) return
    const profile = auth.getProfile()
    console.log(profile.data._id)

    const newReview = await postReview({
      variables: {
        review: {
            author: profile.data._id,
            content: inputText,
            rating :5
        },
        product_id: product._id

      }
    })
    console.log(newReview)
    setReviews([...reviews, newReview.data.postReview])
    setInputText("")
    onClose()

  }

  return (
 
    <div>
      <Button
        color="black"
        backgroundColor="primary.yellowGreen"
        fontSize="sm"
        size="sm"
        onClick={onOpen}
      >
        Leave a review
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent>
          <ModalBody pb={6}>
            <FormControl color="green" border="green">
              <Input
                id="content"
                type="text"
                value={inputText}
                placeholder="Type your review of this product here..."
                onChange={(e) => setInputText(e.target.value)}
              />
              <Select
                id="country"
                placeholder="EXCELLENT"
                backgroundColor="primary.yellowGreen"
              >
                <option>5- EXCELLENT</option>
                <option>4-GOOD</option>
                <option>3-AVERAGE</option>
                <option>2-POOR</option>
                <option>1-BAD</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button 
            colorScheme="green" mr={3}
            type="submit"
            onClick={handleSubmit}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ReviewButton;

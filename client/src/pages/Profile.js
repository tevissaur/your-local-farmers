import { useMutation, useQuery, useLazyQuery } from '@apollo/client'
import { Box, Flex } from '@chakra-ui/react'
import { } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GET_ME } from '../utils/queries'
import SideNavBar from '../components/SideNavBar'
import Header from '../components/Header'
import Auth from '../utils/auth';

const Profile = () => {
    const [userData, setUserData] = useState({})
    const id = Auth.getProfile()
    console.log(id)
    const { data, loading, error } = useQuery(GET_ME, {
        variables: { id: "61dcce98a022a51b7cc6465e" }
    })


    useEffect(() => {

        try {
            loading ? console.log(loading) : console.log(loading)

            console.log(data, loading, error)
            // console.log(userData)

        } catch (err) {
            console.log(err)
        }

        // setUserData(data)
    })
    return (
        <>
            <Flex>

                <SideNavBar />
                <Box m={4} flex="1">
                    <Header />

                </Box>
            </Flex>
        </>
    )
}

export default Profile
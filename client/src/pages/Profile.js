import { useMutation, useQuery, useLazyQuery } from '@apollo/client'
import { Box } from '@chakra-ui/react'
import { } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GET_ME } from '../utils/queries'
import SideNavBar from '../components/SideNavBar'
import Header from '../components/Header'


const Profile = () => {
    const [userData, setUserData] = useState({})
    const { data, loading, error } = useQuery(GET_ME, {
        variables: { id: "61dcce98a022a51b7cc6465e" }
    })

    
    useEffect(() => {

        try {
            loading ? console.log(loading) : setUserData(data.me)
            
            console.log(data, loading, error)
            // console.log(userData)

        } catch (err) {
            console.log(err)
        }

        // setUserData(data)
    })
    return (
        <>
            <h1>
                {loading ? (
                    <>
                        loading
                    </>
                ) : (
                    <>
                        not loading
                    </>
                )}
            </h1>
            <Header />
            <SideNavBar />
        </>
    )
}

export default Profile
import { useMutation, useQuery, useLazyQuery } from '@apollo/client'
import { Box } from '@chakra-ui/react'
import { } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GET_ME } from '../utils/queries'
import SideNavBar from '../components/SideNavBar'
import Header from '../components/Header'


const Profile = () => {
    const [userData, setUserData] = useState({})
    const { data: { me }, loading, error } = useQuery(GET_ME, {
        variables: { id: "61dcbeb64ccfff30f8a93bd0" }
    })
    
    useEffect(() => {
        loading ? console.log(loading) : setUserData(me)
        
        console.log(me, loading, error)
        console.log(userData)

        // setUserData(data)
    }, [])
    return (
        <>
            <h1>
                {loading ? (
                    <>
                        loading
                    </>
                ) : (
                    <>
                        { userData.fullName }
                    </>
                )}
            </h1>
            <Header />
            <SideNavBar />
        </>
    )
}

export default Profile
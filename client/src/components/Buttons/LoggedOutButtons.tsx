import { Box, Link } from "@mui/material"
import ShoppingCart from "@mui/icons-material/ShoppingCart"
import { Link as ReactLink } from "react-router-dom"
import SignupForm from "../AuthForms/SignupForm"
import LoginForm from "../AuthForms/LoginForm"
import React from "react"

const LoggedOutButtons = () => {

    return (
        <>
            <Box sx={{
              display: 'flex',
              marginX: 1,
            }}>
              <SignupForm></SignupForm>
              <LoginForm></LoginForm>

            </Box>
        </>
    )
}

export default LoggedOutButtons
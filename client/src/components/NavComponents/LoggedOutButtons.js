import { Box, Link } from "@mui/material"
import ShoppingCart from "@mui/icons-material/ShoppingCart"
import { Link as ReactLink } from "react-router-dom"
import Signup from "./Signup"
import LoginForm from "./LoginForm"

const LoggedOutButtons = () => {

    return (
        <>
            <Box sx={{
              display: 'flex',
              marginX: 2
            }}>
              <Signup></Signup>
              <LoginForm></LoginForm>

            </Box>
        </>
    )
}

export default LoggedOutButtons
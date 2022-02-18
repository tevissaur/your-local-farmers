import { Box, Link, Typography } from '@mui/material'
import { BsGithub } from 'react-icons/bs'


const Footer = () => {
    return (
        <>
            <Box justifyContent='center' alignItems='center'>
                <Typography>Made by Tevis, Alex, Linh and Quentin</Typography>
                <Box ms={3}>
                    {/* <Link href='https://github.com/tevissaur/your-local-farmers' target='_blank'>
                        <BsGithub/>
                    </Link> */}
                </Box>
            </Box>


        </>
    )
}

export default Footer

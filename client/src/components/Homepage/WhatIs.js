import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const WhatIs = () => {

    return (
        <Box sx={{
            marginTop: '20px',
            width: '100%',
            backgroundColor: 'ghostwhite',
        }}>
            <Typography as='h2' fontSize='3.5rem' textAlign='center' color={'green'}>
                What Is Local Farmers?
            </Typography>
            <Box sx={{
                    padding: '40px'
                }}>
                <Typography>
                    "The U.S. food and farming system contributes
                    nearly $1 trillion to the national economy—
                    or more than 13 percent of the gross domes-
                    tic product—and employs 17 percent of the
                    labor force.5 With a rapidly increasing world
                    population and expanding global markets,
                    saving American farmland is a prudent
                    investment in world food supply and eco-
                    nomic opportunity.
                    Asian and Latin American countries are the
                    most significant consumers of U.S. agricultur-
                    al exports. Latin America, including Mexico,
                    purchases an average of about $10.6 billion
                    of U.S. agricultural exports each year. Asian
                    countries purchase an average of $23.6 bil-
                    lion/year, with Japan alone accounting for
                    about $10 billion/year.6 Even as worldwide
                    demand for a more diverse diet increases,
                    many countries are paving their arable land
                    to support rapidly expanding economies.
                    Important customers today, they are expected
                    to purchase more agricultural products in the
                    future.
                    While domestic food shortages are unlikely in
                    the short term, the U.S. Census predicts the
                    population will grow by 42 percent in the
                    next 50 years. Many developing nations
                    already are concerned about food security."

                </Typography>
            </Box>
        </Box>
    )
}

export default WhatIs
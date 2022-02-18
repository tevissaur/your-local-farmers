import SmartSmallIcon from "../components/SmartSmallIcon";
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import List from '@mui/material/List'
import { Link } from "react-router-dom";

const Homepage = () => {


  return (
    <>
      <Box display='flex' flexDirection='column' flexWrap='wrap'>
        <Box>
          <Box>
            <Typography>
              Explore Our Most Popular Categories
            </Typography>
          </Box>

          <Box>
            <SmartSmallIcon />
          </Box>
        </Box>

        <Box>
          <Box>
            <Typography>
              Our Mission Statement!
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon />
                Support local farming communities
              </ListItem>

              <ListItem>
                <ListItemIcon />
                To Raise awareness for developing and supporting those that generate goods in a renewable way
              </ListItem>

              <ListItem>
                <ListItemIcon />
                Creating a community where people can get the food and resources they need to survive
              </ListItem>
            </List>
          </Box>
        </Box>
        <Container>
          <Typography as='h2' fontSize='3.5rem' textAlign='center' color={'green'}>
            The Whys Behind The Whats
          </Typography>
          <Box>
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
              <Link
              to='https://sustainable-farming.rutgers.edu/wp-content/uploads/2017/10/Why-Save-Farmland.pdf'
              target='_blank' fontWeight='bold' color={'green'}>
              To read more from this article Click Here!
            </Link>
            </Typography>
          </Box>
        </Container>
      </Box>

    </>
  );
};

export default Homepage;

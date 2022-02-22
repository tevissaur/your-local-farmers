import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'


const MissionStatement = () => {

    return (
        <Box sx={{
            margin: '20px auto',
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            width: '40%',
            backgroundColor: 'ghostwhite',
            borderRadius: '10px',
            border: '1px solid black',
            boxShadow: '1px 1px 0 black'
          }}>
            <Typography variant='h5' sx={{
              textAlign: 'center'
            }}>
              Our Mission Statement!
            </Typography>
            <List sx={{
  
              margin: 'auto'
            }}>
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
    )
}

export default MissionStatement
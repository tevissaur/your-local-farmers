import styled from '@mui/material/styles/styled'
import Button from '@mui/material/Button/Button'

export const BaseButton = styled(Button)(({ theme }) => ({
    borderRadius: '25px',
    paddingX: 1.5,
    color: 'black',
    margin: '2px 5px',
    backgroundColor: 'lightgray',
    border: '1px solid black',
    boxShadow: '1px 1px 0 black',
    transform: 'translate(-1px, -1px)',
    transition: 'all 100ms',
    ':hover': {
        backgroundColor: 'white',
        transform: 'translate(0px, 0px)',
        boxShadow: '0px 0px 0 black',
    }
}))

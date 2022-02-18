import { useEffect, useState } from 'react'

const UploadImage = (props) => {
    const [file, setFile] = useState('filename')
    const reader = new FileReader()

    useEffect(() => {
        
    })

    const handleUpload = (args) => {
        setFile(args)
        return console.log(args)
    }

    return (
        <Box>
            <FormControl>

                <Input
                    type='file'
                    name='file'
                >

                </Input>
                <Button
                    type='submit'
                    onClick={() => {
                        handleUpload(file)
                    }}
                >
                    Upload
                </Button>
            </FormControl>
        </Box>
    )

}

export default UploadImage
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
    colors: {
        primary: {
            yellowGreen: "#D0DB97",
            lightGreen: "#69B578",
            emeraldGreen: '#3A7D44',
            darkGreen: '#254D32',
        },
        background: {
            darkBlue: '#181D27'
        }
    }
})

export default customTheme
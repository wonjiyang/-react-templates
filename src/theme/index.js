import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        primary: '#hfj239',
        brand: {
          100: "#f7fafc",
          900: "#1a202c",
        },
        red : {
          100: "#ff9999",
          900: "#ff0000"
        }
      },
})

export default theme
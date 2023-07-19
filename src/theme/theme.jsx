import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },

  fonts: {
    heading: "Playfair Display, sans-serif",
    body: "Poppins, sans-serif",
  },
  colors: {
    bgDark: "black",
    bgLight: "#F2EEE3",
    input: "#D9D9D9",
  },
  components: {
    Progress: {
      baseStyle: {
        filledTrack: {
          bg: "#000000",
        },
      },
    },
  },
});

export default theme;

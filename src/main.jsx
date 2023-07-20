import React from "react";
import ReactDOM from 'react-dom';
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import App from "./App.jsx";
import "./index.css";

import theme from "./theme/theme.jsx";

import "@fontsource/playfair-display";
import "@fontsource/poppins";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/800.css";

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode="dark" />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

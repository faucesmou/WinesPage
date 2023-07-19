import React from "react";
import ReactDOM from "react-dom/client";
// 1. import `ChakraProvider` component
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import App from "./App.jsx";
import "./index.css";

// Theme
import theme from "./theme/theme.jsx";

// fonts
import "@fontsource/playfair-display";
import "@fontsource/poppins";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/800.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode="dark" />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

import BeyondTheWine from "./pages/beyond-the-wine";
import Landing from "./pages/landing";
import SingleVineyard from "./pages/single-vineyard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "swiper/css";
import "swiper/css/autoplay";
import SwiperCore, { Autoplay } from "swiper";
import { createContext, useEffect, useState } from "react";
import StickyCart from "./components/sticky-cart";
import { Box } from "@chakra-ui/react";
import S1 from "./assets/imgs/s1.png";

SwiperCore.use([Autoplay]);

export const CartContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/singlevineyard",
    element: <SingleVineyard />,
  },
  {
    path: "/beyondthewine",
    element: <BeyondTheWine />,
  },
]);
function App() {
  const [cartState, setCartState] = useState([]);

  useEffect(() => {
    window.addEventListener("load", () => {
      const loaderWrapper = document.querySelector(".loader-wrapper");
      if (loaderWrapper) loaderWrapper.style.display = "none";
    });
  }, []);
  return (
    <Box>
      <CartContext.Provider value={{ cartState, setCartState }}>
        <StickyCart />
        <RouterProvider router={router} />
      </CartContext.Provider>
    </Box>
  );
}

export default App;

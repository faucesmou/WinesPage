import Cards from "./components/cards";
import Contact from "./components/contact";
import Home from "./components/home";
import Navbar from "../../components/navbar";
import ShopSocial from "./components/shop-social";
import Wines from "./components/wines";
import GrapesSection from "../../components/grapes";
import { Box } from "@chakra-ui/react";
import StickyCart from "../../components/sticky-cart";

const Landing = () => {
  return (
    <Box>
      <Navbar />
      <Home />
      <Wines />
      <ShopSocial />
      <Cards />
      <Contact />
      <GrapesSection />
    </Box>
  );
};
export default Landing;

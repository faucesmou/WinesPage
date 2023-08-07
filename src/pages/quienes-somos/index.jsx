import Cards from "./components/cards";
import Contact from "./components/contact";
import Home from "./components/home";
import Navbar from "../../components/navbar";
import ShopSocial from "./components/shop-social";
import Wines from "./components/wines";
import HeroSection2 from "./components/hero2/hero2";
import GrapesSection from "../../components/grapes";
import { Box } from "@chakra-ui/react";
import StickyCart from "../../components/sticky-cart";

const Landing2 = () => {
  return (
    <Box >
      <Navbar />
      <HeroSection2 />
      <Contact />
      <Home />
      <Cards />
      <GrapesSection />
    </Box>
  );
};
export default Landing2;

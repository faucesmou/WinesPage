import { Box } from "@chakra-ui/react";
import Footer from "../footer";
import Grapes from "../../assets/imgs/grapes.png";
import MinGrapes from "../../assets/imgs/minimal-grapes-img.png";

const GrapesSection = () => {
  return (
    <Box
      minH={{ base: "100vh", md: "100vh" }}
      width="100%"
      bgImage={{ base: MinGrapes, md: Grapes }}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      position="relative"
    >
      <Footer position="absolute" />
    </Box>
  );
};
export default GrapesSection;

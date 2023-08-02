import { Box, Image } from "@chakra-ui/react";
import HeroImg from "../../../../assets/imgs/grandpa4.png";

const HeroSection2 = () => {
  return (
    <Box height={{ base: "40vh", md: "70vh" }} bg="bgLight">
      <Image
        src={HeroImg}
        width="100%"
        height="100%"
        /* objectFit="contain" */
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
      />
    </Box>
  );
};
export default HeroSection2;

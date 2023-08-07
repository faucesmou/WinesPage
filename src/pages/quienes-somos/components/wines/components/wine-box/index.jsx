import { Box, Icon, Image } from "@chakra-ui/react";
import { AiOutlinePlusCircle } from "react-icons/ai";

const plusIconStyles = {
  boxSize: 12,
  color: "#fff",
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const bottlesStyles = {
  width: "202px",
  height: "499px",
  opacity: 0.5,
};

const WineBox = ({ handleMouseEnter, handleMouseLeave, wineImg, ref }) => {
  return (
    <Box position="absolute" left="690px" top="100px">
      <Box
        position="relative"
        _hover={{ transform: "scale(1.05)" }}
        onMouseOver={(e) => handleMouseEnter(e, "s3")}
        onMouseLeave={(e) => handleMouseLeave(e, "s3")}
        transition="all .1s ease-in"
      >
        <Image
          mixBlendMode="luminosity"
          {...bottlesStyles}
          opacity={1}
          src={wineImg}
        />
        <Box ref={ref} display="none" transition="all .1s ease-in">
          <Icon as={AiOutlinePlusCircle} {...plusIconStyles} />
        </Box>
      </Box>
    </Box>
  );
};
export default WineBox;

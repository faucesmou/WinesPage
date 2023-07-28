import { Box } from "@chakra-ui/react";
import LargeScreensWines from "./components/large-screens-responsive";
import ResponsiveWines from "./components/responsive-wines";

const Wines2 = () => {
  return (
    <Box>
      <Box display={{ base: "none", sm: "block" }}>
        <LargeScreensWines />
      </Box>
      <Box display={{ base: "block", sm: "none" }}>
        <ResponsiveWines />
      </Box>
    </Box>
  );
};
export default Wines2;

import { Box } from "@chakra-ui/react";
import CustomButton from "../../../../components/button";

const VisitaBtn = () => {
  return (
    <Box px={10} bg="bgDark" py={10}>
      <CustomButton
        text="Visita nuestro canal de YouTube"
        bg="rgba(0, 0, 0, 0.5)"
      />
    </Box>
  );
};
export default VisitaBtn;

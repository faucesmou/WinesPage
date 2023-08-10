import { Box, SimpleGrid } from "@chakra-ui/react";
import SimpleCard from "./components/card/card";
import CustomButton from "../../../../components/button";
import so1 from "../../../../assets/imgs/so1.png";
import so2 from "../../../../assets/imgs/so2.png";
import so3 from "../../../../assets/imgs/so3.png";
import so4 from "../../../../assets/imgs/so4.png";
import { Link } from "react-router-dom";

const cards = [
  { id: 1, img: so1 },
  { id: 2, img: so2 },
  { id: 3, img: so3 },
  { id: 4, img: so4 },
];

const Cards = () => {
  return (
    <Box pb={6} bg="bgDark">
      <Box mx={{ base: 6, md: 16 }} mb={{ base: 10, md: 3 }}>
        <SimpleGrid mb={10} columns={{ base: 1, md: 2, lg: 4 }} spacing={5}>
          {cards.map(({ img }, i) => (
            <SimpleCard key={i} img={img} />
          ))}
        </SimpleGrid>
        <CustomButton text="Cargar mas" />
      </Box>
    </Box>
  );
};
export default Cards;

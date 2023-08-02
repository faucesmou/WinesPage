import { Box, SimpleGrid, Heading, Stack } from "@chakra-ui/react";
import SimpleCard from "./components/card/card";
import so1 from "../../../../assets/imgs/historias/nuestroEquipo1.jpg";
import so2 from "../../../../assets/imgs/historias/nuestroEquipo2.jpg";
import so3 from "../../../../assets/imgs/historias/nuestroEquipo3.jpg";
import so4 from "../../../../assets/imgs/historias/nuestroEquipo4.jpg";
import so5 from "../../../../assets/imgs/historias/nuestroEquipo5.jpg";

const cards = [
  { id: 1, img: so1 },
  { id: 2, img: so2 },
  { id: 3, img: so3 },
  { id: 4, img: so4 },
  { id: 5, img: so5 },
];

const Cards = () => {
  return (
    <Box pb={6} bg="black" display="flex"  alignItems="center" justifyContent="center" minHeight="100vh">
      <Box mx={{ base: 6, md: 16 }} mb={{ base: 10, md: 3 }} position="relative">
      <Stack
            direction="column"
            gap={{ base: 0, lg: 1 }}
            align="center"
            mb={2}
          >
        <Heading
          fontStyle="italic"
          color="white"
          fontSize={{ base: "44px", md: "50px", lg: "70px", xl: "70px" }}
          fontWeight={400}
          lineHeight={{ base: "44px", md: "30%", xl: "60%" }}
        >
          Nuestro Equipo
        </Heading>
        </Stack>
        <SimpleGrid /* mt={1} modificando para mejorar el margen inferior */ mb={2} columns={{ base: 1, md: 2, lg: 5 }} spacing={3}>
          {cards.map(({ img }, i) => (
            <SimpleCard key={i} img={img} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Cards;

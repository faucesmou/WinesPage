import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import S1 from "../../../../assets/imgs/s1.png";
import P1 from "../../../../assets/imgs/p1.png";
import P2 from "../../../../assets/imgs/p2.png";
import P3 from "../../../../assets/imgs/p3.png";
import { FiShoppingCart } from "react-icons/fi";
import { BsArrowUpCircle, BsFileEarmarkArrowDown } from "react-icons/bs";
import Rating from "./rating";
import CustomWineCard from "./custom-wine-card";
import Footer from "../../../../components/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useContext, useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { CartContext } from "../../../../App";

// SwiperCore.use([Autoplay]);

const ratingItems = [
  { text: "Formato", value: 40 },
  { text: "Calificación", value: 90 },
  { text: "Varietal", value: 70 },
  { text: "Añada", value: 60 },
];

const malbecData = [
  {
    image: P1,
    text: "",
    subText: "",
    price: "",
    btnText: "Añadir al carrito",
  },
  {
    image: P1,
    text: "",
    subText: "",
    price: "",
    btnText: "Añadir al carrito",
  },
  {
    image: P1,
    text: "",
    subText: "",
    price: "",
    btnText: "Añadir al carrito",
  },
  // ... Otros vinos Malbec
];

const chardonnayData = [
  {
    image: P2,
    text: "",
    subText: "",
    price: "",
    btnText: "Añadir al carrito",
  },
  {
    image: P2,
    text: "",
    subText: "",
    price: "",
    btnText: "Añadir al carrito",
  },
  {
    image: P2,
    text: "",
    subText: "",
    price: "",
    btnText: "Añadir al carrito",
  },
];

const VineContent = () => {
  const toast = useToast();

  const { cartState, setCartState } = useContext(CartContext);

  const addToCart = (image, text, price) => {
    const foundItem = cartState.filter((item) => item.text === text)[0];

    if (foundItem) {
      toast({
        title: "Item already added to cart",
        status: "error",
        isClosable: true,
        position: "top",
      });

      return;
    }
    setCartState([...cartState, { image, text, price, quantity: 1 }]);
  };
  const updateQuantity = (text) => {
    if (!cartState.length) {
      toast({
        title: "Cart is empty!!",
        status: "error",
        isClosable: true,
        position: "top",
      });

      return;
    }
    const foundItem = cartState.filter((item) => item.text === text)[0];
    if (!foundItem) {
      toast({
        title: "Item not found in cart!!",
        status: "error",
        isClosable: true,
        position: "top",
      });

      return;
    }
    let newArray = cartState.map((item) =>
      item.text === text ? { ...item, quantity: item.quantity + 1 } : item
    );

    setCartState(newArray);
  };

  const getQuantity = () => {
    const item = cartState.filter(
      (item) => item.text === "Single Vineyard Malbec 2021"
    )[0];

    if (item) return item.quantity;
    return 0;
  };

  const getCurrentPrice = () => {
    const item = cartState.filter(
      (item) => item.text === "Single Vineyard Malbec 2021"
    )[0];

    if (item) return item.quantity * item.price;
    return 9.0;
  };

  return (
    <Box bg="bgLight" position="relative">
      {/* Acá cambiás el fondo de toda la página */}
      <Flex color="bgDark" justify="center" pb={{ base: 0, md: "15px" }}>
        <Flex
          direction="column"
          gap={4}
          width={{ base: "100%", lg: "80%", xl: "60%" }}
          align="center"
        >
          <Stack
            direction="column"
            gap={{ base: 0, lg: 1 }}
            align="center"
            mb={4}
          >
            <Heading
              fontStyle="italic"
              color="black" /* color título grande */
              fontSize={{ base: "44px", md: "50px", lg: "70px", xl: "100px" }}
              fontWeight={400}
              lineHeight={{ base: "44px", md: "40%", xl: "117%" }}
              mt={10}
            >
              Single Vineyard
            </Heading>
          </Stack>

        </Flex>
      </Flex>

      {/* Contenedor para vinos Malbec y Chardonnay */}
      <Flex
        color="bgDark"
        justify="center"
        flexDirection={{ base: "column", md: "row" }} // Alineación vertical en columna para dispositivos pequeños y horizontal en fila para dispositivos medianos y grandes
        pb={{ base: 0, md: "15px" }}
     
      >
        <Flex
          direction="column"
          gap={4}
          width={{ base: "100%", md: "50%", xl: "30%" }} // Ancho del contenedor para dispositivos pequeños, medianos y grandes respectivamente
          align="center"
          // Ajustamos el marginLeft para separar el contenedor de "Malbec" del centro:
          marginRight={{base: "10px", md: "20px", lg: "15px" }}
        >
          {/* ... Código existente */}
          

          <Divider borderColor="bgDark" />

          <Flex
            direction="column"
            gap={8}
            marginTop={{ base: "10px", lg: "45px" }}
            marginBottom={{ base: "10px", lg: "30px" }}
          >
            <Box display={{ base: "none", sm: "block" }}>
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={{ base: 5, lg: 14 }}
              >
                {malbecData.map(({ image, text, subText, price, btnText }, i) => (
                  <CustomWineCard
                    image={image}
                    key={i}
                    onAddToCart={() => {}}
                    text={text}
                    subText={subText}
                    price={price}
                    btnText={btnText}
                  />
                ))}
              </SimpleGrid>
            </Box>
          </Flex>
        </Flex>

        <Flex
          direction="column"
          gap={4}
          width={{ base: "100%", md: "50%", xl: "30%" }} // Ancho del contenedor para dispositivos pequeños, medianos y grandes respectivamente
          align="center"
          // Ajustamos el marginRight para separar el contenedor de "Chardonnay" del centro
          marginLeft={{ base: "10px", md: "20px", lg: "15px" }}
        >
          {/* ... Código existente */}

          <Divider borderColor="bgDark" />

          <Flex
            direction="column"
            gap={8}
            marginTop={{ base: "10px", lg: "45px" }}
            marginBottom={{ base: "10px", lg: "30px" }}
          >
            <Box display={{ base: "none", sm: "block" }}>
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={{ base: 5, lg: 14 }}
              >
                {chardonnayData.map(
                  ({ image, text, subText, price, btnText }, i) => (
                    <CustomWineCard
                      image={image}
                      key={i}
                      onAddToCart={() => {}}
                      text={text}
                      subText={subText}
                      price={price}
                      btnText={btnText}
                    />
                  )
                )}
              </SimpleGrid>
            </Box>
          </Flex>
        </Flex>
      </Flex>

      <Footer />
    </Box>
  );
  {
    /* -------------------------------------------------- */
  }

};
export default VineContent;

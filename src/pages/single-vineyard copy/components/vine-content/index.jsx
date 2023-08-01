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

const wineCardData = [
  {
    image: P1,
    text: "Single Vineyard ",
    subText: "Malbec (x6)",
    price: "9.000",
    btnText: "Añadir al carrito",
  },
  {
    image: P2,
    text: "Single Vineyard2 ",
    subText: "Chardonay (x6)",
    price: "5.000",
    btnText: "Añadir al carrito",
  },
  {
    image: P3,
    text: "Núcleo2",
    subText: "Malbec (x6)",
    price: "12.000",
    btnText: "Añadir al carrito",
  },
];

const wineCardData2 = [
  {
    image: P1,
    text: "Almarada",
    subText: "Malbec (x6)",
    price: "5.000",
    btnText: "Añadir al carrito",
  },
  {
    image: P2,
    text: "Almarada",
    subText: "Cabernet (x6)",
    price: "6.500",
    btnText: "Añadir al carrito",
  },
  {
    image: P3,
    text: "Núcleo",
    subText: "Malbec (x6)",
    price: "12.000",
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
              fontSize={{ base: "44px", md: "50px", lg: "70px", xl: "100px" }}
              fontWeight={400}
              lineHeight={{ base: "44px", md: "40%", xl: "117%" }}
              mt={10}
            >
              Nuestros Vinos
            </Heading>
            <Text
              as="h2"
              fontSize={{ base: "18px", lg: "32px" }}
              fontWeight={{ base: 600, md: 400 }}
              lineHeight="48px"
            ></Text>
          </Stack>

          <Divider borderColor="bgDark" />

          <Flex
            direction="column"
            gap={8}
            marginTop={{ base: "10px", lg: "45px" }}
            marginBottom={{ base: "10px", lg: "30px" }}>
            <Box display={{ base: "none", sm: "block" }}>
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={{ base: 5, lg: 14 }}
              >
                {wineCardData.map(
                  ({ image, text, subText, price, btnText }, i) => (
                    <CustomWineCard
                      image={image}
                      key={i}
                      onAddToCart={() =>  addToCart(image, text, price)}
                      text={text}
                      subText={subText}
                      price={price}
                      btnText={btnText}
                      style={{ color: "black" }}
                    />
                  )
                )}
              </SimpleGrid>
            </Box>
          </Flex>
          <Flex
            direction="column"
            gap={8}
            marginTop={{ base: "10px", lg: "45px" }}
            marginBottom={{ base: "10px", lg: "30px" }}>
            <Box display={{ base: "none", sm: "block" }}>
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={{ base: 5, lg: 14 }}
              >
                {wineCardData2.map(
                  ({ image, text, subText, price, btnText }, i) => (
                    <CustomWineCard
                      image={image}
                      key={i}
                      onAddToCart={() => addToCart(image, text, price)}
                      text={text}
                      subText={subText}
                      price={price}
                      btnText={btnText}
                      style={{ color: "black" }}
                    />
                  )
                )}
              </SimpleGrid>
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Box display={{ base: "block", sm: "none" }} pb={10} color="bgDark">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          grabCursor={true}
          loop={true} // Add this line for looping
          autoplay={{
            delay: 10000, //sliding duration
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
            waitForTransition: true,
          }} // Add this line for autoplay
        >
          {wineCardData2.map(({ image, text, subText, price, btnText }, i) => (
            <SwiperSlide key={i}>
              <CustomWineCard
                image={image}
                text={text}
                subText={subText}
                price={price}
                btnText={btnText}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Footer />
    </Box>
  );
};
export default VineContent;

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
  Icon,
  IconButton,
  Image,
  Input,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import axios from 'axios';
import { useContext, useState } from "react";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { RiShoppingCartLine } from "react-icons/ri";

import { CartContext } from "../../App";

const StickyCart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { cartState, setCartState } = useContext(CartContext);

  const updateQuantity = (action, txt) => {
    if (action === "increase") {
      let newArray = cartState.map((item) => {
        return item.text === txt
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
      setCartState(newArray);
    } else if (action === "decrease") {
      console.log(cartState);
      let newArray = cartState.map((item) => {
        if (item.text === txt) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      console.log(newArray);

      newArray = newArray.filter((item) => item.quantity > 0);

      setCartState(newArray);
    }
  };
  const getTotalAmount = () => {
    return cartState.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/submit-carritoCompras', cartState);
      console.log("acá va el cart state del sticky cart: ----->");
      console.log(cartState);
      console.log(response.data);
    } catch (error) {
      console.error('Error al enviar el cartState del sticky cart:', error);
    }
  }

  return (
    <Box>
      <Box
        top="50%"
        position="fixed"
        right={0}
        transform="translate(0, -50%)"
        w="64px"
        h="78px"
        bg="#400022"
        zIndex={isOpen ? 999 : 10000}
        p={5}
        borderTopLeftRadius="12px"
        borderBottomLeftRadius="12px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        onClick={onOpen}
      >
        <Flex direction="column" align="center">
          <Icon
            as={RiShoppingCartLine}
            w="33px"
            h="33px"
            _hover={{ cursor: "pointer" }}
          />
          <Text>{cartState.length}</Text>
        </Flex>
      </Box>
      <Box zIndex={130000}>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent bg={"rgba(255, 255, 255, 0.9)"} color="bgDark">
            <DrawerCloseButton
              width="50px"
              height="47.31"
              sx={{
                _focus: {
                  boxShadow: "none",
                },
              }}
            />
            <br />
            <DrawerHeader
              sx={{
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: 24,
              }}
              mt="5px"
            >
              Carrito
            </DrawerHeader>

            <DrawerBody
              mt="21px"
              userSelect={"none"}
              sx={{
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              <Stack spacing="24px">
                {cartState.map((item, index) => (
                  <Stack spacing="24px" key={index}>
                    <Stack direction="row" mb="13px">
                      <Stack direction="row" fontWeight={600} fontSize="17px">
                        <Image
                          src={item.image ? item.image : ""}
                          width="39px"
                          height="95px"
                          objectFit="cover"
                        />
                        <Flex direction="column" gap={1}>
                          <Text w="70%">{item.text}</Text>
                          <Flex gap={2}>
                            <Text
                              textDecoration="underline"
                              userSelect={"none"}
                              width="30px"
                            >
                              {item.quantity}
                            </Text>
                            <Icon
                              as={BsArrowUpCircle}
                              onClick={() =>
                                updateQuantity("increase", item.text)
                              }
                              width="26px"
                              height="26px"
                              _hover={{ cursor: "pointer" }}
                            />
                            <Icon
                              as={BsArrowDownCircle}
                              onClick={() =>
                                updateQuantity("decrease", item.text)
                              }
                              width="26px"
                              height="26px"
                              _hover={{ cursor: "pointer" }}
                            />
                          </Flex>
                        </Flex>
                      </Stack>
                      <Text>${item.price * item.quantity}</Text>
                    </Stack>
                    <Divider bg="bgDark" />
                  </Stack>
                ))}
              </Stack>
            </DrawerBody>

            <DrawerFooter>
              <Stack direction="column" gap={3} w="100%">
                <Flex justify="space-between" fontWeight={600} fontSize="17px">
                  <Text>Subtotal</Text>
                  <Text>${getTotalAmount()}</Text>
                </Flex>
                <Input
                  variant="flushed"
                  borderBottomColor="bgDark"
                  _placeholder={{
                    fontWeight: 300,
                    fontSize: "15px",
                    color: "bgDark",
                  }}
                  placeholder="Nota sobre el pedido                                     "
                />
                <Button
                  fontSize="15px"
                  border=" 1px solid #4F4F4F"
                  borderRadius="43px"
                  background="rgba(0, 0, 0, 0.5)"
                  fontWeight={400}
                  width="100%"
                  color="#ffff"
                  height="55px"
                  onClick={handleSubmit}
                >
                  Comprar
                </Button>
              </Stack>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
};
export default StickyCart;

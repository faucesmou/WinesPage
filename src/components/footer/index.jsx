import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Logo from "../../assets/imgs/logo.png";
import DefaultIcons from "../social-icons";
import React, { useState } from 'react';
import axios from 'axios';


const Footer = ({ position = "static" }) => {

  const [formData3, setFormData3] = useState({});
  
  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://100.20.135.33/api/submit-emailfooter', formData3);
      console.log("acá va el email del footer: ----->");
      console.log(formData3);
      console.log(response.data);
    } catch (error) {
      console.error('Error al enviar el email del Footer:', error);
    }
  }
  return (
    <Box
      bg="rgba(30, 30, 30, 0.7)"
      backdropFilter="blur(10px)"
      width="100%"
      position={position}
      sx={position === "absolute" && { bottom: 0, left: 0 }}
      p={8}
    >
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        mx={{ base: 3, md: 10 }}
        alignItems="center"
        spacing={5}
      >
        <Flex direction="column" fontSize="17px" color="bgLight" gap={3}>
          <Text as="h4" fontWeight={600} fontSize="20px">
            ¡Sigamos en contacto!
          </Text>
          <InputGroup fontWeight={300}>
            <Input
              variant="flushed"
              placeholder="Email"
              borderBottom="2px solid"
              borderBottomColor="bgLight"
              _placeholder={{ fontWeight: 300, color: "bgLight" }}
              value={formData3.email}
              onChange={(event) =>
                setFormData3((prevData) => ({
                  ...prevData,
                  email: event.target.value, // Actualiza el campo "nombre" en formData3
                }))
              }
            />
            <InputRightElement>
              <Text as="h5"
              onClick={handleSubmit}>Enviar</Text>
            </InputRightElement>
          </InputGroup>
        </Flex>
        <Stack direction="column" align="flex-end">
          <Image src={Logo} />
        </Stack>
        <Stack
          direction="column"
          gap={2}
          fontSize="17px"
          color="bgLight"
          lineHeight="26px"
          align="center"
        >
          <Text as="span">Nosotros</Text>
          <Text as="span">Enoteca</Text>
          <Text as="span">Nuestros Vinos</Text>
          <Text as="span">Contacto</Text>
        </Stack>
        <Stack align="center">
          <Stack direction="column" gap={2}>
            <Text as="h4" align={{ base: "center", md: "start" }}>
              Redes sociales
            </Text>
            <DefaultIcons />
          </Stack>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};
export default Footer;

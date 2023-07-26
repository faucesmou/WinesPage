const VineContent = () => {
    // ... (código existente)
  
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
          // Ajustamos los márgenes laterales para separar los contenedores
          mx={{ base: "20px", md: "50px", lg: "100px" }}
        >
          <Flex
            direction="column"
            gap={4}
            width={{ base: "100%", md: "50%", xl: "30%" }} // Ancho del contenedor para dispositivos pequeños, medianos y grandes respectivamente
            align="center"
          >
            {/* ... Código existente */}
          </Flex>
  
          <Flex
            direction="column"
            gap={4}
            width={{ base: "100%", md: "50%", xl: "30%" }} // Ancho del contenedor para dispositivos pequeños, medianos y grandes respectivamente
            align="center"
          >
            {/* ... Código existente */}
          </Flex>
        </Flex>
  
        <Footer />
      </Box>
    );
  };
  
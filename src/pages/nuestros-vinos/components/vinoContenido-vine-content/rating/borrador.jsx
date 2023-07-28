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
      {/* Contenedor de Malbec */}
      <Flex
        direction="column"
        gap={4}
        width={{ base: "100%", md: "50%", xl: "40%" }} // Ancho del contenedor para dispositivos pequeños, medianos y grandes respectivamente
        align="center"
        // Ajustamos los márgenes para separar el contenedor de "Malbec" del centro
        marginRight={{ base: "10px", md: "20px", lg: "15px" }}
        mt={10} // Espacio arriba del título
      >
        <Heading
          fontStyle="italic"
          color="black"
          fontSize={{ base: "30px", md: "40px", lg: "50px", xl: "60px" }}
          fontWeight={400}
          lineHeight={{ base: "30px", md: "40px", lg: "50px", xl: "60px" }}
        >
          Malbec
        </Heading>
        <Divider borderColor="bgDark" w="100%" my={2} />
        {/* ... Código existente */}
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
              {singleVineyard.map(({ image, text, subText, price, btnText }, i) => (
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

      {/* Contenedor de Chardonnay */}
      <Flex
        direction="column"
        gap={4}
        width={{ base: "100%", md: "50%", xl: "40%" }} // Ancho del contenedor para dispositivos pequeños, medianos y grandes respectivamente
        align="center"
        // Ajustamos los márgenes para separar el contenedor de "Chardonnay" del centro
        marginLeft={{ base: "10px", md: "20px", lg: "15px" }}
        mt={10} // Espacio arriba del título
      >
        <Heading
          fontStyle="italic"
          color="black"
          fontSize={{ base: "30px", md: "40px", lg: "50px", xl: "60px" }}
          fontWeight={400}
          lineHeight={{ base: "30px", md: "40px", lg: "50px", xl: "60px" }}
        >
          Chardonnay
        </Heading>
        <Divider borderColor="bgDark" w="100%" my={2} />
        {/* ... Código existente */}
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
              {nucleoData.map(({ image, text, subText, price, btnText }, i) => (
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
    </Flex>
    <Footer />
  </Box>
);

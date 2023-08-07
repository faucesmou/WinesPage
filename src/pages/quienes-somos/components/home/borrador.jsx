<SwiperSlide>
                  <Flex
                    direction="row" // Alinea los elementos en una fila horizontal
                    justifyContent="flex-start" // Alinea los elementos a la izquierda
                    align="center"
                    h={{ base: "60vh" }}
                    position="relative"
                  >
                    <Flex
                      direction="column" // Alinea el contenido en columnas
                      justifyContent="center" // Alinea el contenido al centro verticalmente
                      align="center"
                      w="50%" // Ocupa la mitad del ancho del slide
                    >
                      <Image
                        src={nuestraHistoria1}
                        alt="Imagen 1"
                        width="80%"
                      />
                      <Text fontSize="15px" width="60%" textAlign="center">
                        Lanzó al mercado Finca Propia: el primer emprendimiento
                        argentino que permitió al consumidor de vino comprar su
                        propia parcela de viñedo y producir su propio vino
                        liderado por Antonio
                      </Text>
                    </Flex>
                    <Flex
                      direction="column" // Alinea el contenido en columnas
                      justifyContent="center" // Alinea el contenido al centro verticalmente
                      align="center"
                      w="50%" // Ocupa la mitad del ancho del slide
                    >
                      <Image
                        src={nuestraHistoria1}
                        alt="Imagen 1"
                        width="30%"
                      />
                      <Text>epigrafe del segundo slide.</Text>
                    </Flex>
                    <Flex
                      direction="column"
                      justifyContent="center"
                      align="center"
                      w="50%"
                    >
                      {/* <Image src={Imagen2} alt="Imagen 2" /> */}
                      <Text>epigrafe del tercer slide.</Text>
                    </Flex>
                  </Flex>
                </SwiperSlide>

                {/* Tercer Slide */}
                <SwiperSlide>
                  <Flex justify="center" align="center" h={{ base: "60vh" }}>
                    {/* <Image src={} alt="" /> */}
                    <Text>Epígrafe del segundo slide</Text>
                  </Flex>
                </SwiperSlide>

                   {/* <Flex
                      direction="column" // Alinea el contenido en columnas
                      justifyContent="center" // Alinea el contenido al centro verticalmente
                      align="center"
                      w="50%" // Ocupa la mitad del ancho del slide
                    >
                      <Image
                        src={nuestraHistoria1}
                        alt="Imagen 1"
                        width="70%"
                      />
                      <Text
                        fontSize="15px"
                        width="60%"
                        textAlign="center"
                        mt={1}
                      >
                        1968 Antonio Más viajó a la Patagonia y transformó el
                        proceso de vinificación en los años siguientes. Puso los
                        cimientos del actual terroir patagónico, ya que comenzó
                        a estudiar las variedades de vino y vinificar..
                      </Text>
                    </Flex> */}
                    {/* <Flex
                      direction="column" // Alinea el contenido en columnas
                      justifyContent="center" // Alinea el contenido al centro verticalmente
                      align="center"
                      w="45%" // Ocupa la mitad del ancho del slide
                    >
                      <Image
                        src={nuestraHistoria1}
                        alt="Imagen 1"
                        width="80%"
                      />
                      <Text
                        fontSize="15px"
                        width="90%"
                        textAlign="center"
                        mt={1}
                      >
                        1992 Fundó la primera bodega boutique argentina: Finca
                        La Anita, donde se inspiró en el concepto de Château
                        francés: viñedos de gran pureza genética y variedad,
                        identificando clones de cada variedad, y cultivando uvas
                        y ..
                      </Text>
                    </Flex> */}

                    // segmento del original:
                             {/* <Box mt="30px" h={{ base: "60vh" }} overflow="hidden">
            <Swiper
              spaceBetween={10}
              modules={[Navigation]}
              grabCursor={true}
              slidesPerView={1}
              navigation
            >
              <SwiperSlide style={{ zIndex: 2 }}>
                {({ isActive }) => (
                  <Flex
                    w="100%"
                    position="relative"
                    gap={6}
                    pl={{ base: "20px", md: "15px", lg: "20px", xl: "45px" }}
                  >
                    {isActive && prevAnimation()}
                    <Stack
                      direction="column"
                      gap={10}
                      justify="center"
                      align="center"
                      zIndex={999}
                    >
                      <Heading
                        fontSize={{
                          base: "60px",
                          sm: "70px",
                          md: "100px",
                          lg: "100px",
                          xl: "100px",
                        }}
                        fontStyle="italic"
                        color="bgLight"
                        fontWeight="400"
                        lineHeight="117%"
                        position="relative"
                        height="100%"
                      >
                        <Box fontStyle="italic">Historias</Box>
                        <Box textAlign="end" fontStyle="normal" className="mas">
                          más{" "}
                          <Box as="span" fontStyle="italic">
                            allá{" "}
                          </Box>
                        </Box>
                        <Box as="span" className="vino">
                          del VINO
                        </Box>
                      </Heading>
                    </Stack>
                    <Box width="100%">
                      <Image
                        className="titulo-video"
                        position="absolute"
                        right={0}
                        alignSelf="flex-end"
                        height={{ base: "50vh", md: "60vh" }}
                        objectFit="contain"
                        src={Titulo}
                      />
                    </Box>
                  </Flex>
                )}
              </SwiperSlide>
              <SwiperSlide style={{ zIndex: 0 }}>
                {({ isActive }) => (
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    {isActive && bringBack()}

                    <HomePlayer img={Poster1} {...playerData[0]} />
                  </Box>
                )}
              </SwiperSlide>
              <SwiperSlide>
                <Box>
                  <HomePlayer img={Poster2} {...playerData[1]} />
                </Box>
              </SwiperSlide>
            </Swiper>
          </Box> */}

          //ultomo slide: 
                  {/* <SwiperSlide>
                  <Flex
                    direction="row" // Alinea los elementos en una fila horizontal
                    justifyContent="flex-start" // Alinea los elementos a la izquierda
                    align="center"
                    h={{ base: "60vh" }}
                    position="relative"
                  >
                    <Box position="absolute" zIndex={20} left="150px" right="0px" top="20px">
                      <Image
                        src={nuestraHistoria1}
                        alt="Imagen 1"
                        width="30%"
                        objectFit="cover"
                      />
                    </Box>
                    </Flex>
                    </SwiperSlide> */}  
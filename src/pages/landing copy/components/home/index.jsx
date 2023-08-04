import {
  Box,
  SimpleGrid,
  Image,
  Flex,
  Stack,
  Text,
  Heading,
  Icon,
} from "@chakra-ui/react";
import GrandPa from "../../../../assets/imgs/grandpa.png";
import GrandPa2 from "../../../../assets/imgs/grandpa2.png";
import GrandPa3 from "../../../../assets/imgs/grandpa3.png";
import nuestraHistoria1 from "../../../../assets/imgs/historias/nuestraHistoria1.jpg";
import Titulo from "../../../../assets/imgs/titulo-video.png";
import Poster1 from "../../../../assets/imgs/slide-cover.png";
import Poster2 from "../../../../assets/imgs/page1-banner.png";

// swipper css for effects fade to be precise
import "swiper/css/effect-fade";
import "swiper/css/navigation"; // import required modules\
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Autoplay, Navigation } from "swiper";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import HomePlayer from "./components/player";

import { useState } from "react";
SwiperCore.use([Navigation]);

const playerData = [
  {
    id: 12,
    title: "custom title1",
  },
  {
    id: 12,
    title: "custom title1",
    src: "https://www.youtube.com/watch?v=uLpoPVLpG9E",
  },
];

const Home = () => {
  const keepTrackOfInitialRender = useRef(true);
  const keepTrack = useRef(0);
  const [innerwidth, setInnerWidth] = useState(0);

  useLayoutEffect(() => {
    function updateSize() {
      setInnerWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (keepTrackOfInitialRender.current) {
      gsap
        .timeline()

        .add(animateHero());

      keepTrackOfInitialRender.current = false;
    }
  }, []);

  function animateHero() {
    let right = innerwidth < 480 ? "-300px" : "-600px";
    return (
      gsap
        .timeline()
        .to(".titulo-video", {
          right: right,
          duration: 1.5,
          display: "none",
          delay: 1,
          ease: "Sine.easeIn",
        })
        // .set(".next-image", {
        // 	display: "none",
        // });
        .to(
          ".next-image",
          {
            right: "+=400px",
            duration: 1,
            ease: "Sine.easeIn",
          },
          "-=1"
        )
    );
  }
  function prevAnimation() {
    if (keepTrack.current === 1) {
      gsap.killTweensOf(".next-image");
      gsap.to(".next-image", {
        right: "+=400px",
        duration: 1,
        ease: "Sine.easeIn",
      });
    }
    keepTrack.current = 0;
  }

  function bringBack() {
    if (keepTrack.current === 0) {
      gsap.killTweensOf(".next-image");
      gsap.to(".next-image", {
        right: "-=400px",
        duration: 1,
        ease: "Sine.easeIn",
      });
    }
    keepTrack.current = 1;
  }
  return (
    <Box bg="bgDark">
      <SimpleGrid columns={{ base: 1, lg: 1 }} gap={5} pb={{ base: 20, md: 0 }}>
        <Box
          mb={{ base: 130, md: 130 }}
          height={{ base: "350px", md: "550px" }}
        >
          <Flex
            direction="column"
            gap={8}
            bg="black"
            pt={19}
            pb={19}
            color="black"
            alignItems="center"
            align="center"
          >
            <Stack direction="column" align="center" gap={5}>
              <Heading
                fontStyle="italic"
                fontWeight={400}
                color="white"
                fontSize={{ base: "44px", md: "50px", lg: "70px", xl: "70px" }}
                lineHeight="1.3"
                width={{ base: "100%", lg: "100%" }}
                mx={{ base: "10px", lg: 0 }}
                textAlign="center"
                mt={7}
                mb={7}
                paddingX={{ base: "13px", lg: "0px" }}
                /* marginTop={{ base: "10px", lg: "-1px" }}  */
              >
                Nuestra Historia
              </Heading>
            </Stack>
          </Flex>
          <SimpleGrid columns={1} spacing={10}>
            <Box mt="30px" h={{ base: "100vh" }} overflow="hidden">
              <Swiper
                spaceBetween={10}
                modules={[Navigation]}
                grabCursor={true}
                slidesPerView={1}
                /*   navigation */ //estas son las flechas
              >
                {/* Slide Combinado AGREGARLE LOS BREAKING POINT PARA EL RESPONSIVE*/}
                <SwiperSlide>
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
                    <Box position="absolute" zIndex={20} left="540px" right="0px" top="50px">
                      <Image
                        src={nuestraHistoria1}
                        alt="Imagen 2"
                        width="50%"
                        objectFit="cover"
                      />
                    </Box>
                    <Box position="absolute"
                     zIndex={30} left="980px" 
                     right="0"  top="100px" 
                     width="70%"
                     overflow="hidden">
                      <Image
                        src={nuestraHistoria1}
                        alt="Imagen 3"
                        width="50%"
                        objectFit="cover"
                      />
                    </Box>
                  </Flex>
                </SwiperSlide>
                <SwiperSlide>
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
                    <Box position="absolute" zIndex={20} left="540px" right="0px" top="50px">
                      <Image
                        src={nuestraHistoria1}
                        alt="Imagen 2"
                        width="50%"
                        objectFit="cover"
                      />
                    </Box>
                    <Box position="absolute"
                     zIndex={30} left="980px" 
                     right="0"  top="100px" 
                     width="70%"
                     overflow="hidden">
                      <Image
                        src={nuestraHistoria1}
                        alt="Imagen 3"
                        width="50%"
                        objectFit="cover"
                      />
                    </Box>
                  </Flex>
                </SwiperSlide>      
              </Swiper>
            </Box>
          </SimpleGrid>
        </Box>
      </SimpleGrid>
    </Box>
  );
};
export default Home;

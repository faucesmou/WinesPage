import {
  Box,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { gsap } from "gsap";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { motion } from "framer-motion";

import S1 from "../../../../assets/imgs/s1.png";
import S2 from "../../../../assets/imgs/s2.png";
import S3 from "../../../../assets/imgs/s3.png";
import N1 from "../../../../assets/imgs/n1.png";
import N2 from "../../../../assets/imgs/n2.png";
import N3 from "../../../../assets/imgs/n3.png";
import N4 from "../../../../assets/imgs/n4.png";
import { useRef } from "react";

// mixBlendMode="luminosity"
const style = {
  fontStyle: "italic",
  fontWeight: 400,
  lineHeight: "117%",
  letterSpacing: "0.01em",
  color: "#F2EEE3",
};

const plusIconStyles = {
  boxSize: 12,
  color: "#fff",
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const Wines = () => {
  const s1Icon = useRef();
  const s2Icon = useRef();
  const s3Icon = useRef();
  const n1Icon = useRef();
  const n2Icon = useRef();
  const n3Icon = useRef();
  const n4Icon = useRef();

  const animate = () => {
    console.log("cool he is dragging");
  };

  const showIcon = (icon, action = "enter") => {
    if (action === "enter") icon.current.style.display = "block";
    if (action === "leave") icon.current.style.display = "none";
  };

  const handleMouseEnter = (e, item) => {
    e.target.style.mixBlendMode = "normal";
    switch (item) {
      case "s1":
        showIcon(s1Icon);
        break;
      case "s2":
        showIcon(s2Icon);
        break;
      case "s3":
        showIcon(s3Icon);
        break;
      case "n1":
        showIcon(n1Icon);
        break;
      case "n2":
        showIcon(n2Icon);
        break;
      case "n3":
        showIcon(n3Icon);
        break;
      case "n4":
        showIcon(n4Icon);
        break;
    }
  };
  const handleMouseLeave = (e, item) => {
    e.target.style.mixBlendMode = "luminosity";
    switch (item) {
      case "s1":
        showIcon(s1Icon, "leave");
        break;
      case "s2":
        showIcon(s2Icon, "leave");
        break;
      case "s3":
        showIcon(s3Icon, "leave");
        break;
      case "n1":
        showIcon(n1Icon, "leave");
        break;
      case "n2":
        showIcon(n2Icon, "leave");
        break;
      case "n3":
        showIcon(n3Icon, "leave");
        break;
      case "n4":
        showIcon(n4Icon, "leave");
        break;
    }
  };

  return (
    <Box bg="#4F4F4F" pb="50px" pl="90px">
      <Box pt={5} pb="29px">
        <Text
          as="h4"
          width="fit-content"
          borderBottom={"2px solid"}
          borderBottomColor="#ffff"
          borderBottomWidth="1px"
          padding={1}
          fontSize="17px"
          fontWeight={600}
          letterSpacing="0.01em"
          lineHeight="26px"
        >
          Nuestros vinos
        </Text>
      </Box>
      <Box position="relative">
        <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} gap={2}>
          <Flex direction={{ base: "column", lg: "row" }}>
            <Heading
              zIndex={2}
              {...style}
              fontSize={{ base: "60px", md: "50px", lg: "70px", xl: "100px" }}
            >
              Single <br /> Vineyard
            </Heading>
            <Flex direction="column" gap={3}>
              <HStack align="start">
                <Box
                  position="relative"
                  _hover={{ transform: "scale(1.05)" }}
                  onMouseOver={(e) => handleMouseEnter(e, "s1")}
                  onMouseLeave={(e) => handleMouseLeave(e, "s1")}
                  transition="all .1s ease-in"
                >
                  <Image mixBlendMode="luminosity" src={S1} />
                  <Box ref={s1Icon} transition="all .1s ease-in">
                    <Icon as={AiOutlinePlusCircle} {...plusIconStyles} />
                  </Box>
                </Box>
                <Box
                  position="relative"
                  _hover={{ transform: "scale(1.05)" }}
                  onMouseOver={(e) => handleMouseEnter(e, "s2")}
                  onMouseLeave={(e) => handleMouseLeave(e, "s2")}
                  transition="all .1s ease-in"
                >
                  <Image mixBlendMode="luminosity" src={S2} />
                  <Box ref={s2Icon} transition="all .1s ease-in">
                    <Icon as={AiOutlinePlusCircle} {...plusIconStyles} />
                  </Box>
                </Box>
                <Box
                  position="relative"
                  _hover={{ transform: "scale(1.05)" }}
                  onMouseOver={(e) => handleMouseEnter(e, "s3")}
                  onMouseLeave={(e) => handleMouseLeave(e, "s3")}
                  transition="all .1s ease-in"
                >
                  <Image mixBlendMode="luminosity" src={S3} />
                  <Box ref={s3Icon} transition="all .1s ease-in">
                    <Icon as={AiOutlinePlusCircle} {...plusIconStyles} />
                  </Box>
                </Box>
              </HStack>
              <Heading
                fontSize={{
                  base: "60px",
                  md: "50px",
                  lg: "70px",
                  xl: "100px",
                }}
                alignSelf="flex-end"
                {...style}
                opacity={0.5}
              >
                Núcleo
              </Heading>
            </Flex>
          </Flex>
          <Flex direction="column" align="flex-end" mx={5}>
            <Heading
              fontSize={{ base: "60px", md: "50px", lg: "70px", xl: "100px" }}
              {...style}
              opacity={0.5}
            >
              Almarada
            </Heading>
            <HStack align="start" gap={0}>
              <Box
                position="relative"
                _hover={{ transform: "scale(1.05)" }}
                onMouseOver={(e) => handleMouseEnter(e, "n1")}
                onMouseLeave={(e) => handleMouseLeave(e, "n1")}
                transition="all .1s ease-in"
              >
                <Image mixBlendMode="luminosity" src={N1} />
                <Box ref={n1Icon} transition="all .1s ease-in">
                  <Icon as={AiOutlinePlusCircle} {...plusIconStyles} />
                </Box>
              </Box>
              <Box
                position="relative"
                _hover={{ transform: "scale(1.05)" }}
                onMouseOver={(e) => handleMouseEnter(e, "n2")}
                onMouseLeave={(e) => handleMouseLeave(e, "n2")}
                transition="all .1s ease-in"
              >
                <Image mixBlendMode="luminosity" src={N2} />
                <Box ref={n2Icon} transition="all .1s ease-in">
                  <Icon as={AiOutlinePlusCircle} {...plusIconStyles} />
                </Box>
              </Box>
              <Box
                position="relative"
                _hover={{ transform: "scale(1.05)" }}
                onMouseOver={(e) => handleMouseEnter(e, "n3")}
                onMouseLeave={(e) => handleMouseLeave(e, "n3")}
                transition="all .1s ease-in"
              >
                <Image mixBlendMode="luminosity" src={N3} />
                <Box ref={n3Icon} transition="all .1s ease-in">
                  <Icon as={AiOutlinePlusCircle} {...plusIconStyles} />
                </Box>
              </Box>
              <Box
                position="relative"
                _hover={{ transform: "scale(1.05)" }}
                onMouseOver={(e) => handleMouseEnter(e, "n4")}
                onMouseLeave={(e) => handleMouseLeave(e, "n4")}
                transition="all .1s ease-in"
              >
                <Image mixBlendMode="luminosity" src={N4} />
                <Box ref={n4Icon} transition="all .1s ease-in">
                  <Icon as={AiOutlinePlusCircle} {...plusIconStyles} />
                </Box>
              </Box>
            </HStack>
          </Flex>
        </SimpleGrid>
      </Box>
    </Box>
  );
};
export default Wines;

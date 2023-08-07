import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Input,
  Textarea,
  Button,
  AspectRatio,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <Flex
      direction="column"
      gap={8}
      bg="bgLight"
      pt={19}
      pb={19}
      color="black"
      alignItems="center"
      align="center"
     /*  minHeight="calc(100vh - 70rem)"  */
      /* mb={6}
      mt={6} */
      /* py={{ base: 10, lg: 19 }} */
    >
      <Stack direction="column" align="center" gap={5} >
        <Heading
          fontStyle="italic"
          fontWeight={400}
          fontSize={{ base: "22px", lg: "30px" }}
          lineHeight="1.3"
          width={{ base: "100%", lg: "60%" }}
          mx={{ base: "10px", lg: 0 }}
          textAlign="center"
          mt={7}
          paddingX={{ base: "13px", lg: "0px" }}
          /* marginTop={{ base: "10px", lg: "-1px" }}  */
        >
          ‘’El entorno es tan importante como la altura o el suelo a la hora de
          definir el concepto de terroir’’
        </Heading>
        <Text
          as="h3"
          fontWeight={600}
          fontFamily="Poppins"
          fontSize="20px"
          width="fit-content"
          borderTop={"2px solid"}
          borderTopColor="bgBlack"
          borderTopWidth="1px"
          padding={1}
          letterSpacing="0.01em"
          lineHeight={{ base: "1rem", lg: "2.5rem" }}
          mb={7}
        >
          Antonio Más
        </Text>
      </Stack>
    </Flex>
  );
};
export default Contact;

import { Icon, Progress, Stack, Text } from "@chakra-ui/react";
import { AiOutlineStar } from "react-icons/ai";

const Rating = ({ text, value }) => {
  return (
    <Stack direction="row" align="center" gap={1}>
      <Icon as={AiOutlineStar} boxSize={6} />
      <Text as="h4" flex={{ base: 0, lg: 1 }} fontSize="16px" fontWeight={700}>
        {text}
      </Text>

      <Progress
        height="1.5px"
        flex={{ base: 1, lg: "inherit" }}
        width="100px"
        colorScheme="bgDark"
        bg="white"
        value={value}
      />
      <Text as="h4">xx</Text>
    </Stack>
  );
};
export default Rating;

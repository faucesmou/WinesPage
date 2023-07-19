import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import CustomButton from "../../../../components/button";
import DefaultIcons from "../../../../components/social-icons";

const ShopSocial = () => {
	return (
		<Box pt={4} bg="bgDark" pb="50px">
			<Flex direction="column" gap={4} mx={10}>
				<CustomButton text="Ver tienda online" />
				<Stack direction="column" align="center" mt={10}>
					<DefaultIcons />
					<Text color="bgLight">@antoniomaswines</Text>
				</Stack>
			</Flex>
		</Box>
	);
};
export default ShopSocial;

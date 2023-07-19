import {
	Avatar,
	Card,
	CardFooter,
	CardHeader,
	Flex,
	HStack,
	Icon,
	Image,
	Text,
} from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";

const SimpleCard = ({ img }) => {
	return (
		<Card
			borderRadius="xl"
			bg="bgLight"
			border="1px solid rgba(255,255,255,.5)"
			color="bgDark"
		>
			<CardHeader p={0} m={0}>
				<Image borderRadius="xl" src={img} objectFit="cover" width="100%" />
			</CardHeader>
			<CardFooter display="flex" flexDirection="column" gap={2}>
				<Text fontSize="xs">Lorem ipsum dolor sit amet, ocnsecterur...</Text>
				<HStack justify="space-between">
					<Flex align="center" gap={2}>
						<Avatar
							size="sm"
							name="Test User Test"
							src="https://bit.ly/broken-link"
							bg="bgDark"
						/>
						<Text>@....</Text>
					</Flex>
					<Icon as={BsInstagram} boxSize={6} />
				</HStack>
			</CardFooter>
		</Card>
	);
};
export default SimpleCard;

import { Box, Button } from "@chakra-ui/react";

const CustomButton = ({ text }) => {
	return (
		<Box display={{ base: "flex", md: "block" }} justifyContent="center">
			<Button
				border="1px solid rgba(255,255,255,.5)"
				bg="transparent"
				w={{ base: "fit-content", md: "100%" }}
				py={{ base: 7, md: 8 }}
				borderRadius="50px"
				color="#ffff"
				_hover={{ bg: "#3333" }}
				fontWeight={400}
			>
				{text}
			</Button>
		</Box>
	);
};

export const ActionButton = ({
	text,
	bg = "rgba(255, 255, 255, 0.5)",
	width = "fit-content",
}) => {
	return (
		<Box>
			<Button
				bg={bg}
				border="1px solid"
				borderColor="rgba(0, 0, 0, 1)"
				borderRadius="29px"
				p="26px"
				fontSize="14px"
				fontWeight={400}
				lineHeight="16px"
				width={width}
				_hover={{ backgroundColor: "#fff", transform: "scale(1.1)" }}
			>
				{text}
			</Button>
		</Box>
	);
};

export default CustomButton;

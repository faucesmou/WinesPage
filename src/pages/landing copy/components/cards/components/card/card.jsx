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
		borderRadius="50%"
      bg="black"
      border="none" // Eliminamos el borde
      color="bgDark"
      width="100%"
      p={3}	
	  marginTop="3rem" 
		>
			<CardHeader p={0} m={0} bg="black">
				<Image 
				    borderRadius="40%"
					src={img}
					objectFit="cover"
					width="80%"
					height="55%" 
					/> // Ajustamos la altura al 100% para que tenga el mismo tamaño que el CardHeader
			</CardHeader>
			
		</Card>
	);
};
export default SimpleCard;

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
      p={0}	
	  marginTop="2rem" 
	  mb={6} 
		>
			<CardHeader p={0} m={0} bg="black" mb={0} display="flex" justifyContent="center" alignItems="center">
				<Image 
				    borderRadius="42%"
					src={img}
					objectFit="cover"
					width="80%"
					height="80%" 
					mb={0} 
					/> 
			</CardHeader>
			
		</Card>
	);
};
export default SimpleCard;

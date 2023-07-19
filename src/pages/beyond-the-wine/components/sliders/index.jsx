// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import CustomSlide from "./components/slider";
import { Box, Heading } from "@chakra-ui/react";

const Sliders = () => {
	return (
		<Box bg="bgDark" px={{ base: 2, md: 10 }} py={5}>
			<Heading
				width="fit-content"
				borderBottom={"2px solid"}
				borderBottomColor="#ffff"
				borderBottomWidth="1px"
				padding={1}
				fontSize="17px"
				fontWeight={600}
				letterSpacing="0.01em"
				lineHeight="26px"
				mb={5}
			>
				Título de la temática
			</Heading>
			<Box mt={5} width="100%">
				<Swiper
					modules={[Autoplay]}
					spaceBetween={20}
					grabCursor={true}
					breakpoints={{
						576: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 3,
						},
					}}
					loop={true} // Add this line for looping
				>
					{[1, 2, 3, 4, 5, 6].map((slide, index) => (
						<SwiperSlide key={index}>
							<CustomSlide />
						</SwiperSlide>
					))}
				</Swiper>
			</Box>
		</Box>
	);
};
export default Sliders;

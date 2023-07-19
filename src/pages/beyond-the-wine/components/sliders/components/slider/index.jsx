import { Box } from "@chakra-ui/react";
import SliderCover from "../../../../../../assets/imgs/slide-cover.png";
import Player from "griffith";

const duration = 182;

const sources = {
	hd: {
		play_url: "https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4",
	},
	sd: {
		play_url: "https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_sd.mp4",
	},
};

const props = {
	id: "zhihu2018",
	title: "zhihu2018",
	hiddenTime: true,
	initialObjectFit: "fill",
	cover: SliderCover,
	duration,
	sources,
	src: "https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_sd.mp4",
};
const CustomSlide = () => {
	return (
		<Box width="100%">
			<Player {...props} />
		</Box>
	);
};
export default CustomSlide;

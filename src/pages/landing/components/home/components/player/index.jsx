import { Box } from "@chakra-ui/react";

import Play from "../../../../../../assets/imgs/Play.png";

import "video-react/dist/video-react.css";
import { Player } from "video-react";
import { useRef } from "react";

const HomePlayer = ({
  id,
  img,
  title,
  src = "https://www.youtube.com/watch?v=qGgG6t7Re_0",
}) => {
  return (
    <Box
      width="100%"
      height="100%"
      style={{ position: "absolute" }}
      className="next-image"
    >
      <Player
        aspectRatio="auto"
        height={"100%"}
        width={"100%"}
        poster={img}
        playsInline
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      ></Player>
    </Box>
  );
};

export default HomePlayer;
{
  /* <ReactPlayer
        height="100%"
        controls
        width="100%"
        playIcon={<img src={Play} />}
        config={{
          youtube: {
            playerVars: {
              showinfo: 0,
              modestbranding: 1,
            },
          },
        }}
        url="https://www.youtube.com/watch?v=qGgG6t7Re_0"
      />*/
}

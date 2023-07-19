// import { Box } from "@chakra-ui/react";
// import Player from "griffith";

// const sources = {
//   hd: {
//     play_url: "https://www.youtube.com/watch?v=qGgG6t7Re_0",
//   },
//   sd: {
//     play_url: "https://www.youtube.com/watch?v=qGgG6t7Re_0",
//   },
// };

// const HomePlayer = ({
//   id,
//   title,
//   cover,
//   duration = 182,
//   src = "https://www.youtube.com/watch?v=qGgG6t7Re_0",
// }) => {
//   const props = {
//     id,
//     title,
//     hiddenTime: true,
//     initialObjectFit: "contain",
//     sources: sources,
//     duration: 182,
//     cover,
//     src: "https://www.youtube.com/watch?v=qGgG6t7Re_0",
//   };
//   return (
//     <Box width="100%" style={{ position: "absolute" }} className="next-image">
//       <Player {...props} />
//       <YouTubeIframe src={src} />
//     </Box>
//   );
// };

// export default HomePlayer;

// const YouTubeIframe = ({ src }) => {
//   const youtubeEmbedUrl = src.replace("watch?v=", "embed/");

//   return (
//     <iframe
//       title="YouTube Video"
//       width="100%"
//       height="100%"
//       src={youtubeEmbedUrl}
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//       allowFullScreen
//     ></iframe>
//   );
// };

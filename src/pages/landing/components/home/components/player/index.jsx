import { Box } from "@chakra-ui/react";
import Play from "../../../../../../assets/imgs/Play.png";
import "video-react/dist/video-react.css";
import { Player } from "video-react";
import { createContext, useContext, useReducer } from "react";

// Creamos el contexto
const HomePlayerContext = createContext();

// Definimos los tipos de acciones que se pueden realizar en el reproductor
const ActionTypes = {
  TOGGLE_PLAYING: "TOGGLE_PLAYING",
};

// Reducer para manejar las acciones
const homePlayerReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_PLAYING:
      return {
        ...state,
        isPlaying: !state.isPlaying,
      };
    default:
      return state;
  }
};

const HomePlayer = ({ id, img, title, src = "https://www.youtube.com/watch?v=qGgG6t7Re_0" }) => {
  // Definimos el estado inicial del reproductor
  const initialState = {
    isPlaying: false,
  };

  // Usamos useReducer para manejar el estado
  const [state, dispatch] = useReducer(homePlayerReducer, initialState);

  return (
    <Box
      width="100%"
      height="100%"
      style={{ position: "absolute" }}
      className="next-image"
    >
      <HomePlayerContext.Provider value={{ state, dispatch }}>
        <PlayerWrapper>
          <Player
            aspectRatio="auto"
            height={"100%"}
            width={"100%"}
            poster={img}
            playsInline
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
        </PlayerWrapper>
      </HomePlayerContext.Provider>
    </Box>
  );
};

// Nuevo componente funcional para envolver el componente Player y utilizar el nuevo Context API
const PlayerWrapper = ({ children }) => {
  // Aquí puedes realizar cualquier lógica adicional necesaria antes o después de renderizar el componente Player
  return children;
};

// Definimos una función personalizada para usar el contexto
export const useHomePlayerContext = () => useContext(HomePlayerContext);

export default HomePlayer;







/* import { Box } from "@chakra-ui/react";

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
{ */
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
/* } */

import { Avatar, Flex } from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";

const icons = [
  { name: "instagram", icon: <BsInstagram fontSize="1.5rem" color="black" /> },
  {
    name: "linkendIn",
    icon: <GrLinkedinOption fontSize="1.5rem" color="black" />,
  },
  { name: "twitter", icon: <BsTwitter fontSize="1.5rem" color="black" /> },
  { name: "youtube", icon: <AiFillYoutube fontSize="1.5rem" color="black" /> },
];

const SocialIcon = ({ icon }) => {
  return <Avatar bg="bgLight" icon={icon} />;
};

const DefaultIcons = () => {
  return (
    <Flex gap={2}>
      {icons.map((icon, i) => (
        <SocialIcon key={i} icon={icon.icon} color={icon.color} />
      ))}
    </Flex>
  );
};
export default DefaultIcons;

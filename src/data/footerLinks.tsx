import type { IconType } from "react-icons";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

type IconLink = {
  name: string;
  icon: React.ReactElement<IconType>;
};

export const icons: IconLink[] = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={20} />,
  },

  {
    name: "Twitter",
    icon: <FaTwitter size={20} />,
  },

  {
    name: "Facebook",
    icon: <FaFacebook size={20} />,
  },

  {
    name: "Instagram",
    icon: <FaInstagram size={20} />,
  },

  {
    name: "Github",
    icon: <FaGithub size={20}/>
  }
];

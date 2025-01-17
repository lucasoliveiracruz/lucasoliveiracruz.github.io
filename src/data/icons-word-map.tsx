import { FaAws, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import {
  SiDocker,
  SiExpo,
  SiFirebase,
  SiGit,
  SiGithubactions,
  SiJavascript,
  SiJest,
  SiLinux,
  SiMixpanel,
  SiMysql,
  SiPhp,
  SiPostgresql,
  SiSentry,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const techIcons: { [key: string]: React.ReactElement } = {
  React: <FaReact />,
  "Node.js": <FaNodeJs />,
  TypeScript: <SiTypescript />,
  JavaScript: <SiJavascript />,
  Python: <FaPython />,
  Firebase: <SiFirebase />,
  Sentry: <SiSentry />,
  Docker: <SiDocker />,
  AWS: <FaAws />,
  Git: <SiGit />,
  Linux: <SiLinux />,
  MySQL: <SiMysql />,
  PostgreSQL: <SiPostgresql />,
  PHP: <SiPhp />,
  Jest: <SiJest />,
  MixPanel: <SiMixpanel />,
  'React Native': <TbBrandReactNative />,
  Expo: <SiExpo />,
  'Github Actions': <SiGithubactions />,
};

export const iconsWordMap = {
  ...techIcons,
};

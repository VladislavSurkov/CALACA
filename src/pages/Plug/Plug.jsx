import Animation from "components/Animation/Animation";
import { Logo, PlugContainer, SubTitle, Title } from "./Plug.styled";
import CalacaLogo from "../../img/LOGO.png"
import SocialMedia from "components/Social/Social";

const Plug = () => {
  return (
    <PlugContainer>
      <Logo src={CalacaLogo} alt="Logo Calaca" />
      <Title>SHAPE YOUR DESTINY</Title>
      <SubTitle>COMING SOON</SubTitle>
      <SocialMedia />
      <Animation />
    </PlugContainer>
  );
};

export default Plug;

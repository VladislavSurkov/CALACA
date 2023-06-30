import Fire from "components/Fire/Fire";
import { Logo, PlugContainer, SubTitle, Title } from "./Plug.styled";
import CalacaLogo from "../../img/LOGO.png"

const Plug = () => {
  return (
    <PlugContainer>
    <Logo src={CalacaLogo} alt="Calaca"/>
      <Title>SHAPE YOUR DESTINY</Title>
      <SubTitle>COMING SOON</SubTitle>
      <Fire />
    </PlugContainer>
  );
};

export default Plug;

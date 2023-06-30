import Fire from "components/Fire/Fire";
import { PlugContainer, SubTitle, Title } from "./Plug.styled";

const Plug = () => {
  return (
    <PlugContainer>
    <Title>SHAPE YOUR DESTINY</Title>
    <SubTitle>COMING SOON</SubTitle>
      <Fire position="center" />
      <Fire position="firstLeft"/>
      <Fire position="secondLeft"/>
      <Fire position="thirdLeft"/>
      <Fire position="firstRight"/>
      <Fire position="secondRight"/>
      <Fire position="thirdRight"/>
    </PlugContainer>
  );
};

export default Plug;

import Fire from "components/Fire/Fire";
import { PlugContainer } from "./Plug.styled";

const Plug = () => {
  return (
    <PlugContainer>
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

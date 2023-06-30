import { FireComp, FireContainer } from "./Fire.styled";


const Fire = () => {
  return (
    <FireContainer>
      <FireComp position="center" />
      <FireComp position="firstLeft" />
      <FireComp position="secondLeft" />
      <FireComp position="thirdLeft" />
      <FireComp position="firstRight" />
      <FireComp position="secondRight" />
      <FireComp position="thirdRight" />
    </FireContainer>
  ); 
};

export default Fire;
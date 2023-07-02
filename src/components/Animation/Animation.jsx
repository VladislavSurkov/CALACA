import { useState, useEffect } from "react";
import { FireComp, AnimationContainer, Flag } from "./Animation.styled";

const Animation = () => {
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <AnimationContainer width={containerWidth}>
      <Flag side="left" />
      <Flag side="right" />

      <FireComp position="center" image="first" />
     
        
          <FireComp position="firstLeft" image="second" />
          <FireComp position="firstRight" image="first" />
      
     

    
      
          <FireComp position="secondLeft" image="first" />
          <FireComp position="secondRight" image="second" />
       
     

      <FireComp position="thirdLeft" image="second" />
      <FireComp position="thirdRight" image="first" />
    </AnimationContainer>
  );
};

export default Animation;

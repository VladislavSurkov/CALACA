import { useState, useEffect } from "react";
import { FireComp, AnimationContainer } from "./Animation.styled";

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

  const shouldShowSecondImages = containerWidth >= 741;
  const shouldShowFirstImages = containerWidth >= 601;

  return (
    <AnimationContainer width={containerWidth}>
      <FireComp position="center" image="first" />

      {shouldShowFirstImages && (
        <>
          <FireComp position="firstLeft" image="second" />
          <FireComp position="firstRight" image="first" />
        </>
      )}

      {shouldShowSecondImages && (
        <>
          <FireComp position="secondLeft" image="first" />
          <FireComp position="secondRight" image="second" />
        </>
      )}

      <FireComp position="thirdLeft" image="second" />
      <FireComp position="thirdRight" image="first" />
    </AnimationContainer>
  );
};

export default Animation;

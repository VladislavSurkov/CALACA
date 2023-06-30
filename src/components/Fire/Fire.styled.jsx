import styled, { css } from "styled-components";
import fire from "../../img/animation/fire.png";

const POSITION = {
  center: css`
    position: absolute;
    top: 560px;
    left: 855px;
  `,
  firstLeft: css`
    position: absolute;
    top: 555px;
    left: 525px;
    transform: rotateY(40deg);
  `,
  secondLeft: css`
    position: absolute;
    top: 610px;
    left: 450px;
    transform: rotateY(50deg);
  `,
  firstRight: css`
    position: absolute;
    top: 555px;
    left: 1200px;
    transform: rotateY(40deg);
  `,
  secondRight: css`
    position: absolute;
    top: 650px;
    left: 1250px;
    transform: rotateY(50deg);
  `,
  thirdLeft: css`
    position: absolute;
    top: 750px;
    left: 612px;
    transform: rotateY(60deg);
  `,
  thirdRight: css`
    position: absolute;
    top: 760px;
    left: 1020px;
    transform: rotateY(30deg);
  `,
};

export const FireComp = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${fire});
  background-size: contain;

  ${(props) => props.position && POSITION[props.position]};
`;

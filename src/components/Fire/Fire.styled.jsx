import styled, { css } from "styled-components";
import fire from "../../img/animation/fire.png";

const POSITION = {
  center: css`
    top: 5%;
    left: 49%;
    transform: translate(-50%, -50%);
  `,
  firstLeft: css`
    top: 3%;
    left: 11%;
    transform: translate(-50%, -50%) rotateY(40deg);
  `,
  secondLeft: css`
    top: 22%;
    left: 3%;
    transform: translate(-50%, -50%) rotateY(60deg);
  `,
  firstRight: css`
    top: 3%;
    left: 90%;
    transform: translate(-50%, -50%) rotateY(40deg);
  `,
  secondRight: css`
    top: 32%;
    left: 95%;
    transform: translate(-50%, -50%) rotateY(60deg);
  `,
  thirdLeft: css`
    top: 64%;
    left: 22%;
    transform: translate(-50%, -50%) rotateY(30deg);
  `,
  thirdRight: css`
    top: 74%;
    left: 71%;
    transform: translate(-50%, -50%) rotateY(30deg);
  `,
};

export const FireContainer = styled.div`
  position: absolute;
  bottom: 20%;
  width: 860px;
  height: 310px;

  @media (min-width: 468px) {
    bottom: 12%;
  }
`;
export const FireComp = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  background-image: url(${fire});
  background-size: cover;
  background-repeat: no-repeat;

  ${(props) => props.position && POSITION[props.position]};
`;

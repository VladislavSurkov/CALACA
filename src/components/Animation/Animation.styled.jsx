import styled, { css } from "styled-components";
import arenaDesk from "../../img/bg/arena-desktop.png";
import arenaMobile from "../../img/bg/arena-mobile.png";
import firea from "../../img/animation/firea.png";
import fireb from "../../img/animation/fireb.png";

const POSITION = {
  center: css`
    width: 200px;
    height: 200px;
    top: 21%;
    left: 49.5%;
    transform: translate(-50%, -50%);

    @media (min-width: 468px) {
      width: 350px;
      height: 350px;
    }
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
    top: 47%;
    left: 9%;
    transform: translate(-50%, -50%) rotateY(30deg);

    @media (min-width: 468px) {
      top: 64%;
      left: 22%;
    }
  `,
  thirdRight: css`
    top: 50%;
    left: 81%;
    transform: translate(-50%, -50%) rotateY(30deg);

    @media (min-width: 468px) {
      top: 74%;
      left: 71%;
    }
  `,
};

const IMAGE = {
  first: css`
    background-image: url(${firea});
  `,
  second: css`
    background-image: url(${fireb});
  `,
};

export const AnimationContainer = styled.div`
  position: absolute;
  bottom: 0%;
  z-index: -1;
  width: 390px;
  height: 483px;

  background-image: url(${arenaMobile});
  background-size: cover;
  background-position: center;

  background-repeat: no-repeat;

  @media (min-width: 390px) and (max-width: 468px) {
    width: ${(props) => props.width}px;
    height: ${(props) =>  93 + props.width}px;
  }

  @media (min-width: 468px) {
    background-image: url(${arenaDesk});
    width: 1092px;
    height: 639px;
  }
`;


export const FireComp = styled.div`
  position: absolute;

  width: 160px;
  height: 160px;

  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 468px) {
    width: 200px;
    height: 200px;
  }
  ${(props) => props.position && POSITION[props.position]};
  ${(props) => props.image && IMAGE[props.image]};
`;

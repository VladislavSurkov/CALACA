import styled, { css } from "styled-components";
import firea from "../../img/animation/firea.png";
import fireb from "../../img/animation/fireb.png";

const POSITION = {
  center: css`
    width: 200px;
    height: 200px;
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
    top: 43%;
    left: 31%;
    transform: translate(-50%, -50%) rotateY(30deg);

    ${'' /* @media (min-width: 415px) {
      top: 45%;
      left: 30%;
    }
    @media (min-width: 440px) {
      top: 45%;
      left: 30%;
    } */}

    @media (min-width: 468px) {
      top: 64%;
      left: 22%;
    }
  `,
  thirdRight: css`
    top: 48%;
    left: 64%;
    transform: translate(-50%, -50%) rotateY(30deg);

    ${'' /* @media (min-width: 415px) {
      top: 50%;
      left: 65%;
    }
    @media (min-width: 440px) {
      top: 50%;
      left: 65%;
    } */}

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

export const FireContainer = styled.div`
  bottom: 8.5%;
  width: 370px;
  height: 310px;

  @media (min-width: 467px) {
    position: absolute;
    bottom: 10%;
    width: 860px;
  }
`;
export const FireComp = styled.div`
  position: absolute;

  width: 140px;
  height: 140px;

  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 468px) {
    width: 200px;
    height: 200px;
  }
  ${(props) => props.position && POSITION[props.position]};
  ${(props) => props.image && IMAGE[props.image]};
`;

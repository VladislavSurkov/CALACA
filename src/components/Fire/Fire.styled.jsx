import styled, { css } from "styled-components";
import firea from "../../img/animation/firea.png";
import fireb from "../../img/animation/fireb.png";

const POSITION = {
  center: css`
    width: 200px;
    height: 200px;
    top: 55%;
    left: 49.5%;
    transform: translate(-50%, -50%);

    @media (max-width: 415px), (min-width: 468px) {
      top: 1%;
    }

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
    bottom: 12.3%;
    left: 9%;
    transform: translate(-50%, -50%) rotateY(30deg);

    @media (max-width: 415px), (min-width: 468px) {
      bottom: 6%;
      left: 4%;
    }

    @media (min-width: 468px) {
      top: 64%;
      left: 22%;
    }
  `,
  thirdRight: css`
    bottom: 10.6%;
    left: 81%;
    transform: translate(-50%, -50%) rotateY(30deg);

    @media (max-width: 415px), (min-width: 468px) {
      bottom: 0%;
      left: 84%;
    }

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
  bottom: 11.5%;
  width: 370px;
  height: 310px;

  @media (max-width: 415px), (min-width: 468px) {
    position: absolute;
  }

  @media (min-width: 467px) {
    bottom: 10%;
    width: 860px;
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

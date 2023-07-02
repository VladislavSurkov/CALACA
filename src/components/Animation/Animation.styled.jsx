import styled, { css } from "styled-components";

import arenaMobile from "../../img/bg/arena-mobile.png";
import arenaDesk from "../../img/bg/arena-desktop.png";

import flagWeb2 from "../../img/bg/static-flag-web2.png";
import flagWeb3 from "../../img/bg/static-flag-web3.png";

import flagLeft from "../../img/animation/flag-left.png";
import flagRight from "../../img/animation/flag-right.png";

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
      top: 35%;
      left: 49%;
    }
  `,
  firstLeft: css`
    top: 34.5%;
    left: 19%;
    transform: translate(-50%, -50%) rotateY(40deg);
  `,
  secondLeft: css`
    top: 43%;
    left: 12.5%;
    transform: translate(-50%, -50%) rotateY(60deg);
  `,
  firstRight: css`
    top: 34.5%;
    left: 81.5%;
    transform: translate(-50%, -50%) rotateY(40deg);
  `,
  secondRight: css`
    top: 49%;
    left: 86%;
    transform: translate(-50%, -50%) rotateY(60deg);
  `,
  thirdLeft: css`
    top: 47%;
    left: 9%;
    transform: translate(-50%, -50%) rotateY(30deg);

    @media (min-width: 468px) {
      top: 64.5%;
      left: 27.5%;
    }
  `,
  thirdRight: css`
    top: 50%;
    left: 81%;
    transform: translate(-50%, -50%) rotateY(30deg);

    @media (min-width: 468px) {
      top: 68%;
      left: 66%;
    }
  `,
};

const SIDE = {
  left: css`
    background-image: url(${flagLeft});
    top: 2.5%;
    left: 11%;
    transform: translate(-50%, -50%);

    @media (min-width: 468px) {
      top: 9%;
      left: 18%;
    }
  `,

  right: css`
    background-image: url(${flagRight});
    top: 2.5%;
    left: 84.5%;
    transform: translate(-50%, -50%);

    @media (min-width: 468px) {
      top: 9%;
      left: 77.3%;
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

  background-image: url(${flagWeb2}), url(${flagWeb3}), url(${arenaMobile});
  background-size: 62px 42px, 62px 42px, cover;
  background-position: top 11% left 6.5%, top 11% right 6.5%, center;

  background-repeat: no-repeat;

  @media (min-width: 390px) and (max-width: 467px) {
    width: ${(props) => props.width}px;
    height: ${(props) => 93 + props.width}px;

    background-size: ${(props) => props.width / 6}px
        ${(props) => props.width / 9}px,
      ${(props) => props.width / 6}px ${(props) => props.width / 9}px, cover;
  }

  @media (min-width: 468px) {
    background-image: url(${flagWeb2}), url(${flagWeb3}), url(${arenaDesk});
    background-size: 131px 89px, 131px 89px, cover;
    background-position: top 5.5% left 4%, top 5.5% left 95.5%, center;

    width: 1092px;
    height: 639px;
  }

  /* @media screen and (min-width: 468px) and (max-width: 767px) {
    background-image: url(${flagWeb2}), url(${flagWeb3}), url(${arenaDesk});
    width: ${(props) => props.width}px;
    height: ${(props) => 453 - props.width}px;
  } */
`;

export const Flag = styled.div`
  position: absolute;
  width: 50px;
  height: 70px;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 468px) {
    width: 100px;
    height: 160px;
  }

  ${(props) => props.side && SIDE[props.side]};
`;

export const FireComp = styled.div`
  position: absolute;

  width: 160px;
  height: 160px;

  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 468px) {
    width: 250px;
    height: 250px;
  }
  ${(props) => props.position && POSITION[props.position]};
  ${(props) => props.image && IMAGE[props.image]};
`;

import styled, { css } from "styled-components";
import fire from "../../img/animation/fire.png";

const POSITION = {
  center: css`
    position: absolute;
    top: 100px;
  `,
  first: css``,
  second: css``,
  third: css``,
};

export const FireComp = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${fire});
  background-size: contain;

  ${(props) => props.position && POSITION[props.position]};
`;

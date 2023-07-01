import styled, { css } from "styled-components";
import tg from "../../img/social/tg.png";
import dis from "../../img/social/dis.png";
import twi from "../../img/social/twi.png";
import tree from "../../img/social/tree.png";

const MEDIATYPE = {
  tg: css`
    background-image: url(${tg});
  `,
  dis: css`
    background-image: url(${dis});
  `,
  twi: css`
    background-image: url(${twi});
  `,
  tree: css`
    background-image: url(${tree});
  `,
};
export const SocialMediaList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  width: 346px;
  height: 88px;
`;

export const SocialMediaItem = styled.li`
  list-style: none;
  
`;

export const SocialMediaLink = styled.a`
display: flex;
flex-direction: column;

  width: 64px;
  height: 64px;

  ${(props) => props.mediaType && MEDIATYPE[props.mediaType]};
`;

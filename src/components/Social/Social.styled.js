import styled from "styled-components";

export const SocialMediaList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  align-items: center;
  width: 346px;
  height: 88px;
  margin-top: 60px;

  @media screen and (max-width: 467px) {
    position: absolute;
    bottom: 28px;
    margin-top: 0;
  }
`;

export const SocialMediaItem = styled.li`
  list-style: none;
  text-align: center;
  cursor: pointer;
  @media screen and (min-width: 468px) {
    &:nth-child(2) {
      margin-right: 50px;
    }
  }
  transition: all 400ms ease-in-out;

  &:hover {
    transform: scale(1.1);
    text-shadow: 1px 1px 1px black;
  }
`;

export const SocialMediaLink = styled.a`
  display: flex;
  flex-direction: column;

  font-family: "Roboto Condensed";
  font-size: 14px;
  font-weight: 400;
  color: #ffffff50;

  width: 64px;
  height: 64px;
`;

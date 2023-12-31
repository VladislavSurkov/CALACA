import styled from "styled-components";

export const SocialMediaList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  align-items: center;
  width: 346px;
  height: 88px;
  margin-top: 10px;
  z-index: 2;

  @media (min-height: 930px) and (min-width: 568px) {
    margin-top: 60px;
  }

`;

export const SocialMediaItem = styled.li`
  list-style: none;
  text-align: center;
  cursor: pointer;
  @media screen and (min-width: 568px) {
    &:nth-child(2) {
      margin-right: 50px;
    }
  }
  transition: all 100ms ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const SocialMediaLink = styled.a`
  display: flex;
  flex-direction: column;

  font-family: "Roboto Condensed";
  font-size: 14px;
  font-weight: 400;
  color: #ffffff70;

  width: 64px;
  height: 64px;
`;

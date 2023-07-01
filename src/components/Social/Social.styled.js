import styled from "styled-components";


export const SocialMediaList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  width: 346px;
  height: 88px;
`;

export const SocialMediaItem = styled.li`
  list-style: none;
  text-align: center;

  
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

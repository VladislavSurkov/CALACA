import styled from "styled-components";
import background from "../../img/bg/plug-background.png";

export const PlugContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1080px;

  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Title = styled.h1`
  display: flex;

  font-family: "ST-SimpleSquare";
  font-weight: 500;
  font-size: 110px;
  line-height: 0.9;
  text-align: center;
  overflow-wrap: break-word;

  max-width: 1200px;
  margin: 0 0 40px 0;

  color: #eee3ff;
`;

export const SubTitle = styled.h2`
  font-family: "Roboto Condensed";
  color: #eee3ff;
  font-weight: 700;
  letter-spacing: 28px;
  -webkit-text-stroke: 1px black;

  font-size: 36px;
  margin: 0;
  padding-left: 28px;
`;

export const Logo = styled.img`
width: 210px;
height: 90px;
margin-bottom: 50px;
margin-top: 60px;
`
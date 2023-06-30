import styled from "styled-components";
import background from "../../img/plug-background.png";

export const PlugContainer = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 1080px;
`;

export const Title = styled.h1`
  font-family: "ST-SimpleSquare";
  color: #eee3ff;
  font-weight: 500;
  width: 1200px;
  height: 210px;
  font-size: 120px;
  text-align: center;
  margin: 0;
  margin-left: 360px;
  padding-top: 190px;
  margin-bottom: 40px;
  line-height: 0.9;
  /* letter-spacing: 1px; */
  /* text-shadow: 1px 1px 1px #000000; */
`;

export const SubTitle = styled.h2`
  font-family: "Roboto Condensed";
  color: #eee3ff;
  font-weight: 700;
  text-align: center;
  letter-spacing: 30px;
  -webkit-text-stroke: 1px black;
  
  font-size: 28px;
  margin: 0;
`;


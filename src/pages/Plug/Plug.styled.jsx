import styled from "styled-components";
import backgroundDesktop from "../../img/bg/bg-desktop.png";
import backgroundMobile from "../../img/bg/bg-mobile.png";

export const PlugContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1045px;

  background-image: url(${backgroundMobile});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;

  @media (min-width: 415px) {
    height: 1090px;
  }

  @media (min-width: 568px) {
    background-image: url(${backgroundDesktop});
    height: 100vh;
  }
`;

export const Logo = styled.img`
  width: 140px;
  height: 70px;

  margin-top: 40px;
  z-index: 2;

  @media (min-width: 568px) {
    margin-top: 15px;
  }

  @media (min-height: 920px) and (min-width: 920px) {
    width: 210px;
    height: 100px;
  }

  @media (min-height: 1080px) and (min-width: 920px) {
    margin-top: 50px;
  }
`;

export const Title = styled.h1`
  font-family: "ST-SimpleSquare";
  font-weight: 400;
  font-size: 64px;
  line-height: 0.9;

  text-align: center;
  max-width: 1200px;
  margin-top: 48px;
  z-index: 2;

  color: #eee3ff;

  @media (min-width: 568px) {
    font-size: 80px;
    line-height: 0.9;
    margin-top: 50px;
  }

  @media (min-width: 920px) {
    font-size: 108px;
    line-height: 0.9;
  }

  @media (max-height: 920px) and (min-width: 568px) {
    font-size: 64px;
    max-width: 857px;
    margin-top: 15px;
  }
`;

export const SubTitle = styled.h2`
  font-family: "Roboto Condensed";
  font-weight: 700;
  letter-spacing: 13px;

  font-size: 16px;
  margin: 0;
  padding-left: 28px;
  margin-top: 40px;
  z-index: 2;

  color: #eee3ff;
  @media (min-width: 468px) {
    font-weight: 500;
    letter-spacing: 20px;
    font-size: 20px;
    margin-top: 20px;
  }

  @media (min-width: 920px) {
    letter-spacing: 30px;
    font-size: 36px;
  }
  @media (max-height: 920px) and (min-width: 568px) {
    font-size: 16px;
    margin-top: 15px;
  }
`;

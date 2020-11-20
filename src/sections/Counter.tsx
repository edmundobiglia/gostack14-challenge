import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { CountUp } from "use-count-up";

import techs from "../assets/techs.png";

const TechCounter = styled.div`
  color: ${(props) => props.theme.colors.green};
  font-size: 100px;
  display: block;
  margin-bottom: 20px;
  font-weight: 700;
`;

const Container = styled.section`
  background: ${(props) => props.theme.colors.purple};
  padding: 120px 10px 320px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  .purple-text {
    color: ${(props) => props.theme.colors.purple};
  }

  h1 {
    font-family: "Fira Code", monospace;
    margin: 0;
    color: ${(props) => props.theme.colors.white};
    width: 100%;
    max-width: 880px;
    font-size: 55px;
    font-weight: 700;
    line-height: 1.1;
    text-align: center;
    margin-bottom: 8px;
    letter-spacing: -1px;
  }

  .bottom-image {
    width: 90%;
    max-width: 1370px;
    position: absolute;
    bottom: -14%;
  }
`;

const Counter = () => {
  return (
    <Container>
      <Fade cascade={true} className="animation-container" triggerOnce>
        <h1>
          <TechCounter>
            <CountUp isCounting end={70000} duration={20000} thousandsSeparator="." />
          </TechCounter>
          novos frameworks desde que você abriu esta página
        </h1>

        <img className="bottom-image" src={techs} alt="Techs" />
      </Fade>
    </Container>
  );
};

export default Counter;

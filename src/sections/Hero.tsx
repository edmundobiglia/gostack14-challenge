import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

import background1 from "../assets/evolution.svg";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.green};
  min-height: 100vh;
  padding: 120px 10px 80px 10px;
  position: relative;

  .hero-image {
    max-width: 1900px;
    width: 85%;
  }

  .hero-quote {
    margin-top: -40px;
    color: ${(props) => props.theme.colors.purple};
    width: 100%;
    max-width: 900px;

    cite {
      position: relative;
      padding-left: 65px;
      font-style: normal;
      font-weight: 400;
      font-size: 60px;
      color: #fff;
      display: block;
      margin-top: 30px;

      /* Quote Dash */
      &:before {
        content: "";
        position: absolute;
        height: 4px;
        width: 50px;
        left: 0;
        top: 50%;
        margin-top: -2px;
        background-color: ${(props) => props.theme.colors.purple};
      }
    }
  }

  .white-text {
    color: ${(props) => props.theme.colors.white};
  }
`;

const Hero = () => (
  <Container>
    <Fade cascade={true} className="animation-container" triggerOnce>
      <img className="hero-image" src={background1} alt="Hero" />

      <blockquote className="hero-quote big-text">
        Não é o mais forte que sobrevive nem o mais inteligente
        <span className="white-text">,</span> mas sim o que melhor se adapta às mudanças
        <span className="white-text">.</span>
        <cite>Charles Darwin</cite>
      </blockquote>
    </Fade>
  </Container>
);

export default Hero;

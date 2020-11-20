import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

import jake from "../assets/jake.gif";

const Container = styled.section`
  padding: 160px 10px;
  position: relative;

  .content-wrapper {
    display: flex;
    align-items: flex-end;
    max-width: 1200px;
    width: 100%;
    margin-bottom: 30px;
  }

  h1 {
    color: ${(props) => props.theme.colors.purple};
    margin-left: -50px;
    font-size: 65px;
    margin-top: 0;
    margin-bottom: 0;
  }

  p {
    color: ${(props) => props.theme.colors.darkgrey};
    width: 100%;
    max-width: 800px;
  }

  .pink-text {
    color: ${(props) => props.theme.colors.pink};
  }
`;

const Section4 = () => (
  <Container>
    <Fade cascade={true} className="animation-container" triggerOnce>
      <div className="content-wrapper">
        <div>
          <img src={jake} alt="Jake the Dog" />
        </div>
        <div>
          <h1 className="big-text">
            <span className="pink-text">Tecnologias</span>,{" "}
            <span className="pink-text">paradigmas</span> e{" "}
            <span className="pink-text">necessidades </span>
            mudam
          </h1>
        </div>
      </div>
      <p className="paragraph">
        Devs que não se adaptam perdem sua relevância no mercado de trabalho e deixam de
        ser desejáveis para os empregadores. Além de tecnologias específicas, o setor
        passa por profundas mudanças de paradigma cada vez mais rápido. Um exemplo foi o
        boom dos dispositivos móveis há alguns anos. Os devs que resistiram a aprender
        sobre responsividade ou que simplesmente demoraram para aceitá-la certamente
        ficaram para trás. Outra coisa que muda são as necessidades do cliente e as regras
        de negócio. Por exemplo, com a explosão inesperada da COVID-19, muitos
        desenvolvedores tiveram o desafio de adaptar seus produtos e sistemas ao{" "}
        <i>novo normal</i> imposto pela pandemia.
      </p>
    </Fade>
  </Container>
);

export default Section4;

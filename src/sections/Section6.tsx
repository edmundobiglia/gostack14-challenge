import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

import goku from "../assets/goku.gif";

const Container = styled.section`
  padding: 160px 10px 160px 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .content-wrapper {
    display: flex;
    align-items: flex-end;
    max-width: 1200px;
    width: 100%;
    margin-bottom: 50px;
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
    margin-top: 35px;
    position: relative;
    padding-left: 40px;

    &:before {
      content: "";
      position: absolute;
      height: 20px;
      width: 20px;
      background: ${(props) => props.theme.colors.yellow};
      top: 12px;
      left: 0;
      border-radius: 50%;
    }
  }

  strong {
    color: ${(props) => props.theme.colors.purple};
    letter-spacing: 0.3px;
    font-size: 30px;
  }

  .yellow-text {
    color: ${(props) => props.theme.colors.yellow};
  }
`;

const Section6 = () => (
  <Container>
    <Fade cascade={true} delay={600} className="animation-container" triggerOnce>
      <div className="content-wrapper">
        <div>
          <img src={goku} alt="Goku" />
        </div>
        <div>
          <h1 className="big-text">
            Como desenvolver
            <br />
            sua <span className="yellow-text">adaptabilidade</span>
          </h1>
        </div>
      </div>
    </Fade>
    <Fade cascade={true} delay={400} className="animation-container" triggerOnce>
      <p className="paragraph">
        <strong>Pare de reclamar</strong> que é impossível acompanhar as mudanças no
        panorama de tecnologia. Em vez de ver isso como um inconveniente, abrace e celebre
        o dinamismo da área de programação. Mudando sua atitude e sendo mais aberto às
        mudanças e transformações, você terá mais facilidade para se adaptar a elas.
      </p>
    </Fade>
    <Fade cascade={true} delay={400} className="animation-container" triggerOnce>
      <p className="paragraph">
        <strong>Construa bases sólidas</strong>: concentre-se em aprender e reforçar os
        conceitos fundamentais. Por mais que linguagens e frameworks mudem, os padrões
        subjacentes geralmente são universais e menos mutáveis. Ao ter um sólido domínio
        dos fundamentos, você poderá aprender as variações e novidades com menos esforço.
      </p>
    </Fade>
    <Fade cascade={true} delay={400} className="animation-container" triggerOnce>
      <p className="paragraph">
        <strong>Desenvolva sua capacidade de resolver problemas</strong>: como no ponto
        anterior, por mais que as tecnologias mudem, grande parte dos problemas continuam
        os mesmos. A resolução de problemas é uma skill curinga que será útil em qualquer
        contexto, ambiente, linguagem, não importa os novos desafios que as mudanças
        tecnológicas tragam.
      </p>
    </Fade>
    <Fade cascade={true} delay={400} className="animation-container" triggerOnce>
      <p className="paragraph">
        <strong>Saiba que é OK fracassar e lembre-se de que você não está sozinho</strong>
        : é claro que se adaptar a tantas mudanças o tempo todo é desafiador. Ao aprender
        novas tecnologias, haverá momentos de frustração, você terá dificuldade para
        entender conceitos e ficará travado em problemas específicos. Perder o sono faz
        parte, mas isso já aconteceu com você antes, mas lembre que você sempre aprendeu,
        se superou e evoluiu no final das contas. Além disso, nunca se esqueça que você
        está no mesmo barco que milhares de outros devs que também sofrem para se adaptar.
        Ter o hábito de buscar apoio na comunidade, trocar ideias, pedir ajuda e ajudar
        com certeza fará de você um dev mais adaptável.
      </p>
    </Fade>
  </Container>
);

export default Section6;

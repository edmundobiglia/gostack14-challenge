import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

import pokemonGif from "../assets/pokemon.gif";

const Container = styled.section`
  padding: 70px 10px 160px 10px;
  position: relative;

  .content-wrapper {
    display: flex;
    align-items: flex-end;
    max-width: 1200px;
    width: 100%;
  }

  h1 {
    color: ${(props) => props.theme.colors.green};
    margin-left: -70px;
  }

  p {
    color: ${(props) => props.theme.colors.darkgrey};
    width: 100%;
    max-width: 800px;
  }

  .purple-text {
    color: ${(props) => props.theme.colors.purple};
  }
`;

const Section2 = () => (
  <Container>
    <Fade cascade={true} className="animation-container" triggerOnce>
      <div className="content-wrapper">
        <div>
          <img src={pokemonGif} alt="Pokemon" />
        </div>

        <div>
          <h1 className="big-text">
            <span className="purple-text">Adaptabilidade</span>:
            <br />
            uma <span className="purple-text">dependência</span>
            <br />
            de desenvolvimento
          </h1>
        </div>
      </div>
      <p className="paragraph">
        Não é novidade a importância das soft skills no mundo do trabalho. Não adianta
        nada você ser um mestre do código, mas não ter empatia, não saber se comunicar,
        receber feedback ou trabalhar em equipe. A
        <span className="purple-text"> adaptabilidade</span> sem dúvida é um item
        obrigatório no leque de soft skills de um dev. Com a velocidade frenética com que
        a inovação tecnológica acontece, novas linguagens, frameworks e plataformas surgem
        no mercado e o setor adota novos padrões, ser capaz de aprender com rapidez e se
        adaptar às reviravoltas tecnológicas é simplesmente uma questão de sobrevivência.
        Por isso, o famoso postulado de Darwin se aplica à área de desenvolvimento melhor
        do que em qualquer outra.
      </p>
    </Fade>
  </Container>
);

export default Section2;

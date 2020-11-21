import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

import rocketseat from "../assets/rocketseat.svg";

const Container = styled.section`
  background: ${(props) => props.theme.colors.darkgrey};
  padding: 60px 10px;

  strong {
    letter-spacing: 1px;
  }

  p {
    color: ${(props) => props.theme.colors.lightgrey};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
  }

  img {
    width: 25px;
    margin-right: 10px;
  }
`;

const Footer = () => (
  <Container>
    <Fade cascade={true} className="animation-container" triggerOnce>
      <p>
        <img src={rocketseat} alt="RocketSeat" />
        <span>
          Esta página foi criada como parte do desafio da <strong>Expansion Week </strong>
          do bootcamp <strong>GoStack 14 da RocketSeat</strong>.
        </span>
      </p>
      <p>
        <span style={{ fontSize: 24, marginRight: 10 }}>🧛</span>
        <span>
          Qualquer semelhança entre a paleta desta página e o tema Dracula
          <strong> NÃO</strong> é mera coincidência!
        </span>
      </p>
    </Fade>
  </Container>
);

export default Footer;

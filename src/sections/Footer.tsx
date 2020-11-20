import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

const Container = styled.section`
  background: ${(props) => props.theme.colors.darkgrey};
  padding: 60px 10px;

  .code {
    color: ${(props) => props.theme.colors.lightgrey};
  }

  strong {
    letter-spacing: 2px;
  }
`;

const Footer = () => (
  <Container>
    <Fade cascade={true} className="animation-container" triggerOnce>
      <p className="code">
        Qualquer semelhança entre a paleta desta página e o tema Dracula 🧛{" "}
        <strong>NÃO</strong> é mera coincidência!
      </p>
    </Fade>
  </Container>
);

export default Footer;

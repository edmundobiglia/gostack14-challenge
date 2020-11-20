import React, { useEffect, useState } from "react";
import styled from "styled-components";

import impostor from "../assets/impostor.svg";
import mystique from "../assets/mystique.gif";
import closeIcon from "../assets/x.svg";

const Container = styled.section`
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(117, 95, 230, 0.6);
  transition: opacity 200ms ease;

  &.hidden {
    opacity: 0;
  }

  .wrapper {
    padding: 100px 120px;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .banner {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & > div {
      margin-left: 50px;
    }
  }

  h1 {
    font-size: 55px;
    color: ${(props) => props.theme.colors.purple};
    letter-spacing: 3px;
    line-height: 1.2;
    margin: 0;
  }

  p {
    font-size: 24px;
    color: ${(props) => props.theme.colors.darkgrey};
    margin: 20px 0 0 0;
  }

  .right-answer {
    background: ${(props) => props.theme.colors.green};

    .banner {
      align-items: flex-end;
    }

    h1 {
      margin-bottom: -15px;
    }

    p {
      margin-top: 40px;
    }

    img {
      max-width: 380px;
      width: 100%;
    }
  }

  .wrong-answer {
    background: ${(props) => props.theme.colors.pink};

    img {
      width: 180px;
    }
  }

  .code {
    color: ${(props) => props.theme.colors.lightgrey};
  }

  .close-button {
    position: absolute;
    top: 30px;
    right: 30px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    outline: none;
    background-color: ${(props) => props.theme.colors.purple};
    color: white;
    display: flex;
    cursor: pointer;
    background-image: url(${closeIcon});

    &:hover {
      background-color: ${(props) => props.theme.colors.blue};
    }
  }

  strong {
    color: ${(props) => props.theme.colors.purple};
  }
`;

interface Props {
  isRightAnswer: boolean;
  setModalIsOpen: (value: boolean) => void;
}

const BigModal = ({ isRightAnswer, setModalIsOpen }: Props) => {
  const [hiddenClass, setHiddenClass] = useState("hidden");

  useEffect(() => {
    setTimeout(() => {
      setHiddenClass("");
    }, 100);
  }, []);

  return isRightAnswer ? (
    <Container className={`right-answer ${hiddenClass}`}>
      <div className="wrapper right-answer">
        <div className="banner">
          <img src={mystique} alt="Mystique" />
          <div>
            <h1>
              SIM,
              <br />
              VOCÊ É<br />
              ADAPTÁVEL!
            </h1>
          </div>
        </div>

        <p>
          Sua resposta está <strong>CORRETA</strong>. Absolutamente todas as pessoas são
          adaptáveis. Está em nosso DNA: imagine o quanto nossa espécie teve que se
          adaptar e evoluir para criar coisas tão assombrosas como linguanges de
          programação que permitem a viralização de memes em velocidades jamais
          imaginadas!
        </p>

        <button
          className="close-button"
          onClick={() => {
            setModalIsOpen(false);
          }}
        ></button>
      </div>
    </Container>
  ) : (
    <Container className={`wrong-answer ${hiddenClass}`}>
      <div className="wrapper wrong-answer">
        <div className="banner">
          <img src={impostor} alt="Impostor" />
          <div>
            <h1>
              IMPOSTOR
              <br />
              SYNDROME
              <br />
              DETECTED!
            </h1>
          </div>
        </div>

        <p>
          Sua resposta está <strong>ERRADA</strong>. Você é adaptável,{" "}
          <strong>SIM</strong>. Ser adaptável é ser humano. Pense em todas as situações às
          quais você se adaptou ao longo da sua vida e tudo que já aprendeu desde que
          começou a programar. Você é capaz de aprender e se adaptar a qualquer coisa:
          basta querer. Pense nisso e tente novamente.
        </p>

        <button
          className="close-button"
          onClick={() => {
            setModalIsOpen(false);
          }}
        ></button>
      </div>
    </Container>
  );
};

export default BigModal;

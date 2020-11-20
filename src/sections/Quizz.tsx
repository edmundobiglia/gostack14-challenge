import React, { useState } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

import BigModal from "../components/BigModal";

import mario from "../assets/mario.gif";

const Container = styled.section`
  padding: 160px 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #91ffed;

  .content-wrapper {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    max-width: 1200px;
    width: 100%;
  }

  img {
    width: 260px;
  }

  h1 {
    color: ${(props) => props.theme.colors.pink};
    margin: 0 0 0 -50px;
    letter-spacing: 1px;
  }

  p {
    color: ${(props) => props.theme.colors.darkgrey};
    width: 100%;
    max-width: 800px;
    margin-top: 50px;
  }

  h2 {
    margin-top: 40px;
    color: ${(props) => props.theme.colors.pink};
  }

  .green-text {
    color: #46f873;
  }
`;

const Button = styled.button`
  padding: 20px 80px;
  border: none;
  outline: none;
  font-family: "Fira Code", monospace;
  color: ${(props) => props.theme.colors.darkgrey};
  font-size: 30px;
  cursor: pointer;
  transition: background 100ms ease-in-out, color 100ms ease-in-out;

  &.yes {
    background: ${(props) => props.theme.colors.green};
    margin-right: 60px;

    &:hover {
      background: #46f873;
      color: #ff74ba;
    }
  }

  &.no {
    background: ${(props) => props.theme.colors.pink};

    &:hover {
      background: #ff74ba;
      color: #46f873;
    }
  }
`;

const Quizz = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isRightAnswer, setIsRightAnswer] = useState(false);

  const handleOpenModal = (selectedAnswer: boolean) => {
    setIsRightAnswer(selectedAnswer);
    setModalIsOpen(true);
  };

  return (
    <>
      {modalIsOpen && (
        <BigModal isRightAnswer={isRightAnswer} setModalIsOpen={setModalIsOpen} />
      )}
      <Container>
        <Fade cascade={true} className="animation-container" triggerOnce>
          <div className="content-wrapper">
            <div>
              <img src={mario} alt="Mario" />
            </div>

            <div>
              <h1 className="big-text">ENQUETE</h1>
            </div>
          </div>
          <p className="paragraph">
            Já reiteramos a importância de ser adaptável, mas sabemos que pode ser
            exaustivo e assustador acompanhar o ritmo de tantas mudanças, novos
            frameworks, paradigmas e plataformas, principalmente para novos devs. Com base
            na sua história com a programação e/ou entusiasmo para entrar na área,
            responda:
          </p>
        </Fade>
        <Fade cascade={true} className="animation-container" triggerOnce>
          <h2 className="big-text">
            Você é <span className="green-text">adaptável</span>?
          </h2>

          <div className="button-container">
            <Button
              className="yes"
              onClick={() => {
                handleOpenModal(true);
              }}
            >
              SIM
            </Button>
            <Button
              className="no"
              onClick={() => {
                handleOpenModal(false);
              }}
            >
              NÃO
            </Button>
          </div>
        </Fade>
      </Container>
    </>
  );
};

export default Quizz;

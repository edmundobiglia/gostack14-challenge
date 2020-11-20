import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

const Container = styled.section`
  padding: 160px 10px;
  background: ${(props) => props.theme.colors.pink};

  h1 {
    font-size: 55px;
    color: ${(props) => props.theme.colors.green};
  }

  p {
    max-width: 1090px;
    width: 100%;
    text-align: right;
    color: ${(props) => props.theme.colors.yellow};
  }

  .ide-screen {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    width: 100%;
    color: white;
    background-color: #2a2c37;
    padding: 160px 60px;
    border-radius: 15px;
    position: relative;
    overflow: hidden;

    .title-bar {
      height: 70px;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: #20232b;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: ${(props) => props.theme.colors.lightgrey};
      font-size: 24px;
      padding-left: 30px;
    }

    .controls {
      position: absolute;
      top: 28px;
      right: 30px;
      display: flex;
      justify-content: space-between;
      width: 70px;

      .circle {
        width: 15px;
        height: 15px;
        border-radius: 50%;
      }

      .circle:nth-child(1) {
        background: #ff605c;
      }
      .circle:nth-child(2) {
        background: #ffbd44;
      }
      .circle:nth-child(3) {
        background: #00ca4e;
      }
    }
  }

  .code {
    font-family: "Fira Code", monospace;
    font-size: 24px;
    width: 100%;
    line-height: 1.3;
  }

  .typing-cursor {
    color: white;
  }
`;

const Pink = styled.span`
  color: ${(props) => props.theme.colors.pink};
`;

const Green = styled.span`
  color: ${(props) => props.theme.colors.green};
`;

const Yellow = styled.span`
  color: ${(props) => props.theme.colors.yellow};
`;

const Blue = styled.span`
  color: ${(props) => props.theme.colors.blue};
`;

const White = styled.span`
  color: #fff;
`;

const Grey = styled.span`
  color: ${(props) => props.theme.colors.lightgrey};
`;

const AdAPPt = () => (
  <Container>
    <Fade cascade={true} className="animation-container" triggerOnce>
      <div className="ide-screen">
        <div className="title-bar">AdAPPt.js</div>
        <div className="controls">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <div className="code">
          <Grey>{"//"} ⚛️ React to life state changes by updating skills 🧠</Grey>
          <br />
          <br />
          <Pink>import </Pink>
          <White>React</White>
          &ensp;<Pink>from</Pink>
          &ensp;
          <Yellow>"react"</Yellow>
          <White>;</White>
          <br />
          <Pink>import </Pink>
          <White>Life, &#123; goToNextLevel &#125;</White>
          &ensp;<Pink>from</Pink>
          &ensp;
          <Yellow>"life"</Yellow>
          <White>;</White>
          <br />
          <Pink>import</Pink>&ensp;
          <White>&#123; Skill, currentSkills, updateSkills &#125;</White>&ensp;
          <Pink>from</Pink>
          &ensp;
          <Yellow>"brain"</Yellow>
          <White>;</White>
          <br />
          <br />
          <Pink>function</Pink> <Green>AdAPPt</Green>
          <White>() &#123;</White>
          <br />
          &ensp;&ensp;&ensp;<Pink>const</Pink>&ensp;<White>[skills, setSkills ]</White>
          &ensp;<Pink>=</Pink>
          &ensp;
          <Green>useState</Green>
          <White>
            ([<Pink>...</Pink>
            <White>currentSkills]</White>);
          </White>
          <br />
          <br />
          &ensp;&ensp;&ensp;
          <Pink>function async</Pink> <Green>adapt</Green>
          <White>() &#123;</White>
          <br />
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<Pink>try</Pink>
          <White> &#123;</White>
          <br />
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<Pink>const</Pink>{" "}
          <White>newSkill</White>{" "}
          <Pink>
            {" "}
            = <strong>new</strong>
          </Pink>{" "}
          <Blue>
            <i>Skill</i>
          </Blue>
          <White>();</White>
          <br />
          <br />
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<Pink>await </Pink>
          <White>newSkill.</White>
          <Green>learn</Green>(<Yellow>"time"</Yellow>, <Yellow>"effort"</Yellow>,{" "}
          <Yellow>"coffee"</Yellow>
          );
          <br />
          <br />
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<Green>setSkills</Green>
          <White>([</White>
          <Pink>...</Pink>
          <White>
            skills, newSkill.skill ]);
            <br />
            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&#125; <Pink>catch</Pink>
            <White> &#123;</White>
            <br />
            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<White>console.</White>
            <Green>log</Green>
            <White>
              (<Yellow>"Keep trying! 💪 You can do it! 🙌"</Yellow>)
            </White>
            <br />
            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&#125;
            <br />
            &ensp;&ensp;&ensp;&#125;
          </White>{" "}
          <br />
          <br />
          &ensp;&ensp;&ensp;<Pink>function</Pink> <Green>progress</Green>
          <White>() &#123;</White>
          <br />
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<Green>updateSkills</Green>
          <White>(skills);</White>
          <br />
          <br />
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<Green>goToNextLevel</Green>
          <White>();</White>
          <br />
          <White>&ensp;&ensp;&ensp;&#125;</White>
          <br />
          <br />
          &ensp;&ensp;&ensp;<Pink>return </Pink>
          <White>(</White>
          <br />
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<White>&lt;&gt;</White>
          <br />
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<White>&lt;</White>
          <Blue>
            <i>Life</i>
          </Blue>{" "}
          <Green>
            <i>onChange</i>
          </Green>
          <Pink>=</Pink>
          <White>&#123;adapt&#125; /&gt;</White>
          <br />
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
          <White>&lt;</White>
          <Pink>button </Pink>
          <Green>
            <i>onClick</i>
          </Green>
          <Pink>=</Pink>
          <White>&#123;progress&#125; </White>
          <White>&gt;Go To Next Level 🚀</White>
          <White>&lt;/</White>
          <Pink>button</Pink>
          <White>&gt;</White>
          <br />
          &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<White>&lt;/&gt;</White>
          <br />
          <White>
            &ensp;&ensp;&ensp;);
            <br />
            &#125;
          </White>
          <br />
          <br />
          <Pink>export default </Pink>
          <White>AdAPPt;</White>
        </div>
      </div>
    </Fade>
  </Container>
);

export default AdAPPt;

// gostack14-expansion-week-challenge

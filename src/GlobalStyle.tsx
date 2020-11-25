import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Fira Code", monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 1000px;
    width: 100%;
    position: relative;
    overflow-x: hidden;
  }

  .animation-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .big-text {
    font-family: "Fira Code", monospace;
    font-size: 65px;
    font-weight: 700;
    letter-spacing: -2px;
    line-height: 1.1;
  }

  .paragraph {
    font-family: "Fira Code", monospace;
    font-size: 28px;
    line-height: 1.6;
    letter-spacing: -1.5px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .not-responsive {
    background: #45eb6e;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    box-sizing: border-box;

    img {
      max-width: 400px; 
      width: 100%;
    }

    p {
      margin-top: 20px;
      color: #6751d4;
      font-size: 21;
    }    
  }
  
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #6751d4;

  }
  
  ::-webkit-scrollbar-thumb {
    background: #45eb6e; 
    border-radius: 8px;
  }
`;

export default GlobalStyle;

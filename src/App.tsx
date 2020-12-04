import React, { useEffect } from "react";

import GlobalStyle from "./styles/GlobalStyle";

import NotResponsiveScreen from "./components/NotResponsiveScreen";
import AdAPPt from "./components/AdAPPt";

import useWindowWidth from "./hooks/useWindowWidth";

import mystique from "./assets/mystique.gif";
import impostor from "./assets/impostor.svg";

function App() {
  const windowWidth = useWindowWidth();

  useEffect(() => {
    const img1 = new Image();
    img1.src = mystique;

    const img2 = new Image();
    img2.src = impostor;
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      {windowWidth < 1200 ? <NotResponsiveScreen /> : <AdAPPt />}
    </div>
  );
}

export default App;

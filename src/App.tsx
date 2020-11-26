import React from "react";

import GlobalStyle from "./styles/GlobalStyle";

import NotResponsiveScreen from "./components/NotResponsiveScreen";
import AdAPPt from "./components/AdAPPt";

import useWindowWidth from "./hooks/useWindowWidth";

function App() {
  const windowWidth = useWindowWidth();

  return (
    <div className="App">
      <GlobalStyle />
      {windowWidth < 1200 ? <NotResponsiveScreen /> : <AdAPPt />}
    </div>
  );
}

export default App;

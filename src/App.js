import React from "react";
import "../src/App.css";
import { Header } from "./Component/Header/Header";
import { GameContainer } from "./Component/Game-container/GameContainer";

function App() {
  return (
    <>
      <Header />
      <GameContainer />
    </>
  );
}

export default App;

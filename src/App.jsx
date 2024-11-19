import { useState, useEffect } from "react";
import audiobgm from "../src/assets/Revara_BGM.mp3";
import "./App.css";

function App() {
  const bgm = new Audio();

  return (
    <div>
      <button
        onClick={() => {
          bgm.src = audiobgm;
          bgm.play();
        }}
      >
        Play
      </button>
    </div>
  );
}

export default App;

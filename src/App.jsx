import { useState, useEffect } from "react";
import audiobgm from "../src/assets/Revara_BGM.mp3";
import "./App.css";

function App() {
  const [showCardCover, setShowCardCover] = useState(true);
  const [showOpenPresentButton, setShowOpenPresentButton] = useState(true);
  const bgm = new Audio();

  return (
    <div className="Card_Container">
      <div className="Card_Cover">
        <div
          className={
            showCardCover
              ? "Card_Cover--Quadrant_TL"
              : "Card_Cover--Quadrant_TL Card_Cover--Quadrant_TL--Open"
          }
        ></div>
        <div
          className={
            showCardCover
              ? "Card_Cover--Quadrant_TR"
              : "Card_Cover--Quadrant_TR Card_Cover--Quadrant_TR--Open"
          }
        ></div>
        <div
          className={
            showCardCover
              ? "Card_Cover--Quadrant_BL"
              : "Card_Cover--Quadrant_BL Card_Cover--Quadrant_BL--Open"
          }
        ></div>
        <div
          className={
            showCardCover
              ? "Card_Cover--Quadrant_BR"
              : "Card_Cover--Quadrant_BR Card_Cover--Quadrant_BR--Open"
          }
        ></div>
      </div>
      <div
        className={
          showCardCover
            ? "Card_Cover--Open_Button"
            : showOpenPresentButton
            ? "Card_Cover--Open_Button Card_Cover--Open_Button--Toggle"
            : "Card_Cover--Open_Button--Inactive"
        }
      >
        <button
          onClick={() => {
            // bgm.src = audiobgm;
            // bgm.play();
            setShowCardCover(false);
            setTimeout(() => {
              setShowOpenPresentButton(false);
            }, 2300);
          }}
        >
          Open Present!
        </button>
      </div>
    </div>
  );
}

export default App;

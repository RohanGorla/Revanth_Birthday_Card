import { useState, useEffect } from "react";
import audiobgm from "../src/assets/Revara_BGM.mp3";
import "./App.css";

function App() {
  const [showCardCover, setShowCardCover] = useState(true);
  const [showOpenPresentButton, setShowOpenPresentButton] = useState(true);
  const [specialCharacter, setSpecialCharacter] = useState(-1);
  const [name, setName] = useState("REVARA");
  const bgm = new Audio();

  function startMainAnimation() {
    setInterval(() => {
      let index = -1;
      const characterInterval = setInterval(() => {
        if (index + 1 !== name.length) {
          index += 1;
          setSpecialCharacter(index);
        } else {
          setSpecialCharacter(-1);
          clearInterval(characterInterval);
        }
      }, 150);
    }, name.length * 150 + 2000);
  }

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
            bgm.src = audiobgm;
            bgm.play();
            setShowCardCover(false);
            setTimeout(() => {
              setShowOpenPresentButton(false);
              setTimeout(() => {
                startMainAnimation();
              }, 1000);
            }, 2300);
          }}
        >
          Open Present!
        </button>
      </div>
      <div className="Card_Main">
        <div className="Card_Name">
          {Array.from(name).map((character, index) => {
            return (
              <span
                key={index}
                className={
                  specialCharacter === index
                    ? "Card_Name--Character Card_Name--SpecialCharacter"
                    : "Card_Name--Character"
                }
              >
                {character}
              </span>
            );
          })}
        </div>
        <div className="Card_Photos"></div>
      </div>
    </div>
  );
}

export default App;

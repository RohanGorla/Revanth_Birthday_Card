import { useState, useEffect } from "react";
import audiobgm from "../src/assets/Revara_BGM_3.0.mp3";
import shades from "../src/assets/Shades_NoBG.png";
import jacket from "../src/assets/Jacket_NoBG.png";
import "./App.css";

function App() {
  const [showCardCover, setShowCardCover] = useState(true);
  const [showOpenPresentButton, setShowOpenPresentButton] = useState(true);
  const [specialCharacter, setSpecialCharacter] = useState(-1);
  const [showMessageBox, setShowMessageBox] = useState(true);
  const [showMessageOne, setShowMessageOne] = useState(false);
  const [showMessageTwo, setShowMessageTwo] = useState(false);
  const [showMessageThree, setShowMessageThree] = useState(false);
  const [showImageOne, setShowImageOne] = useState(false);
  const [showImageTwo, setShowImageTwo] = useState(false);
  const [showInfoCardOne, setShowInfoCardOne] = useState(false);
  const [showInfoCardTwo, setShowInfoCardTwo] = useState(false);
  const [showInfoCardThree, setShowInfoCardThree] = useState(false);
  const [name, setName] = useState("REVARA");
  const bgm = new Audio();

  function startMainAnimation() {
    setShowMessageOne(true);
    setTimeout(() => {
      setShowMessageTwo(true);
      setTimeout(() => {
        setShowMessageThree(true);
      }, 1700);
    }, 1700);
    setTimeout(() => {
      setShowMessageBox(false);
      setInterval(() => {
        setShowImageOne(true);
        setShowInfoCardOne(true);
        setShowInfoCardTwo(true);
        setShowInfoCardThree(true);
        setTimeout(() => {
          setShowInfoCardOne(true);
        }, 12000);
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
    }, 5000);
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
          Open Your Present!
        </button>
      </div>
      <div className="Card_Main">
        <div
          className={showMessageBox ? "Card_Message" : "Card_Message--Inactive"}
        >
          <p
            className={
              showMessageOne ? "Card_Message--Show" : "Card_Message--Hide"
            }
          >
            October 7th, 1995
          </p>
          <p
            className={
              showMessageTwo
                ? "Card_Message--Show Card_Message--Two"
                : "Card_Message--Hide Card_Message--Two"
            }
          >
            The Sea Turned Red
          </p>
          <p
            className={
              showMessageThree ? "Card_Message--Show" : "Card_Message--Hide"
            }
          >
            For The Man...
          </p>
        </div>
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
        <div className="Card_Photos">
          <div
            className={
              showImageOne
                ? "Card_Photos--Image Card_Photos--Image--One"
                : "Card_Photos--Image--Inactive"
            }
          >
            <img src={shades}></img>
          </div>
        </div>
        <div className="Card_InfoCards">
          <div
            className={
              showInfoCardOne
                ? "Card_InfoCard Card_InfoCard--One"
                : "Card_InfoCard--Inactive"
            }
          >
            <span>LIC OFFICER</span>
          </div>
          <div
            className={
              showInfoCardTwo
                ? "Card_InfoCard Card_InfoCard--Two"
                : "Card_InfoCard--Inactive"
            }
          >
            <span>PALASA GANGSTER</span>
          </div>
          <div
            className={
              showInfoCardThree
                ? "Card_InfoCard Card_InfoCard--Three"
                : "Card_InfoCard--Inactive"
            }
          >
            <span>GOVERNMENT OF THE EMPLOYEE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import audiobgm from "../src/assets/Revara_BGM_3.0.mp3";
import shades from "../src/assets/Shades_NoBG.png";
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
  const [showInfoCardOne, setShowInfoCardOne] = useState(false);
  const [showInfoCardTwo, setShowInfoCardTwo] = useState(false);
  const [showInfoCardThree, setShowInfoCardThree] = useState(false);
  const [showInfoCardFour, setShowInfoCardFour] = useState(false);
  const [showInfoCardFive, setShowInfoCardFive] = useState(false);
  const [showInfoCardSix, setShowInfoCardSix] = useState(false);
  const [showCardWish, setShowCardWish] = useState(false);
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
      setShowInfoCardOne(true);
      setShowInfoCardTwo(true);
      setShowInfoCardThree(true);
      setShowInfoCardFour(true);
      setShowInfoCardFive(true);
      setShowInfoCardSix(true);
      setShowCardWish(true);
      setTimeout(() => {
        setShowCardCover(true);
        setTimeout(() => {
          setShowMessageBox(true);
          setShowInfoCardOne(false);
          setShowInfoCardTwo(false);
          setShowInfoCardThree(false);
          setShowInfoCardFour(false);
          setShowInfoCardFive(false);
          setShowInfoCardSix(false);
          setShowCardWish(false);
          setShowImageOne(false);
          setTimeout(() => {
            setShowOpenPresentButton(true);
          }, 2000);
        }, 2000);
      }, 44000);
      setInterval(() => {
        setShowImageOne(true);
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
          showOpenPresentButton
            ? "Card_Cover--Open_Button"
            : "Card_Cover--Open_Button Card_Cover--Open_Button--Toggle"
        }
      >
        <button
          onClick={() => {
            bgm.src = audiobgm;
            bgm.play();
            setShowOpenPresentButton(false);
            setTimeout(() => {
              setShowCardCover(false);
              setTimeout(() => {
                setTimeout(() => {
                  startMainAnimation();
                }, 1000);
              }, 2300);
            }, 500);
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
            All Hail
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
          <div
            className={
              showInfoCardFour
                ? "Card_InfoCard Card_InfoCard--Four"
                : "Card_InfoCard--Inactive"
            }
          >
            <span>OVER 81K VIEWS</span>
          </div>
          <div
            className={
              showInfoCardFive
                ? "Card_InfoCard Card_InfoCard--Five"
                : "Card_InfoCard--Inactive"
            }
          >
            <span>RISING YOUTUBER</span>
          </div>
          <div
            className={
              showInfoCardSix
                ? "Card_InfoCard Card_InfoCard--Six"
                : "Card_InfoCard--Inactive"
            }
          >
            <span>180 SUBSCRIBERS</span>
          </div>
        </div>
        <div className={showCardWish ? "Card_Wish" : "Card_Wish--Inactive"}>
          <p>HAPPY B'DAY</p>
        </div>
      </div>
    </div>
  );
}

export default App;

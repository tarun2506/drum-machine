import React, { useState } from "react";
import "../styles/main.css";
import metroClap from "../audio/metro-booming-type-clap.wav";
import kick from "../audio/jaja.wav";
import snare808 from "../audio/808-snare-drum-1.wav";
import rideCrash from "../audio/ride-crash.wav";
import tom from "../audio/tom.wav";
import snareTrap from "../audio/trap-snare-1.wav";
import snare16 from "../audio/snare-16.wav";
import brightCleanCrash from "../audio/bright-clean-crash.wav";
import high808 from "../audio/high-808-open-hat_100bpm.wav";
function Main() {
  const [displayText, setDisplayText] = useState("");
  const handlePlay = (e) => {
    const text = e.target.innerText;
    const audio = document.getElementById(text);
    audio.play();
    setDisplayText(e.target.getAttribute("id"));
  };

  window.addEventListener("keypress", (e) => {
    let track;
    let text;
    switch (e.key) {
      case "q":
        track = document.getElementById("Q");
        text = track.parentElement.getAttribute("id");
        track.play();
        setDisplayText(text);
        break;
      case "w":
        track = document.getElementById("W");
        text = track.parentElement.getAttribute("id");
        track.play();
        setDisplayText(text);
        break;
      case "e":
        track = document.getElementById("E");
        text = track.parentElement.getAttribute("id");
        track.play();
        setDisplayText(text);
        break;
      case "a":
        track = document.getElementById("A");
        text = track.parentElement.getAttribute("id");
        track.play();
        setDisplayText(text);
        break;
      case "s":
        track = document.getElementById("S");
        text = track.parentElement.getAttribute("id");
        track.play();
        setDisplayText(text);
        break;
      case "d":
        track = document.getElementById("D");
        text = track.parentElement.getAttribute("id");
        track.play();
        setDisplayText(text);
        break;
      case "z":
        track = document.getElementById("Z");
        text = track.parentElement.getAttribute("id");
        track.play();
        setDisplayText(text);
        break;
      case "x":
        track = document.getElementById("X");
        text = track.parentElement.getAttribute("id");
        track.play();
        setDisplayText(text);
        break;
      case "c":
        track = document.getElementById("C");
        text = track.parentElement.getAttribute("id");
        track.play();
        setDisplayText(text);
        break;
      default:
        return null;
    }
  });

  return (
    <>
      <div id="drum-machine">
        <div className="buttons">
          <div className="drum-pad" id="heater-1" onClick={handlePlay}>
            Q<audio src={metroClap} className="clip" id="Q"></audio>
          </div>
          <div className="drum-pad" id="heater-2" onClick={handlePlay}>
            W<audio src={kick} className="clip" id="W"></audio>
          </div>
          <div className="drum-pad" id="heater-3" onClick={handlePlay}>
            E<audio src={snare808} className="clip" id="E"></audio>
          </div>
          <div className="drum-pad" id="heater-4" onClick={handlePlay}>
            A<audio src={rideCrash} className="clip" id="A"></audio>
          </div>
          <div className="drum-pad" id="clap" onClick={handlePlay}>
            S<audio src={tom} className="clip" id="S"></audio>
          </div>
          <div className="drum-pad" id="open-hh" onClick={handlePlay}>
            D<audio src={snareTrap} className="clip" id="D"></audio>
          </div>
          <div className="drum-pad" id="kick-hat" onClick={handlePlay}>
            Z<audio src={snare16} className="clip" id="Z"></audio>
          </div>
          <div className="drum-pad" id="kick" onClick={handlePlay}>
            X<audio src={brightCleanCrash} className="clip" id="X"></audio>
          </div>
          <div className="drum-pad" id="closed-hh" onClick={handlePlay}>
            C<audio src={high808} className="clip" id="C"></audio>
          </div>
        </div>
        <div id="display">
          <h1 className="displayText">{displayText}</h1>
        </div>
      </div>
    </>
  );
}

export default Main;

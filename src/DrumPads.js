import React from "react";

function DrumPads({ handleClick, volume }) {
  const handlePadClick = (event) => {
    const audioElement = event.target.querySelector("audio");
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.volume = volume / 100;
      audioElement.play();
    }
  };

  const handleCombinedClick = (event) => {
    handleClick(event);
    handlePadClick(event);
  };

  return (
    <div id="drum-pads">
      <div className="row">
        <div className="drum-pad" id="Heater 1" onClick={handleCombinedClick}>
          <audio
            className="clip"
            id="Q"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
          ></audio>
          Q
        </div>
        <div className="drum-pad" id="Heater 2" onClick={handleCombinedClick}>
          <audio
            className="clip"
            id="W"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
          ></audio>
          W
        </div>
        <div className="drum-pad" id="Heater 3" onClick={handleCombinedClick}>
          <audio
            className="clip"
            id="E"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
          ></audio>
          E
        </div>
      </div>
      <div className="row">
        <div className="drum-pad" id="Heater 4" onClick={handleCombinedClick}>
          <audio
            className="clip"
            id="A"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
          ></audio>
          A
        </div>
        <div className="drum-pad" id="Clap" onClick={handleCombinedClick}>
          <audio
            className="clip"
            id="S"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
          ></audio>
          S
        </div>
        <div className="drum-pad" id="Open HH" onClick={handleCombinedClick}>
          <audio
            className="clip"
            id="D"
            src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
          ></audio>
          D
        </div>
      </div>
      <div className="row">
        <div
          className="drum-pad"
          id="Kick n' Hat"
          onClick={handleCombinedClick}
        >
          <audio
            className="clip"
            id="Z"
            src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
          ></audio>
          Z
        </div>
        <div className="drum-pad" id="Kick" onClick={handleCombinedClick}>
          <audio
            className="clip"
            id="X"
            src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
          ></audio>
          X
        </div>
        <div className="drum-pad" id="Closed HH" onClick={handleCombinedClick}>
          <audio
            className="clip"
            id="C"
            src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
          ></audio>
          C
        </div>
      </div>
    </div>
  );
}

export default DrumPads;

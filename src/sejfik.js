import React, { useEffect, useState } from "react";
import DrumPads from "./DrumPads";
import SideBar from "./SideBar";

function DrumMachine() {
  const [soundEffect, setSoundEffect] = useState("");
  const [volume, setVolume] = useState(50);

  const handleKeyPress = (event) => {
    event.preventDefault();
    const audioElement = document.getElementById(event.key.toUpperCase());
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.play();
      setSoundEffect(audioElement.parentElement.id);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleClick = (event) => {
    const audioElement = event.target.querySelector("audio");
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.play();
      setSoundEffect(audioElement.parentElement.id);
    }
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);

    const audioElements = document.querySelectorAll("audio");
    audioElements.forEach((audio) => {
      audio.volume = newVolume / 100;
    });
  };

  return (
    <div id="drum-machine">
      <DrumPads handleClick={handleClick} volume={volume} />
      <SideBar
        soundEffect={soundEffect}
        volume={volume}
        onVolumeChange={handleVolumeChange}
      />
    </div>
  );
}

export default DrumMachine;

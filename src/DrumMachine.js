import React, { useEffect, useState } from "react";
import DrumPads from "./DrumPads";
import SideBar from "./SideBar";

function DrumMachine() {
  const [soundEffect, setSoundEffect] = useState("");
  const [volume, setVolume] = useState(50);

  const handleKeyDown = (event) => {
    const audioElement = document.getElementById(event.key.toUpperCase());
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.play();
      setSoundEffect(audioElement.parentElement.id);
      audioElement.parentElement.classList.add("hover-effect");
    }
  };

  const handleKeyUp = (event) => {
    const audioElement = document.getElementById(event.key.toUpperCase());
    if (audioElement) {
      audioElement.parentElement.classList.remove("hover-effect");
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
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

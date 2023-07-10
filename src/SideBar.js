import React from "react";

function SideBar({ soundEffect, volume, onVolumeChange }) {
  return (
    <div id="side-bar">
      <div id="made-by">Made by Jakub Łuczak</div>
      <div id="display">{soundEffect}</div>
      <input
        type="range"
        id="volume"
        min="0"
        max="100"
        value={volume}
        onChange={onVolumeChange}
      />
    </div>
  );
}

export default SideBar;

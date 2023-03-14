// AudioPlayer.js
// Music player containing playback controls, and track progress.

import DisplayTrack from "./DisplayTrack";
import ProgressBar from "./ProgressBar";
import Controls from "./Controls";

function AudioPlayer() {
  return (
    <div className="audio-player">
      <div className="inner">
        <DisplayTrack />
        <Controls />
        <ProgressBar />
      </div>
    </div>
  );
}

export default AudioPlayer;

// AudioPlayer.js
// Music player containing playback controls, and track progress.

import { useState } from "react";
import { tracks } from "../data/tracks";
import DisplayTrack from "./DisplayTrack";
import ProgressBar from "./ProgressBar";
import Controls from "./Controls";

const AudioPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  return (
    <div className="audio-player">
      <div className="inner">
        <DisplayTrack currentTrack={currentTrack} />
        <Controls />
        <ProgressBar />
      </div>
    </div>
  );
};

export default AudioPlayer;

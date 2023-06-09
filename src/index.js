import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import AudioPlayer from "./components/AudioPlayer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AudioPlayer />
  </StrictMode>
);

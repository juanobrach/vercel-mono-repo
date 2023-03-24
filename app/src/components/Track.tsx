// export a track component that takes in a track object and renders it
// import the component into the App component and render it

// Path: app/src/components/Track.tsx

import type React from "react";
import type { Track } from "../../../server/generated/client";

interface TrackProps {
  track: Track;
}

export const TrackComponent: React.FC<TrackProps> = ({ track }) => {
  return (
    <div>
      <h3>{track.title}</h3>
      <p>{track.previewSong}</p>
    </div>
  );
};

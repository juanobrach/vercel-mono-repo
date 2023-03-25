// export a track component that takes in a track object and renders it
// import the component into the App component and render it

// Path: app/src/components/Track.tsx

import type React from 'react';
import type { Track } from '../../../server/generated/client';
import { serverPath } from '../constants';
import styled from 'styled-components';

interface TrackProps {
  tracks: Track[];
}

// create a grid container for the tracks
// create a grid item for each track
// create a styled component for each element of the track
// render the track

const Styles = {
  tracksContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridTemplateRows: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridGap: '10px',
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
  },
  trackContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
    margin: '10px',
  },
  trackImage: {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    margin: '10px',
    maxWidth: '150px',
    maxHeight: '150px',
  },
  trackTitle: {
    fontSize: '1.5rem',
    fontWeight: 500,
    margin: '10px',
  },
  trackPreview: {
    fontSize: '1rem',
    fontWeight: 400,
    margin: '10px',
  },
  trackAudio: {
    width: '100%',
    height: '100%',
    margin: '10px',
  },
};

export const TracksComponent: React.FC<TrackProps> = ({ tracks }) => {
  return (
    <ul style={Styles.tracksContainer}>
      {tracks.map((track) => {
        return (
          <li style={Styles.trackContainer}>
            <img
              style={Styles.trackImage}
              src={`${serverPath}/images/${track.beatportTrackId}.jpg`}
            />
            <h2>{track.title}</h2>
            {/* <TrackPreview>{track.previewSong}</TrackPreview> */}
            <audio controls>
              <source
                src={`${serverPath}/tracks/${track.beatportTrackId}.wav`}
                type='audio/mpeg'
              />
            </audio>
          </li>
        );
      })}
    </ul>
  );
};

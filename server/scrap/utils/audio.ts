import request from 'request';
import axios from 'axios';
import fs from 'fs';
import { Lame } from 'node-lame';

const getBase64FromUrl = async (url: string) => {
  try {
    var result = await axios
      .get(url, {
        responseType: 'arraybuffer',
      })
      .then((response) =>
        Buffer.from(response.data, 'binary').toString('base64')
      );

    return { data: result };
  } catch (e) {
    return { error: e };
  }
};

const saveToWave = async (base64: string, fileName: string) => {
  const decoder = await new Lame({
    output: `./scrap/cached/tracks/${fileName}.wav`,
    bitrate: 320,
  }).setBuffer(Buffer.from(base64, 'base64'));

  await decoder.decode();
};

// Save mp3 from url to file
const saveMp3 = async ({
  trackId,
  previewSongUrl,
}: {
  trackId: string;
  previewSongUrl: string;
}) => {
  const { data, error } = await getBase64FromUrl(previewSongUrl);
  if (!data) return;

  await saveToWave(data, trackId);
  return null;
};

export { saveMp3 };

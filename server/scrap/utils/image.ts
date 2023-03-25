import axios from 'axios';
import fs from 'fs';

// save image from url to file
const saveImage = async ({
  trackId,
  artworkUrl,
}: {
  trackId: string;
  artworkUrl: string;
}) => {
  const getFileFromAxios = async (url: string) => {
    const response = await axios({
      method: 'GET',
      url,
      responseType: 'stream',
    });
    return response.data;
  };
  const file = await getFileFromAxios(artworkUrl);
  file.pipe(fs.createWriteStream(`./scrap/cached/images/${trackId}.jpg`));
  return;
};

export { saveImage };

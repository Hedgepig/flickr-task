import { paramsToUrl } from '../url';

import { url, key, secret } from '../flickr';

import fetch from 'node-fetch';

const makeUrl = (id, secret, serverId, farmId) => `http://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}.jpg`;

const transformPhoto = ({ id, owner, secret, server, farm, title }) => ({
  src: makeUrl(id, secret, server, farm),
  title,
})

export const getPopularPhotos = async () => {
  const params = paramsToUrl({
    secret,
    method: 'flickr.photos.getRecent',
    api_key: key,
    nojsoncallback: 1,
    format: 'json',
  });
  const response = await fetch(`${url}?${params}`);
  const json = await response.json();
  return {
    images: json.photos.photo.map(transformPhoto),
  }
}

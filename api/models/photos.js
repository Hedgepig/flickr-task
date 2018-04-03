import { find, get } from 'lodash';

import { makeRequest } from '../flickr';

const makePhotoUrl = ({ id, secret, server, farm }) => `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;

const getPhotoInfo  = async (id) => {
  const json = await makeRequest('flickr.photos.getInfo', { photo_id: id });
  const info = {
    owner: {
      ...json.photo.owner,
      url: `https://www.flickr.com/people/${json.photo.owner.nsid}`,
    },
    postedDate: parseInt(json.photo.dates.posted, 10) * 1000,
    photoPage: find(json.photo.urls.url, { type: 'photopage' }),
  };
  return info;
}

const transformPhoto = async ({ id, secret, server, farm, title }) => ({
  title,
  src: makePhotoUrl({ id, secret, server, farm }),
  ...(await getPhotoInfo(id)),
});

export const getRecentPhotos = async () => {
  const json = await makeRequest('flickr.photos.getRecent');
  const images = await Promise.all(json.photos.photo.map(transformPhoto));
  return { images };
}

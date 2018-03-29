import { makeRequest } from '../flickr';

const makePhotoUrl = ({ id, secret, server, farm }) => `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;

const getPhotoInfo  = async (id) => {
  const json = await makeRequest('flickr.photos.getInfo', { photo_id: id });
  // console.log(JSON.stringify(json, null, 2));
  return {
    owner: json.photo.owner,
    postedDate: parseInt(json.photo.dates.posted, 10) * 1000,
  }
}

const transformPhoto = async ({ id, owner, secret, server, farm, title }) => ({
  title,
  src: makePhotoUrl({ id, secret, server, farm }),
  ...(await getPhotoInfo(id)),
});

export const getRecentPhotos = async () => {
  const json = await makeRequest('flickr.photos.getRecent');
  const images = await Promise.all(json.photos.photo.map(transformPhoto));
  return { images };
}

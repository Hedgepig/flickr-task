import { makeRequest } from '../flickr';

const makePhotoUrl = ({ id, secret, server, farm }) => `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;

const transformPhoto = async ({ id, owner, secret, server, farm, title }) => ({
  title,
  src: makePhotoUrl({ id, secret, server, farm }),
  ...(await getPhotoInfo(id)),
});

const getPhotoInfo  = async (id) => {
  const json = await makeRequest('flickr.photos.getInfo', { photo_id: id });
  return {
    owner: json.photo.owner,
  }
}

export const getRecentPhotos = async () => {
  const json = await makeRequest('flickr.photos.getRecent');
  const images = await Promise.all(json.photos.photo.map(transformPhoto));
  console.log(JSON.stringify(json, null, 2))
  return { images };
}

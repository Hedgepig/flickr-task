/**
 * This File contains api calls that deal with retreiving photo data.
 * 
 */

import { find, get, fromPairs, camelCase } from 'lodash';

import { makeRequest } from '../flickr';

const makePhotoUrl = ({ id, secret, server, farm }) => `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;

/**
 * Get image urls for the image
 * 
 * @param {id} id of the image
 * @returns {object} in the shape of `{ label: source }`
 */
const getPhotoSizes = async (id) => {
  const json = await makeRequest('flickr.photos.getSizes', { photo_id: id });
  return fromPairs(json.sizes.size.map(({ label, source }) => [camelCase(label), source]));
};

/**
 * Get the info of a flickr image
 * 
 * @param {object: { id: string }} id 
 */
const getPhotoInfo  = async ({ id }) => {
  const jsonInfo = await makeRequest('flickr.photos.getInfo', { photo_id: id });
  const jsonImageSizes = await getPhotoSizes(id);
  const info = {
    title: jsonInfo.photo.title._content,
    sources: jsonImageSizes,
    photoPage: find(jsonInfo.photo.urls.url, { type: 'photopage' }),
    postedDate: parseInt(jsonInfo.photo.dates.posted, 10) * 1000,
    owner: {
      ...jsonInfo.photo.owner,
      url: `https://www.flickr.com/people/${jsonInfo.photo.owner.nsid}`,
    },
  };
  return info;
}

/**
 * Get the details of a photo by id
 * 
 * @param {string} id 
 */
export const getPhotoById = async (id) => {
  return getPhotoInfo(id);
}

/**
 * Get the most recent photos
 */
export const getRecentPhotos = async () => {
  const json = await makeRequest('flickr.photos.getRecent');
  const images = await Promise.all(json.photos.photo.map(getPhotoInfo));
  return { images };
}

/**
 * Search photos
 */
export const searchPhotos = async (text) => {
  const json = await makeRequest('flickr.photos.search', { text })
  const images = await Promise.all(json.photos.photo.map(getPhotoInfo));
  return { images };
}

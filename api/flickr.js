import { isNil } from 'lodash';
import nodeFetch from 'node-fetch';

import { paramsToUrl } from './url';

export const key = 'ebca2e3419f50aeb4587bab3f3656141';
export const url = 'https://api.flickr.com/services/rest/';

const fetch = isNil(fetch) ? nodeFetch : window.fetch;

const flickrParams = {
  format: 'json',
  api_key: key,
  nojsoncallback: 1,
}

/**
 * 
 * @param {string} method the type of request being made, e.g. flickr.photos.getRecent
 * @param {object} extraParams any extra params to be added to the request 'get' method
 */
export async function makeRequest(method, extraParams={}) {
  const params = paramsToUrl({
    ...flickrParams,
    ...extraParams,
    method,
  });
  const response = await fetch(`${url}?${params}`);
  return response.json();
}

/**
 * Get the source href for the image, if it doesn't exist for that size, 'original' will be chosen
 *
 * @param {object} sources an object containing the src href for the various image sizes
 * @param {string} size the size of the image
 */
export function getSourceBySize(sources, size) {
  return isNil(sources[size]) ? sources.original : sources[size];
}

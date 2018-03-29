import { isNil } from 'lodash';
import nodeFetch from 'node-fetch';

import { paramsToUrl } from './url';

export const key = 'ebca2e3419f50aeb4587bab3f3656141';
export const secret = '994626d7b70c3560';
export const url = 'https://api.flickr.com/services/rest/';

const fetch = isNil(fetch) ? nodeFetch : window.fetch;

const flickrParams = {
  format: 'json',
  api_key: key,
  nojsoncallback: 1,
}

export async function makeRequest(method, extraParams={}) {
  const params = paramsToUrl({
    ...flickrParams,
    ...extraParams,
    method,
  });
  const response = await fetch(`${url}?${params}`);
  return response.json();
}
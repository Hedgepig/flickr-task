import { toPairs, flow } from 'lodash';
import { map, join } from 'lodash/fp';

/**
 * Convert a params object to a url section
 */
export const paramsToUrl = flow(
  toPairs,
  map(([key, val]) => `${key}=${val}`),
  join('&'),
);

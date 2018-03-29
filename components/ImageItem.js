import React from 'react';

import { string } from 'prop-types'

const ImageItem = ({ src, title, author }) => (
  <div>
    Image
  </div>
);

ImageItem.propTypes = {
  src: string.isRequired,
  title: string.isRequired,
  author: string.isRequired,
}

export default ImageItem;

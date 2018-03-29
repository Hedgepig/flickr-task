import React from 'react';

import { shape, arrayOf } from 'prop-types';

import ImageItem from './ImageItem';

const ImageList = ({ images }) => (
  <div>
    { images.map(({ src, title, author }) => (
      <ImageItem
        src={src}
        title={title}
        author={author}
      />
    ))}
  </div>
);

ImageList.propTypes = {
  images: arrayOf(shape(ImageItem.propTypes)),
};

export default ImageList;

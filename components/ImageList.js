import React from 'react';

import { shape, arrayOf } from 'prop-types';

import ImageItem from './ImageItem';

const ImageList = ({ images }) => (
  <div>
    <style jsx>{`
      .image_item {
        margin-bottom: 15px;
      }
    `}
    </style>
    { images.map(({ ...props }) => (
      <div className="image_item">
        <ImageItem {...props} />
      </div>
    ))}
  </div>
);

ImageList.propTypes = {
  images: arrayOf(shape(ImageItem.propTypes)),
};

export default ImageList;

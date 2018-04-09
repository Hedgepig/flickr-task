import React from 'react';

import ImageInfo from './ImageInfo';

import { getSourceBySize } from '../api/flickr';

const ImageModal = ({ owner, sources, postedDate, photoPage }) => (
  <div>
    <style jsx>{`
      .image_info {
        margin: auto;
        width: 800px;
      }
      .image {
        margin-top: 20px;
        background-image: url('${getSourceBySize(sources, 'large')}');
        width: 100%;
        height: 500px;
        background-size: cover;
      }
    `}
    </style>
    <div>
      <div className="image_info">
        <ImageInfo
          postedDate={postedDate}
          photoPage={photoPage}
          owner={owner}
        />
      </div>
      <div style={{ clear: 'both' }} />
      <div className="image" />
    </div>
  </div>
);

export default ImageModal;

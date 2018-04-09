import React from 'react';

import { string, func } from 'prop-types';

const Thumb = ({ src, title, onViewImage }) => (
  <div>
    <style jsx>{`
      .image_container {
        width: 200px;
        height: 150px;
        margin-right: 15px;
        background-image: url("${src}");
        background-size: cover;
        cursor: pointer;
      }
    `}
    </style>
    <div
      className="image_container"
      onClick={onViewImage}
    />
  </div>
);

Thumb.propTypes = {
  src: string.isRequired,
  title: string.isRequired,
  onViewImage: func.isRequired,
};

export default Thumb;

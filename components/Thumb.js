import React from 'react';

const Thumb = ({ src, title }) => (
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
    <div className="image_container" />
  </div>
);

export default Thumb;

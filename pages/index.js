import React from 'react';

import ImageList from '../components/ImageList';

import { getRecentPhotos } from '../api/models/photos';

const Index = ({ images }) => (
  <div>
    <style jsx>{`
      #container {
        width: 800;
        margin: auto;
      }
    `}
    </style>
    <div id="container">
      <ImageList images={images} />
    </div>
  </div>
);

Index.getInitialProps = async ({ req }) => getRecentPhotos();

export default Index;

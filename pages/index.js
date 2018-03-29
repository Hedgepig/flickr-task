import React from 'react';

import ImageList from '../components/ImageList';

import { getPopularPhotos } from '../api/models/photos';

const Index = ({ images }) => (
  <div>
    <ImageList images={images} />
  </div>
);

Index.getInitialProps = async ({ req }) => getRecentPhotos();

export default Index;

import React from 'react';

import Layout from '../components/Layout';

import ImageList from '../components/ImageList';

import { getRecentPhotos } from '../api/models/photos';

const Index = ({ images }) => (
  <Layout>
    <ImageList images={images} />
  </Layout>
);

/**
 * Data is loaded here
 */
Index.getInitialProps = async () => getRecentPhotos();

Index.propTypes = ImageList.propTypes;

export default Index;

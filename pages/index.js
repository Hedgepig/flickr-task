import React from 'react';

import Layout from '../components/Layout';

import SearchBar from '../components/SearchBar';
import ImageList from '../components/ImageList';

import { getRecentPhotos } from '../api/models/photos';

const Index = ({ images }) => (
  <Layout>
    <div>
      <h1>Most Recent Images</h1>
      <SearchBar />
      <ImageList images={images} />
    </div>
  </Layout>
);

/**
 * Data is loaded here
 */
Index.getInitialProps = async () => getRecentPhotos();

Index.propTypes = ImageList.propTypes;

export default Index;

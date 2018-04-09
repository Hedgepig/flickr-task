import React from 'react';

import { isNil } from 'lodash';

import Layout from '../components/Layout';

import ImageList from '../components/ImageList';
import SearchBar from '../components/SearchBar';

import { searchPhotos } from '../api/models/photos';

const Search = ({ images = [] }) => (
  <Layout>
    <div>
      <h1>Search Results</h1>
      <SearchBar />
      { images.length === 0 ? 'No images to show, try a different search term' : <ImageList images={images} /> }
    </div>
  </Layout>
);

Search.getInitialProps = async ({ query }) => {
  if (isNil(query.searchTerms)) {
    return [];
  }
  return await searchPhotos(query.searchTerms);
}

export default Search;

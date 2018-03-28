import React from 'react';

import ImageRow from '../components/ImageRow';

const Index = ({ images }) => (
  <div>
    <ImageRow />
  </div>
);

/*
Index.getInitialProps = async ({ req }) => {
  const key = 'ebca2e3419f50aeb4587bab3f3656141';
  const secret = '994626d7b70c3560';
  const url = 'api.flickr.com';
  const params = {
    api_key: key,
    nojsoncallback: 1,
    format: 'json',
    method: 'flickr.photos.getRecent',
  };
  fetch()

};
// */

export default Index;

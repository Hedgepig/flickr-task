import React from 'react';

import Head from 'next/head';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ImageList from '../components/ImageList';

import { getRecentPhotos } from '../api/models/photos';

const Index = ({ images }) => (
  <MuiThemeProvider>
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" /> 
      </Head>
      <style global jsx>{`
        body {
          font-family: 'Roboto', sans-serif
        }
      `}
      </style>
      <div id="container">
        <ImageList images={images} />
      </div>
    </div>
  </MuiThemeProvider>
);

/**
 * Data is loaded here
 */
Index.getInitialProps = async () => getRecentPhotos();

Index.propTypes = ImageList.propTypes;

export default Index;

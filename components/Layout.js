import Head from 'next/head';

import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Layout = ({ ...props, children }) => (
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
        { React.cloneElement(children, props) }  
      </div>
    </div>
  </MuiThemeProvider>
);

export default Layout;

import Head from 'next/head';
import Link from 'next/link';

import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Layout = ({ ...props, children }) => (
  <MuiThemeProvider>
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" /> 
      </Head>
      <style jsx>{`
        a {
          display: inline-block;
          margin-right: 10px;
        }
      `}
      </style>
      <style global jsx>{`
        body {
          font-family: 'Roboto', sans-serif
        }
      `}
      </style>
      <div id="container">
        <Link href="/">
          <a>Recent</a>
        </Link>
        <Link href="/search">
          <a>Search</a>
        </Link>
        { React.cloneElement(children, props) }  
      </div>
    </div>
  </MuiThemeProvider>
);

export default Layout;

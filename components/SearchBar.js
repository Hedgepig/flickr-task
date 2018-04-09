import Router from 'next/router';

import React from 'react';

import { withStateHandlers, withProps, compose } from 'recompose';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/RaisedButton';

const withSearchState = withStateHandlers(
  {
    searchTerms: '',
  },
  {
    onSearchChange: () => searchTerms => ({ searchTerms }),
  },
);

const withSearch = withProps(({ searchTerms }) => ({
  onSearch: () => {
    Router.push({
      pathname: '/search',
      query: { searchTerms },
    });
  },
}));

const withApi = compose(
  withSearchState,
  withSearch,
);

const SearchBar = ({ searchTerms, onSearchChange, onSearch }) => (
  <div>
    <style jsx>{`
      .search_bar {
        margin-bottom: 20px;
      }
    `}
    </style>
    <div className="search_bar">
      <TextField
        floatingLabelText="Enter your search terms here"
        value={searchTerms}
        onChange={(e) => { onSearchChange(e.target.value); }}
      />
      <Button onClick={onSearch}>Search</Button>
    </div>
  </div>
);

export default withApi(SearchBar);

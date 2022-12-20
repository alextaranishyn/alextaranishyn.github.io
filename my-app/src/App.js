import logo from './logo.svg';
import './App.css';
import algoliasearch from 'algoliasearch/lite';
import React, { Component } from 'react';
import {
    InstantSearch,
    Hits,
    SearchBox,
    Pagination,
    Highlight,
    ClearRefinements,
    RefinementList,
    Configure,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';

function App() {
  return (
      <div className="ais-InstantSearch">
        <h1>React InstantSearch e-commerce demo</h1>
        <InstantSearch indexName="crawler_testcrawler" searchClient={searchClient}>
          <div className="left-panel">
            <ClearRefinements />
            <h2>Brands</h2>
            <ul attribute="brand">
                <li attribute="brand">test</li>
                <li attribute="brand">test</li>
                <li attribute="brand">test</li>
            </ul>
            <Configure hitsPerPage={8} />
          </div>
          <div className="right-panel">
            <SearchBox />
            <Hits hitComponent={Hit} />
            <Pagination />
          </div>
        </InstantSearch>
      </div>
  );
}

function Hit(props) {
  return (
      <div>
        <img src={props.hit.image} align="left" alt={props.hit.name} />
        <div className="hit-name">
          <Highlight attribute="name" hit={props.hit} />
        </div>
        <div className="hit-description">
          <Highlight attribute="description" hit={props.hit} />
        </div>
        <div className="hit-price">${props.hit.price}</div>
      </div>
  );
}

export default App;
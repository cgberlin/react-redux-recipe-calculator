import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import store from '../index'
import SearchRandom from './random-recipe-search'
import SearchResponse from './ingredient-search-response'

const RandomContainer = (props) =>{
  return (
    <div>
      <SearchRandom />
      <SearchResponse />
    </div>
  );
}
export default RandomContainer;

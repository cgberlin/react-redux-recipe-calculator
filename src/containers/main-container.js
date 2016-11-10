import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import store from '../index'
import SearchForm from './recipe-search-form'
import SearchResponse from './ingredient-search-response'

const MainContainer = (props) =>{
  return (
    <div>
      <SearchForm />
      <SearchResponse />
    </div>
  );
}
export default MainContainer;

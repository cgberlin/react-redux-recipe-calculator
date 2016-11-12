import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import store from '../index'
var actions = require('../actions/index');

class SearchRandom extends Component{
  FetchRandom(e) {
    this.props.dispatch(actions.fetchByRandom());
  }
  render() {
    return (
      <div className = "search-random-recipe">
        <button type = "button" onClick={() => this.FetchRandom()}> Random! </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    results: state
  }
};

export default connect(mapStateToProps)(SearchRandom);

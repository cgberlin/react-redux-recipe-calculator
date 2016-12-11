import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import store from '../index'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IngredientList from './ingredient-list'

class SearchResponse extends Component{
  render() {
    var recipe = this.props.Response;
    var title = recipe.title;
    var imageSrc = recipe.image;
    var instructions = recipe.instructions;
    var cardStyle = {
        
    }
    return (
      <div id = "response-card">
        <Card style = {cardStyle}>
            <CardMedia overlay={<CardTitle title={title} />}>
              <img src={imageSrc} />
            </CardMedia>
            <CardText>
              {instructions}
              <IngredientList />
            </CardText>
            <div />
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Response : state.recipe
  };
};

export default connect(mapStateToProps)(SearchResponse);

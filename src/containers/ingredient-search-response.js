import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import store from '../index'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IngredientList from './ingredient-list'

class SearchResponse extends Component{
  constructor(props) {
    super(props);
    this.state = {opacity: 0};
  }
  render() {
    var recipe = this.props.Response;
    var title = recipe.title;
    var imageSrc = recipe.image;
    var instructions = recipe.instructions;
    var cardStyle = {
       opacity:this.state.opacity
    }
    return (
      <div id = "response-card">
        <Card style = {cardStyle}>
            <CardMedia overlay={<CardTitle title={title} />}>
              <img src={imageSrc} onLoad = {() => this.setState({opacity: 1})}/>
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo } = this.props;
    return (
      <div>
        <div data-testid="name-card" value={ cardName }>{cardName}</div>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card" value={ cardDescription }>{cardDescription}</p>
        <div data-testid="attr1-card" value={ cardAttr1 }>{cardAttr1}</div>
        <div data-testid="attr2-card" value={ cardAttr2 }>{cardAttr2}</div>
        <div data-testid="attr3-card" value={ cardAttr3 }>{cardAttr3}</div>
        <div data-testid="rare-card" value={ cardRare }>{cardRare}</div>
        {cardTrunfo ? <div data-testid="trunfo-card">Super Trunfo</div> : null }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;

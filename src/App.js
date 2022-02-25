import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.isSaveButtonDisabled = this.isSaveButtonDisabled.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.isSaveButtonDisabled);
  }

  isSaveButtonDisabled() {
    const tetoAttrTotal = 210;
    const tetoAttrIndv = 90;
    this.setState((prev) => ({
      isSaveButtonDisabled: prev.cardName.length === 0
      || prev.cardDescription.length === 0
      || prev.cardImage.length === 0
      || prev.cardRare.length === 0
      || prev.cardAttr1 > tetoAttrIndv
      || prev.cardAttr2 > tetoAttrIndv
      || prev.cardAttr3 > tetoAttrIndv
      || parseInt(prev.cardAttr1, 10) + parseInt(prev.cardAttr2, 10)
        + parseInt(prev.cardAttr3, 10) > tetoAttrTotal
      || prev.cardAttr1 < 0
      || prev.cardAttr2 < 0
      || prev.cardAttr3 < 0,
    }));
  }

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled } = this.state;

    return (
      <div>
        {console.log(cardAttr1.typeof)}
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;

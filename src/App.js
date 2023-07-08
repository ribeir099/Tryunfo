import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };
  }

  onSaveButtonClick = (valor) => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = valor;
    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    const { cards } = this.state;
    const newCards = [...cards, card];
    const trunfo = newCards.some((item) => item.cardTrunfo === true);

    this.setState(() => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: trunfo,
      isSaveButtonDisabled: true,
      cards: newCards,
    }));
  }

  filedForms = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const possiblePoints = 210;
    const totalPoints = possiblePoints
    - (parseInt(cardAttr1, 10) + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10));
    const maxAtributePoints = 90;
    const maxPoints = (totalPoints >= 0
      && (cardAttr1 <= maxAtributePoints && cardAttr1 >= 0)
      && (cardAttr2 <= maxAtributePoints && cardAttr2 >= 0)
      && (cardAttr3 <= maxAtributePoints && cardAttr3 >= 0)
    );
    if (
      cardName !== ''
      && cardDescription !== ''
      && maxPoints
      && cardImage !== ''
      && cardRare !== ''
    ) return this.setState({ isSaveButtonDisabled: false });
    this.setState({ isSaveButtonDisabled: true });
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.filedForms);
  }

  verifyTrunfo = () => {
    const { cards } = this.state;
    this.setState({
      hasTrunfo: cards.some((card) => card.cardTrunfo === true),
    });
  };

  deleteCard = (name) => {
    this.setState((prevState) => ({
      cards: prevState.cards.filter((card) => card.cardName !== name),
    }), () => this.verifyTrunfo());
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      cards,
    } = this.state;
    return (
      <div id="create-card">
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          filedForms={ this.filedForms }
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
          deleteCard={ this.deleteCard }
        />
        <div id="baralho">
          {cards.map((carta) => (
            <div className="card-baralho" key={ carta.cardName }>
              <Card
                cardName={ carta.cardName }
                cardDescription={ carta.cardDescription }
                cardAttr1={ carta.cardAttr1 }
                cardAttr2={ carta.cardAttr2 }
                cardAttr3={ carta.cardAttr3 }
                cardImage={ carta.cardImage }
                cardRare={ carta.cardRare }
                cardTrunfo={ carta.cardTrunfo }
                deleteCard={ this.deleteCard }
              />
              <button
                type="button"
                data-testid="delete-button"
                onClick={ () => this.deleteCard(carta.cardName) }
              >
                Excluir
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;

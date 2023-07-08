import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      onInputChange,
      onSaveButtonClick,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.props;

    const possiblePoints = 210;
    const totalPoints = possiblePoints
    - (parseInt(cardAttr1, 10) + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10));
    const maxAtributePoints = 90;
    const maxPoints = (totalPoints >= 0
      && (cardAttr1 <= maxAtributePoints && cardAttr1 >= 0)
      && (cardAttr2 <= maxAtributePoints && cardAttr2 >= 0)
      && (cardAttr3 <= maxAtributePoints && cardAttr3 >= 0)
    );

    const inputTrumfo = (
      <label htmlFor="trunfo-input">
        Super Trunfo:
        {' '}
        <input
          data-testid="trunfo-input"
          type="checkbox"
          name="cardTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </label>);

    return (
      <form>
        <label htmlFor="name-input">
          Nome:
          {' '}
          <input
            data-testid="name-input"
            type="text"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description-input">
          Descrição:
          {' '}
          <textarea
            data-testid="description-input"
            id="description-input"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1-input">
          Inteligência:
          {' '}
          <input
            data-testid="attr1-input"
            type="number"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            max="90"
            min="0"
          />
        </label>
        <label htmlFor="attr2-input">
          Força:
          {' '}
          <input
            data-testid="attr2-input"
            type="number"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            max="90"
            min="0"
          />
        </label>
        <label htmlFor="attr3-input">
          Velocidade:
          {' '}
          <input
            data-testid="attr3-input"
            type="number"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            max="90"
            min="0"
          />
        </label>
        <p>
          Pontos sobrando:
          {' '}
          {totalPoints}
        </p>
        {maxPoints ? '' : <p>Limite de pontos atingido.</p>}
        <label htmlFor="image-input">
          Imagem:
          {' '}
          <input
            data-testid="image-input"
            type="text"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rare-input">
          Raridade:
          {' '}
          <select
            data-testid="rare-input"
            id="rare-input"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        {hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : inputTrumfo}

        <button
          data-testid="save-button"
          id="save-button"
          type="submit"
          onClick={ (event) => {
            event.preventDefault();
            onSaveButtonClick(this.props);
          } }
          disabled={ isSaveButtonDisabled }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;

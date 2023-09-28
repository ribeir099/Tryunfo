import React from "react";
import PropTypes from "prop-types";

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
    const totalPoints =
      possiblePoints -
      (parseInt(cardAttr1, 10) +
        parseInt(cardAttr2, 10) +
        parseInt(cardAttr3, 10));
    const maxAtributePoints = 90;
    const maxPoints =
      totalPoints >= 0 &&
      cardAttr1 <= maxAtributePoints &&
      cardAttr1 >= 0 &&
      cardAttr2 <= maxAtributePoints &&
      cardAttr2 >= 0 &&
      cardAttr3 <= maxAtributePoints &&
      cardAttr3 >= 0;

    const inputTrunfo = (
      <label htmlFor="trunfo-input" className="mb-10 font-semibold accent-green-800">
        Super Trunfo:{" "}
        <input
          type="checkbox"
          name="cardTrunfo"
          checked={cardTrunfo}
          onChange={onInputChange}
        />
      </label>
    );

    return (
      <form className="flex flex-col items-baseline w-1/2 ml-20">
        <label className="m-2.5 flex flex-col w-1/2 mb-5 font-semibold" htmlFor="name-input">
          Nome:{" "}
          <input
            className="border-2 border-green-800 p-2"
            type="text"
            name="cardName"
            value={cardName}
            onChange={onInputChange}
          />
        </label>
        <label
          className="m-2.5 flex flex-col w-1/2 font-semibold"
          htmlFor="description-input"
        >
          Descrição:{" "}
          <textarea
            className="border-2 border-green-800 p-2"
            id="description-input"
            name="cardDescription"
            value={cardDescription}
            onChange={onInputChange}
          />
        </label>
        <label
          className="m-2.5 w-1/4 flex justify-between mt-10 items-center font-semibold"
          htmlFor="attr1-input"
        >
          Inteligência:{" "}
          <input
            className="border-2 border-green-800 p-2"
            type="number"
            name="cardAttr1"
            value={cardAttr1}
            onChange={onInputChange}
            max="90"
            min="0"
          />
        </label>
        <label
          className="m-2.5 w-1/4 flex justify-between items-center font-semibold"
          htmlFor="attr2-input"
        >
          Força:{" "}
          <input
            className="border-2 border-green-800 p-2"
            type="number"
            name="cardAttr2"
            value={cardAttr2}
            onChange={onInputChange}
            max="90"
            min="0"
          />
        </label>
        <label
          className="m-2.5 w-1/4 flex justify-between items-center font-semibold"
          htmlFor="attr3-input"
        >
          Velocidade:{" "}
          <input
            className="border-2 border-green-800 p-2"
            type="number"
            name="cardAttr3"
            value={cardAttr3}
            onChange={onInputChange}
            max="90"
            min="0"
          />
        </label>
        <p className="mb-10 w-1/2 text-right font-semibold">Pontos sobrando: {totalPoints}</p>
        {maxPoints ? "" : <p>Limite de pontos atingido.</p>}
        <label className="m-2.5 flex flex-col w-1/2 font-semibold" htmlFor="image-input">
          Imagem:{" "}
          <input
            className="border-2 border-green-800 p-2 mb-5"
            type="text"
            name="cardImage"
            value={cardImage}
            onChange={onInputChange}
          />
        </label>
        <label className="m-2.5 flex flex-col w-1/2 mb-10 font-semibold" htmlFor="rare-input">
          Raridade:{" "}
          <select
            id="rare-input"
            name="cardRare"
            value={cardRare}
            onChange={onInputChange}
            className="bg-white"
          >
            <option value=""></option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        {hasTrunfo ? (
          <p className="mb-10 font-semibold">Você já tem um Super Trunfo em seu baralho</p>
        ) : (
          inputTrunfo
        )}

        <button
          id="save-button"
          className="mb-10 bg-green-800 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            onSaveButtonClick(this.props);
          }}
          disabled={isSaveButtonDisabled}
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

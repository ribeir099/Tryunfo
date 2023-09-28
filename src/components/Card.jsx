import React from "react";
import PropTypes from "prop-types";

class Card extends React.Component {
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
    } = this.props;
    return (
      <div className="flex flex-col items-center border-8 border-white m-10 w-1/4">
        <div className="bg-green-800 w-full p-5">
          <img src={cardImage} alt={cardName} className="w-1/2 m-auto" />
          <p className="h-10 bg-green-950 text-white flex items-center justify-center font-bold mt-5">{cardName}</p>
          <p className="mb-5 bg-gray-200 p-5 text-sm">{cardDescription}</p>

          <p className="bg-gray-200 px-2 my-5 rounded-md">Inteligência: {cardAttr1}</p>
          <p className="bg-gray-200 px-2 my-5 rounded-md">Força: {cardAttr2}</p>
          <p className="bg-gray-200 px-2 my-5 rounded-md">Velocidade: {cardAttr3}</p>

          <p className="bg-green-950 text-white p-2 rounded font-bold w-fit flex m-auto">{cardRare}</p>
          {cardTrunfo ? <p>Super Trunfo</p> : ""}
        </div>
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

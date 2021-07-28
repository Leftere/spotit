import React from "react";
import Card from "./Card";

function CardPile(props) {
  let { currentCard } = props;

  return <Card card={currentCard} position={{ right: 280 }} />;
}

export default CardPile;

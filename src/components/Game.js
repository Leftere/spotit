import React, { useEffect, useState } from "react";
import Computer from "./game/Computer";
import CardPile from "./game/CardPile";
import User from "./game/User";
import data from "../data/spotIt/8Items.json";

function Game(props) {
  let {
    username,
    cardPile,
    setCardPile,
    computerCards,
    setComputerCards,
    userCards,
    setUserCards,
    reset,
  } = useCards(data);

  function dealNewCard({ to }) {
    if (cardPile.length > 0) {
      let newCardPile = [...cardPile];
      newCardPile.shift();
      let newUserCards =
        to != "computer" ? [currentCard, ...userCards] : userCards;
      let newComputerCards =
        to == "computer" ? [currentCard, ...computerCards] : computerCards;
      setCardPile(newCardPile);
      setUserCards(newUserCards);
      setComputerCards(newComputerCards);
    }
  }

  let currentCard = cardPile[0];

  let numberOfUserCards = userCards.length;
  let numberOfComputerCards = computerCards.length;

  return (
    <>
      {cardPile.length == 0 ? (
        numberOfComputerCards > numberOfUserCards ? (
          "Computer Wins!"
        ) : (
          "You won!"
        )
      ) : (
        <div style={{ position: "relative", right: 80 }}>
          <Computer
            cards={computerCards}
            currentCard={currentCard}
            dealNewCard={dealNewCard}
          />
          <CardPile cards={cardPile} currentCard={currentCard} />
          <User
            username={username}
            cards={userCards}
            currentCard={currentCard}
            dealNewCard={dealNewCard}
          />
        </div>
      )}
      <div
        style={{
          position: cardPile.length == 0 ? "inherit" : "relative",
          left: 180,
          bottom: 400,
        }}
      >
        <div style={{ fontStyle: "italic" }}>Score</div>
        <div>User: {numberOfUserCards}</div>
        <div>Computer: {numberOfComputerCards}</div>
        {cardPile.length == 0 && <button onClick={reset}>Restart</button>}
      </div>
    </>
  );
}

export default Game;

function useCards(data) {
  let [cardPile, setCardPile] = useState([]);
  let [computerCards, setComputerCards] = useState([]);
  let [userCards, setUserCards] = useState([]);

  useEffect(
    function () {
      initialize();
    },
    [data]
  );

  function initialize() {
    let cardPile = shuffle(data);
    let [card1, card2, ...cards] = cardPile;
    setCardPile(cards);
    setComputerCards([card1]);
    setUserCards([card2]);
  }

  function reset() {
    initialize();
  }

  return {
    cardPile,
    setCardPile,
    computerCards,
    setComputerCards,
    userCards,
    setUserCards,
    reset,
  };
}

function shuffle(data) {
  let cards = [...data];
  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }
  return cards;
}

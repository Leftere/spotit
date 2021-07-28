import React from "react";
import Card from "./Card";

function User(props) {
  let { cards, currentCard, dealNewCard, username } = props;
  function itemClicked(item) {
    if (currentCard.indexOf(item) != -1) {
      dealNewCard({to: username})
    }
  }
  return (
    <div className="user-card">
      <Card label="User" card={cards[0]} itemClicked={itemClicked} position={{ bottom: 80 }} />
    </div>
  );
}

export default User;

import React from "react";
import Card from "./Card";
import { useInterval } from "../../customHooks";

function Computer(props) {
  let { cards, dealNewCard } = props;
  useInterval(function () {
    dealNewCard({ to: "computer" });
  }, 10000);
  return <Card label="Computer" card={cards[0]} position={{ top: 80 }} />;
}

export default Computer;

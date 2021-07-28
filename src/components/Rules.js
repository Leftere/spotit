import React from "react";

function Rules(props) {
  return (
    <div>
      <section style={{ height: "500px", overflowY: "auto" }}>
        <div className="spacer">
          <div className="bold">Description</div>
          <div>
            Spot it! consists of 57 cards, with 8 symbols per card from the 57
            available. Each card is decorated with universal images or words for
            early readers, including sight words. There is only one identical
            symbol in common between each card, it is up to you to find out
            which one.
          </div>
        </div>
        <div className="spacer">
          <div className="bold">Object of the game</div>
          <div>
            No matter the game, you always need to be the fastest to spot the
            identical symbol between two cards, name it out loud and then take
            the card, place it or discard it depending on the rules of the
            mini-game you're currently playing.
          </div>
        </div>
        <div className="spacer">
          <div className="bold">Basic Game play</div>
          <div>
            The User will be one player and the Computer will be the second
            player. Both the user and the computer will receive a card and the
            middle card will be flipped over. <br />A random number will be
            selected between 1 and 10 seconds for the computer to reveal a match
            with its card. Meanwhile, the user will have the ability to select
            by click the image that matches with an image on the middle card.{" "}
            <br />
            If the user clicks on the image before the random time has elapsed,
            the user gets the middle card and play resumes with the new card now
            being the users current card. If the random time has elapsed, the
            computer will win the round and the program will highlight the
            matching images between the computer's card and the middle card. The
            middle card will now become the computers' new card to match with.
          </div>
        </div>
      </section>
    </div>
  );
}

export default Rules;

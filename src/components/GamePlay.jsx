import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { useState } from "react";

// THIS IS THE BRAIN OF OUR GAME
// GAME CONTROLLER EVERYTHING PASSES THROUGH
// THIS ONLY FROM TOTAL SCORE, INPUT AS A SELECTED NUMBER,
// ROLL DICE, UPDATE SCORE, RESET SCORE

/*
🎯 Now What Happens

User clicks number →
GamePlay.selectedNumber updates →
RollDice sees correct value →
Error disappears →
Game works correctly.

💡 Why This Is Important

Because React works with:

Single Source of Truth

The parent controls the state.
Children only use or update it.

🚀 Quick Self Test

Ask yourself:

“Does this state affect multiple components?”

If yes → Move it to parent.
*/

const GamePlay = () => {
  // now gameplay becomes the brain
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [score, setScore] = useState(0);
  const [diceNumber, setDiceNumber] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    setError("");
    const random = Math.floor(Math.random() * 6 + 1);
    console.log("generated value", random);

    setDiceNumber(random);

    if (selectedNumber === random) {
      setScore((prev) => prev + random);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(null);
  };

  const resetGame = () => {
    setScore(0);
    setSelectedNumber(null);
    setDiceNumber(1);
    setError("");
  };

  const rulesCard = () => {
    setShowRules(!showRules);
  };
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score}></TotalScore>
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
        ></NumberSelector>
      </div>

      <RollDice
        diceNumber={diceNumber}
        rollDice={rollDice}
        resetGame={resetGame}
        rulesCard={rulesCard}
        showRules={showRules}
        setShowRules={setShowRules}
      ></RollDice>

      {showRules && (
        <RulesCard>
          <h2>How to play dice game</h2>
          <p> </p>
          <p>Select any number</p>
          <p>Click on dice image</p>
          <p>
            after click on dice if selected number is equal to dice number you
            will get same point as dice{" "}
          </p>
          <p>if you get wrong guess then 2 point will be dedcuted </p>
        </RulesCard>
      )}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding: 70px 20px 40px 20px;
  max-width: 1200px;
  margin: 0 auto;

  .top_section {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 40px;
  }

  @media (max-width: 900px) {
    .top_section {
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
  }
`;
const RulesCard = styled.div`
  max-width: 600px;
  margin: 40px auto 0 auto;
  padding: 24px 20px;
  background-color: #f2e9e9;
  border-radius: 8px;

  h2 {
    font-size: 20px;
    margin-bottom: 16px;
    font-weight: 600;
  }

  p {
    font-size: 14px;
    margin: 6px 0;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    padding: 20px 16px;

    h2 {
      font-size: 18px;
    }

    p {
      font-size: 13px;
    }
  }
`;


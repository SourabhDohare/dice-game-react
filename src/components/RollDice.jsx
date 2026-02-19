import { useState } from "react";
import styled from "styled-components";

const RollDice = ({
  diceNumber,
  rollDice,
  resetGame,
  showRules,
  setShowRules,
}) => {
  return (
    <RollDiceContainer>
      <DiceSection onClick={rollDice}>
        <img
          src={new URL(`../assets/${diceNumber}.png`, import.meta.url).href}
        />
        {/* Dynamically load image from assets folder
        Based on diceNumber
        And generate a proper absolute path
        That works in both dev and production build */}
        {/* Use new URL() when: *
         Image path is dynamic
        Filename depends on state
        You are inside src folder
        Using Vite 
        import.meta.url → current file location
        new URL(path, base) → build correct absolute URL
        .href → convert to string
        */}
        <h3>Click on Dice to roll</h3>
      </DiceSection>
      <ButtonGroup>
        <ResetScoreButton onClick={resetGame}>Reset Score</ResetScoreButton>
        <ShowRuleButton onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide Rules" : "Show Rules"}
        </ShowRuleButton>
      </ButtonGroup>
    </RollDiceContainer>
  );
};

export default RollDice;

const RollDiceContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  padding: 0 20px;
`;

const DiceSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  text-align: center;

  img {
    width: 220px;
    height: 220px;
    max-width: 100%;
  }

  h3 {
    font-size: 22px;
    font-weight: 500;
    margin-top: 12px;
  }

  @media (max-width: 480px) {
    img {
      width: 180px;
      height: 180px;
    }

    h3 {
      font-size: 18px;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 300px;
`;

const ShowRuleButton = styled.button`
  width: 100%;
  font-size: 16px;
  background-color: black;
  color: white;
  padding: 12px;
  border-radius: 6px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.3s;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;


const ResetScoreButton = styled(ShowRuleButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: 1px solid white;
  }
`;

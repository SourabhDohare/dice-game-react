import styled from "styled-components";
import Dices from "../assets/Dices.png";
const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src={Dices} alt="Dice Illustration" />
      </div>
      <div className="content">
        <h1>Dice game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;
const Container = styled.div`
  max-width: 1180px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  img {
    max-width: 100%;
    height: auto;
  }

  .content {
    text-align: center;

    h1 {
      font-size: 72px;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;

    .content h1 {
      font-size: 48px;
    }
  }
`;

const Button = styled.button`
  font-size: 16px;
  background-color: black;
  color: white;
  padding: 10px 18px;
  border-radius: 5px;
  min-height: 44px;
  min-width: 220px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;

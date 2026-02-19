import styled from "styled-components";

const NumberSelector = ({ selectedNumber, setSelectedNumber, error }) => {
  const arrayNumbers = [1, 2, 3, 4, 5, 6];

  console.log(selectedNumber);
  {
    /* whenever use map use key in the child components for dom tracking */
  }
  return (
    <NumberSelectorContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div className="flex">
        {/* pass the value by anyonmous function by on click */}
        {/* If a prop is only for styling, always prefix it with $. */}
        {arrayNumbers.map((value, index) => (
          <Box
            key={value}
            $isSelected={value === selectedNumber}
            onClick={() => setSelectedNumber(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const Box = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid black;
   /* If a prop is only for styling, always prefix it with $. */
  background-color: ${(props) => (props.$isSelected ? "black" : "white")};
  color: ${(props) => (props.$isSelected ? "white" : "black")};
   /* display: grid;: Defines the element as a grid container.
  place-items: center;: A shorthand for align-items: center (vertical) and justify-items: center (horizontal).
  Usage: Ideal for centering divs, text, or forms in the middle of the screen (often combined with height: 100vh). */
  display: grid;
  place-items: center;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  transition: 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 18px;
  }
`;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;

  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }

  p {
    font-size: 20px;
    font-weight: 600;
  }

  @media (max-width: 900px) {
    align-items: center;
  }
`;


const ErrorMessage = styled.div`
  font-size: 24px;
  color: red;
`;

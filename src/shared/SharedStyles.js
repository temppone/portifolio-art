import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  align-content: ${({ alignContent }) => alignContent};

  margin: ${({ margin }) => margin};

  padding: 1rem;

  width: ${({ width }) => width};

  background: ${({ background }) => background};
`;

import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  align-content: ${({ alignContent }) => alignContent};

  margin: ${({ margin }) => margin};

  padding: ${({ padding }) => padding};

  width: ${({ width }) => width};

  background: ${({ background }) => background};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    flex-direction: row;
    width: 1280px;
    margin: 0 auto;
  }
`;

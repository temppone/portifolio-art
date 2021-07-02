import styled from 'styled-components';
import { FlexContainer } from '../../shared/SharedStyles';

export const FlexContainerHome = styled(FlexContainer)`
  background: tomato;
  margin: 5rem auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    height: auto;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    flex-direction: row;
  }
`;

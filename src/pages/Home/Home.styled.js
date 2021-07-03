import styled from 'styled-components';
import { FlexContainer } from '../../shared/SharedStyles';

export const FlexContainerHome = styled(FlexContainer)`
  background: transparent;
  margin: 1rem auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    height: auto;
    margin: 2rem auto;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 3rem auto;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 4rem auto;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 5rem auto;
    flex-direction: row;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    flex-direction: row;
  }
`;

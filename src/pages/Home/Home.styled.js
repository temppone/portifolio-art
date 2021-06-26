import styled from 'styled-components';
import { FlexContainer } from '../../shared/SharedStyles';

export const FlexContainerHome = styled(FlexContainer)`
  @media (min-width: ${({ theme }) => theme.breapoints.smallMobile}) {
    background: tomato;
  }
`;

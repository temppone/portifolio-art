import styled from 'styled-components';
import { FlexContainer } from '../../shared/SharedStyles';

export const FlexContainerHome = styled(FlexContainer)`
  @media (min-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    height: 50rem;
    width: 1280px;
  }
`;

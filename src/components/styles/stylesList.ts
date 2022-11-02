import styled from 'styled-components';
import theme from '../../../config/utils/themes';

export const TextList = styled.p`
  font-family: Inter;
  font-weight: '400';
  font-size: 14px;
  color: ${theme.White}
`;

export const TextSymbol = styled.p`
  font-family: Inter;
  font-weight: bold;
  font-size: 16px;
  color: ${theme.Grey};
  padding-left: 4px;
`;

export const TextPercent = styled.p`
  textalign: right;
  color: ${props =>
    props.positivePercent ? theme.colors.bullish : theme.colors.bearish};
  width: auto;
`;
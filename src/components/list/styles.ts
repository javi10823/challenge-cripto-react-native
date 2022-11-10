import styled from 'styled-components'
import theme from '../../config/utils/theme';
import {Text as TextRN, View as ViewRN, Image as ImageRN} from 'react-native';

export const Container = styled(ViewRN)`
  flex: 1;
  padding-horizontal: 10px;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerLeft = styled(ViewRN)`
  justify-content: flex-start;
  display: flex;
  flex-flow: wrap;
`;

export const ContainerLogo = styled(ViewRN)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 7.5%;
  padding-left: 3%;
`;

export const ContainerText = styled(ViewRN)`  
  display: flex;
  justify-content: center;
  text-align: left;
`;

export const TextCoin = styled(TextRN)`
  font-family: Inter;
  font-weight: bold;
  font-size: 16px;
  color: ${theme.colors.black}
`;

export const TextSymbol = styled(TextRN)`
  font-family: Inter;
  font-weight: bold;
  font-size: 16px;
  color: ${theme.colors.grey};
`;

export const ContainerRight = styled(ViewRN)`
  justify-content: flex-end;
  display: flex;
  flex-flow: wrap;
`;

export const ContainerChange = styled(ViewRN)`
  padding-horizontal: 10px;
  justify-content: flex-end;
  display: flex;
  align-items: space-between;
  padding-vertical: 24px;
  padding-horizontal: 20px;
`;

export const TextPercent = styled(TextRN)`
  flex-direction: row;
  justify-content: flex-end;
`;

export const TextGreen = styled(TextRN)`
  color: ${theme.colors.green};
  font-size: 14px;
`;

export const TextRed = styled(TextRN)`
  color: ${theme.colors.red};
  font-size: 14px;
`;

export const Line = styled(TextRN)`
  background-color: ${theme.colors.lineGrey};
  height: 2px;
  width: 85%;
  margin-vertical: 10px;
  margin-horizontal: 24px;
`;

export const CryptoLogo = styled(ImageRN)`
  width: 50px;
  height: 50px;
`;

export const Arrow = styled(ImageRN)`
  width: 13px;
  height: 13px; 
`;
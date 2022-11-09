import styled from 'styled-components';
import Color from '../../../config/utils/themes';
import {Text as TextRN, Image as ImageRN, View as ViewRN} from 'react-native'

export const TopBar = styled(ViewRN)`
  padding-vertical: 42px;
  padding-horizontal: 24px;
  background-color: ${Color.Blue};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  
`;

export const Text = styled(TextRN)`
  font-family: Inter;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  color: ${Color.White};
`;

export const ProfilePhoto = styled(ImageRN)`
  width: 55px;
  height: 55px;
  border-radius: 100px;
`;

export const Container = styled(ViewRN)`
  margin-top: 48px;
  display: flex;
  align-items: center;

 
`;
export const TextTouchable = styled(TextRN)`
  font-size: 16px;
  align-items: center;
  color: ${Color.Blue}
`;
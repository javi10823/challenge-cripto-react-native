import styled from 'styled-components';
import Color from '../../../config/utils/themes';

export const TopBar = styled.p`
  padding-top: '42px';
  padding-bottom: 42px;
  padding-horizontal: 24px;
  background-color: ${Color.Blue};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-family: Inter;
  font-weight: '400';
  font-size: 16px;
  line-height: 28px;
  color: ${Color.White};
`;

export const ProfilePhoto = styled.p`
  width: 55px;
  height: 55px;
  border-radius: 100px;
`;

export const Container = styled.p`
  margin-top: 48px;
  display: flex;
  align-items: center;
`;
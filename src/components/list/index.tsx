import React from 'react';
import { Crypto } from '../interfaces/index';
import {
  Container,
  ContainerLogo,
  CryptoLogo,
  ContainerText,
  TextCoin,
  TextSymbol,
  ContainerLeft,
  ContainerRight,
  ContainerChange,
  Arrow,
  TextPercent,
  TextPercentage,
  Line,

} from '../list/styles';
import GreenArrow from '../../assets/img/GreenArrow.png';
import RedArrow from '../../assets/img/RedArrow.png';

const List = ({ item }: { item: Crypto }) => (
  <>
    <Container>
      <ContainerLeft>
        <ContainerLogo>
          <CryptoLogo source={item.img} />
        </ContainerLogo>
        <ContainerText>
          <TextCoin>{item.name}</TextCoin>
          <TextSymbol>{item.symbol}</TextSymbol>
        </ContainerText>
      </ContainerLeft>
      <ContainerRight>
        <ContainerChange>
          <TextCoin>${item.price}</TextCoin>
          <TextPercent>
            <Arrow source={item.percent > 0 ? GreenArrow : RedArrow} />
            <TextPercentage positive={item.percent > 0}> {item.percent}% </TextPercentage>
          </TextPercent>
        </ContainerChange>
      </ContainerRight>
    </Container>
    <Line />
  </>
);

export default List;
/* import React from 'react'; */
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
  TextGreen,
  TextRed,
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
            {item.percent > 0 ? (
              <>
                <Arrow source={GreenArrow} />
                <TextGreen> {item.percent}% </TextGreen>
              </>
            ) : (
              <>
                <Arrow source={RedArrow} />
                <TextRed> {item.percent}% </TextRed>
              </>
            )}
          </TextPercent>
        </ContainerChange>
      </ContainerRight>
    </Container>
    <Line />
  </>
);

export default List;
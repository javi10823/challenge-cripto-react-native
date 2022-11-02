import React from 'react';
import {Crypto} from './interfaces/index';
import {
  TextList,
  Container,
  CryptoLogo,
  Line,
  Arrow,
  TextPercent,
  TextSymbol,
} from './styles/stylesList';
import greenarrow from './img/greenarrow.png';
import redarrow from './img/redarrow.png';

const List = ({item}: {item: Crypto}) => (
  <>
    <Container container>
      <Container containerPaddingLP>
        <CryptoLogo source={item.img} />
        <Container paddingLeft>
          <TextList> {item.name} </TextList>
          <TextSymbol>{item.symbol}</TextSymbol>
        </Container>
      </Container>
      <Container center>
        <Container>
          <TextList>${item.price}</TextList>
          <Container price>
            <Arrow source={item.percent > 0 ? greenarrow : redarrow} />
            <TextPercent positivePercent={item.percent > 0}>
              {Math.abs(item.percent)}%
            </TextPercent>
          </Container>
        </Container>
      </Container>
    </Container>
    <Container center>
      <Line />
    </Container>
  </>
);

export default List;
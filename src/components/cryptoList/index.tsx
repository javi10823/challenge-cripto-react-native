import React from 'react';
import {TouchableOpacity, FlatList} from 'react-native';
import {Crypto} from '../interfaces/index';
import List from '../list/index';
import {Container, Text, TopBar, ProfilePhoto, TextTouchable} from '../cryptoList/styles';
import avatar from '../../assets/img/avatar.png'


const CryptocurrenciesList = () => {
  const cryptos: Crypto[] = [
    {
      id: '1',
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 19218.36,
      percent: -0.79,
      img: require('../../assets/img/bitcoin.png'),
    },
    {
      id: '2',
      name: 'Ethereum',
      symbol: 'ETH',
      price: 1302.547,
      percent: 1.2,
      img: require('../../assets/img/ethereum.png'),
    },
    {
      id: '3',
      name: 'XRP',
      symbol: 'XRP',
      price: 0.489701,
      percent: 0.47,
      img: require('../../assets/img/xrp.png'),
    },
  ];

  const renderItem = ({item}: {item: Crypto}) => <List item={item} />;

  return (
    <>
      <TopBar>
         <Text>CryptoTracker Pro</Text>
        <ProfilePhoto source={avatar} /> 
      </TopBar> 
      <FlatList
        data={cryptos}
        renderItem={renderItem}
        keyExtractor={({id}) => id}
      />
      
      <Container>
        <TouchableOpacity >
          <TextTouchable>
            + Add a Cryptocurrency
          </TextTouchable>
        </TouchableOpacity>
      </Container> 
    </>
  );
};

export default CryptocurrenciesList;
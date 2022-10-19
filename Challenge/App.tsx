
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from 'react-native';
import avatar from './src/components/img/avatar.png';
import ListOfCurrencies from './src/components/ListOfCrypto';
import styles from './src/components/styles/stylesApp'


const App = () => {

  const addCurrencyHandler = () =>{
      
  }



  return (
    <SafeAreaView style={styles.areaView}>
      <View style= {styles.header}>
        <Text style={styles.text}> CryptoCurrency Pro</Text>
      <Image 
        style={styles.image}
        source = { avatar}
      />
      </View>
      
     <ListOfCurrencies />
      
      <Pressable
        onPress={addCurrencyHandler}
      >
          <Text style={styles.pressable}>+ Add a Cryptocurrency</Text>
      </Pressable>
    </SafeAreaView>
      
  );
};


export default App;

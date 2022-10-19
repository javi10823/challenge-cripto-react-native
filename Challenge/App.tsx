
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


const App = () => {

  const addCurrencyHandler = () =>{
      console.log("Estás tocando")
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

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flex: 0.4,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#385775',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'
  },
  text: {
    fontFamily: 'Inter',
    fontWeight: "700",
    fontSize: 20,
    color: 'white',
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 100 / 2,
  },
  pressable: {
    color: '#385775',
    marginTop: 25,
    fontFamily: 'Inter',
    fontWeight: "400",
  }
});


export default App;

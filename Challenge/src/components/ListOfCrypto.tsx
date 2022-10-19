import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Image, StyleSheet } from "react-native";
import list from "./list";

/* export default function List(){

    const [list, setList] = useState()

  useEffect (()=> {
   async function Data() {
    const response = await fetch('https://data.messari.io/api/v1/assets');
    const json = await response.json();
     setList(json.data)
   } 
   Data();
}, [])  
} */

const ListOfCurrencies = () => {
    return (
        <View style={styles.container}>
            {list.map(c => (
                <>
                    <View style={styles.crypto} key={c.id}>
                        <View style={styles.crypoProfile}>
                            <Image
                                style={styles.image}
                                source={c.img}
                            />
                            <View style={styles.cryptoInfo}>
                                <Text style={styles.name}>{c.name}</Text>
                                <Text style={styles.symbol}>{c.symbol}</Text>
                            </View>
                        </View>
                        <View style={styles.cryptoPrice}>
                            <Text style={styles.name}>${c.price}</Text>
                            <View style={styles.cryptoPercent}>
                                <Image source={c.percent > 0 ? c.arrowGreen : c.arrowRed} />
                                <Text style={[styles.percentContainer, c.percent > 0 ? styles.colorGreen : styles.colorRed]}>{c.percent}%</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.line}></View>
                </>
            ))}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    crypto: {
        marginTop: 10,
        paddingVertical: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 25,
       
    },
    crypoProfile: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    cryptoInfo: {
        marginLeft: 15,

    },
    cryptoPercent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cryptoPrice: {
        alignItems: 'flex-end'
    },
    image: {
        width: 50,
        height: 50,
    },
    name: {
        fontFamily: 'Inter',
        fontWeight: "600",
        fontSize: 20,
        color: 'black',
    },
    symbol: {
        fontFamily: 'Inter',
        fontWeight: "400",
        fontSize: 14,
        color: 'black',
    },
    percentContainer: {
        fontFamily: 'Inter',
        fontWeight: "400",
        fontSize: 14,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 5,
    },
    colorGreen: {
        color: '#0A8150'
    },
    colorRed: {
        color: '#DE3617'
    },
    line: {
        borderBottomColor: '#E4E8EB',
        borderBottomWidth: 2,
        width: '85%',
    },
});


export default ListOfCurrencies



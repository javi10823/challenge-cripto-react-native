import React, { useEffect, useState } from "react";
import { FlatList, Text, View, Image, StyleSheet } from "react-native";
import list from "./list";
import styles from "./styles/stylesList";

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


export default ListOfCurrencies



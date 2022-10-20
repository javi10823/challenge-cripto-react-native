import { StyleSheet } from "react-native";
import Color from "../themes/color";

export default StyleSheet.create({
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
        color: Color.Black,
    },
    symbol: {
        fontFamily: 'Inter',
        fontWeight: "400",
        fontSize: 14,
        color: Color.Black,
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
        color: Color.Green
    },
    colorRed: {
        color: Color.Red
    },
    line: {
        borderBottomColor: Color.Grey,
        borderBottomWidth: 2,
        width: '85%',
    },
});
import { StyleSheet } from "react-native";
import Color from "../themes/color";

export default StyleSheet.create({
    areaView: {
      flex: 1,
      alignItems: 'center',
    },
    header: {
      flex: 0.4,
      display: 'flex',
      paddingHorizontal: 22,
      flexDirection: 'row',
      backgroundColor: Color.Blue,
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%'
    },
    text: {
      fontFamily: 'Inter',
      fontWeight: "700",
      fontSize: 20,
      color: Color.White,
    },
    image: {
      width: 55,
      height: 55,
      borderRadius: 100 / 2,
    },
    pressable: {
      color: Color.Blue,
      marginTop: 25,
      fontFamily: 'Inter',
      fontWeight: "400",
    }
  });

import { StyleSheet } from "react-native";

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
      backgroundColor: '#385775',
      justifyContent: 'space-between',
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
